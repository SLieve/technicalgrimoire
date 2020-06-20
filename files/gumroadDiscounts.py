import csv
import re
import io

# A script to generate gumroad discounts from a CSV file

# Enable less secure connections: https://myaccount.google.com/lesssecureapps
# for email password
#password = input("Type your email password and press enter:")

# Access token to generate the individual discount codes
ACCESS_TOKEN = "123"

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
        if WhichZine == "PDF of Tempered Legacy" or WhichZine2 == "Print + PDF of Tempered Legacy" or Reward == "Both Zines (Print + PDF)" or Reward == "Both Zines (PDF)":
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

        # Create the plain-text and HTML version of your message
        text = """\
        Hello PERSONNAME!

        Thanks so much for your support! I'm so excited to deliver the PDF of Tempered Legacy.You can download it here:

        https://gum.co/HnQeI/OFFERCODE

        Let me know if you have any questions or issues!

        - David
        """

        html = """\
        <html>
        <body>
        <h2>Hello PERSONNAME!</h2>

        <p>Thanks so much for your support! I'm so excited to deliver the PDF of Tempered Legacy. <strong>You can download it here:</strong></p>

        <p><a href="https://gum.co/HnQeI/OFFERCODE">https://gum.co/HnQeI/OFFERCODE</a></p>

        <p>Let me know if you have any questions or issues!</p>

        <p>   - David</p>

        </body>
        </html>
        """
        
