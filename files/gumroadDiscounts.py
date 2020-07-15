import csv
import re
import io
import json
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests

# A script to generate gumroad discounts from a CSV file
# pip3 install --upgrade requests

# Enable less secure connections in your email: https://myaccount.google.com/lesssecureapps
# for email password
password = input("Type your email password and press enter:")

# Access token to generate the individual discount codes
ACCESS_TOKEN = "123"

def create_offer_code(email_addr):
    PRODUCT_ID="u1C7m3GTB_avjtZLK5sO9A=="

    headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
    payload = {
        'access_token':ACCESS_TOKEN,
        'name':email_addr.replace('.',''),
        'amount_off':'100',
        'offer_type':'percent',
        'max_purchase_count':'1'
    }

    r = requests.post('https://api.gumroad.com/v2/products/'+PRODUCT_ID+'/offer_codes', params=payload, headers=headers)

    print(r.text)

    offer_json = json.loads(r.text)
    return offer_json['offer_code']['name']


def email_code(name,email_addr,offer_code):

    sender_email = "technicalgrimoire@gmail.com"
    receiver_email = email_addr

    message = MIMEMultipart("alternative")
    message["Subject"] = "Tempered Legacy Pre-Order Code"
    message["From"] = sender_email
    message["To"] = receiver_email

    # Create the plain-text and HTML version of your message
    text = """\
    Hello PERSONNAME!

    Thanks so much for supporting the Kickstarter for Tempered Legacy. Click the link below to order your copy and pay the shipping costs:

    https://gum.co/GVZjRc/OFFERCODE

    The offer code is for $100 off the listed price. This is to give backers the chance to order their copies early. After all backers have placed their orders I will lower the price to the normal $10.

    NOTE: If you backed at "Both Zines" level, then you can wait until Marsh Goons is ready and order both to save on shipping. Or if you're impatient you can order Tempered Legacy now, and then Marsh Goons when it is available (paying shipping for both separately).

    Let me know if you have any questions or issues!

    - David
    """

    html = """\
    <html>
    <body>
    <h2>Hello PERSONNAME!</h2>

    <p>Thanks so much for supporting the Kickstarter for Tempered Legacy. <strong>Click the link below</strong> to order your copy and pay the shipping costs:</p>

    <p><a href="https://gum.co/GVZjRc/OFFERCODE">https://gum.co/GVZjRc/OFFERCODE</a></p>

    <p>The offer code is for $100 off the listed price. This is to give backers the chance to order their copies early. After all backers have placed their orders I will lower the price to the normal $10.</p>

    <p><strong>NOTE:</strong> If you backed at "Both Zines" level, then you can wait until Marsh Goons is ready and order both to save on shipping. Or if you're impatient you can order Tempered Legacy now, and then Marsh Goons when it is available (paying shipping for both separately).

    <p>Let me know if you have any questions or issues!</p>

    <p>   - David</p>

    </body>
    </html>
    """

    text = text.replace("PERSONNAME", name)
    text = text.replace("OFFERCODE", offer_code)

    html = html.replace("PERSONNAME", name)
    html = html.replace("OFFERCODE", offer_code)

    # Turn these into plain/html MIMEText objects
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(part1)
    message.attach(part2)

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )

with open('backers.csv', encoding="utf8") as f:
    reader = csv.reader(f)
    for row in reader:

        email = ""

        ### Going line by line through the CSV
        Name = row[2] #KS Backer name - C
        KSEmail = row[3].rstrip() #KS Email - D
        Reward = row[4] #General Reward - E
        WhichZine = row[17] #Survey Zine - R
        WhichEmail = row[18] #Survey Email - S
        DTRPGEmail = row[19] # T
        WhichEmail2 = row[20] # U
        DTRPGEmail2 = row[21] # V
        WhichZine2 = row[22] # W
        WhichEmail3 = row[23] # X
        DTRPGEmail2 = row[24] # Y
        WhichEmail4 = row[25] # Z
        DTRPGEmail3 = row[26] # AA

        ### We're just going to do the Tempered Legacy PDF for now.
        ### Grab the latest email
        if WhichZine2 == "Print + PDF of Tempered Legacy" or Reward == "Both Zines (Print + PDF)":
            email = KSEmail
            if (WhichEmail != ""):
                email = WhichEmail
            if (WhichEmail2 != ""):
                email = WhichEmail2
            if (WhichEmail3 != ""):
                email = WhichEmail3
            if (WhichEmail4 != ""):
                email = WhichEmail4
            print(email)

            offer = create_offer_code(email)
            input("Make sure the offer code was created! Hit Enter to continue")

            email_code(Name,email,offer)
            print("EMAIL SENT:  " + email + "  Hit Enter to continue")

