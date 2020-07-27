var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    troika = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/assets/generator_resources/troika.json", true);
xmlhttp.send();

var CHARname = "";
var allColors = [ "Crimson","Purple","Gold", "Lime", "Teal", "Honeydew", "Coral", "Silver", "Fuchsia", "Orange",   "Olive", "Green", "Blue", "Yellow", "Maroon", "Navy", "Indigo", "Tomato",  "Tan",  "Brown"];
var degrees = 0;
var background;
var card = document.getElementById('troikacardsides');

function generate(source) {

  skill = Math.floor(Math.random() * 3) + 4;
  stamina = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 14;
  luck = Math.floor(Math.random() * 6) + 7;

  console.log(source);
  if (source == "core"){
    background = troika.Backgrounds[Math.floor(Math.random() * 36)];
  } else {
    background = troika.Backgrounds[Math.floor(Math.random() * troika.Backgrounds.length)];
  }

  CHARname = background.Name;
  document.getElementById("bgName").innerHTML = CHARname;
  document.getElementById("bgSrc").innerHTML = background.Source + " Consider supporting this creator!";

  provisions = ["2d6 Silver Pence", "Knife (DMG 2, 2, 2, 2, 4, 8, 10)", "Lantern & flask of oil", "Rucksack", "6 Provisions"];
  descrip = "<h3 class=\"tightSpacing\">Description</h3>" + background.Text + "<hr class=\"tightSpacing\">";
  skilltxt = "<h3 class=\"tightSpacing\">Advanced Skills & Spells</h3><ul>";
  for (s in background.Skills) {
    skilltxt = skilltxt + "<li>" + background.Skills[s] + "</li>";
  }

  descrip = descrip + skilltxt + "</ul>";

  if (background.Special != "") {
    descrip = descrip + "<h3 class=\"tightSpacing\">Special</h3><p>" + background.Special + "</p>";
  }

  document.getElementById("descr").innerHTML = descrip;

  poss = background.Possessions;
  provisions = poss.concat(provisions);

  startingItems = "<h2 class=\"tightSpacing\">Stamina: " + stamina + "</h2>" +
    "<h2 class=\"tightSpacing\">Luck: " + luck + "</h2>" +
    "<h2 class=\"tightSpacing\">Skill: " + skill + "</h2><hr class=\"tightSpacing\">";

  startingItems = startingItems + "<h3 class=\"tightSpacing\">Possessions</h3><p>Each item takes up one slot unless otherwise specified.</p><ul>";
  for (p in provisions) {
    startingItems = startingItems + "<li>" + provisions[p] + "</li>"
  }
  startingItems = startingItems + "</ul>";

  document.getElementById("poss").innerHTML = startingItems;
  document.getElementById("charCard").style = "";
  document.getElementById("turnCard").style = "display:none";

}

function showTracker() {
  document.getElementById("turnCard").style = "";
  document.getElementById("charCard").style = "display:none";
}

function newRound() {

  if (document.getElementById("newRoundbtn").innerText == "Start Round") {
    //hide spinners, change buttons, etc
    document.getElementById("newRoundbtn").innerText = "New Round";
    document.getElementById("nextTurnbtn").style = "";
    document.getElementById("spinners").style = "display:none;";
    document.getElementById("turnInfo").style = "margin:20px;";
    allTokens = [];
    turnNumber = 0;
    roundEnd = true;
    turnText = "";
    document.getElementById("turnList").innerHTML = turnText;
    flipCard("New Round");
  } else {
    document.getElementById("newRoundbtn").innerText = "Start Round";
    document.getElementById("nextTurnbtn").style = "display:none;";
    document.getElementById("spinners").style = "text-align:center;";
    document.getElementById("turnInfo").style = "display:none;";
    flipCard("New Round");
  }

  var numPCs = document.getElementById("turnPC").value;
  if (numPCs > 20){
    numPCs = 20;
  }
  var numHenchmen = document.getElementById("turnHench").value;
  var numEnemy = document.getElementById("turnEnemy").value;
  roundEnd = false;

  allTokens = [];

  var showColors = [];

  for (var i = 0; i < numPCs; i++) {
    showColors.push(allColors[i]);
    /*Add twice for each player*/
    allTokens.push(allColors[i]);
    allTokens.push(allColors[i]);
  }

  for (var i = 0; i < numHenchmen; i++) {
    allTokens.push("Henchmen");
  }

  for (var i = 0; i < numEnemy; i++) {
    allTokens.push("Enemy");
  }

  allTokens.push("End Round");

  colorText = "<h3 class=\"tightSpacing\">Assign Each Player a Color:</h3><p>" + showColors.join(", ") + "</p>";

  document.getElementById("tokenList").innerHTML = colorText;
  countTokens();
}

function nextTurn() {
  if (!roundEnd) {
    var grabToken = allTokens.splice(Math.floor(Math.random() * allTokens.length), 1)[0];
    flipCard(grabToken);

    countTokens();

    if (grabToken == "End Round") {
      roundEnd = true;
    }
  }
}

function flipCard(token) {
  var currentToken = token;
  turnText = document.getElementById("turnList").innerHTML;
  var bgImage, cardTxt, bgColor;
  turnNumber = turnNumber + 1;

  if (turnNumber > 10) {
    document.getElementById("turnList").style = "margin: unset;columns:2;"
  } else {
    document.getElementById("turnList").style = "margin: unset;"
  }

  switch (currentToken) {
    case ("Enemy"):
      //flip a full 360
      degrees = degrees + 180;
      bgImage = "url('/images/troika_enemy.png')";
      cardTxt = "Any<br>Enemy";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Enemy" +
        "</p>" + turnText;
      break;

    case ("Henchmen"):
            //flip a full 360
      degrees = degrees + 180;
      bgImage = "url('/images/troika_henchling.png')";
      cardTxt = "Henchling";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Henchling" +
        "</p>" + turnText;
      break;

    case ("New Round"):
            //flip just flip 180
      turnNumber = 0;
      bgImage = "url('/images/troika_end_of_round.png')";
      cardTxt = "New<br>Round";
      bgColor = "white";
      turnText = "<p style=\"margin: unset;\"><strong>0. New Round</strong></p>";
      break;

    case ("End Round"):
      //flip just flip 180
      degrees = degrees + 180;
      bgImage = "url('/images/troika_end_of_round.png')";
      cardTxt = "End of<br>Round";
      bgColor = "white";
      turnText = "<p style=\"margin: unset;\"><strong>" + turnNumber + ". End Round" + "</strong></p>" + turnText;
      break;

    default:
      degrees = degrees + 180;
      bgImage = "url('/images/troika_characters.png')";
      cardTxt = currentToken + "<br>Player";
      bgColor = currentToken;
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". " + currentToken + " Player" + "</p>" + turnText;
  }

  card.style.webkitTransform = "rotateY(" + degrees + "deg)";

  degrees = degrees + 180;
  document.getElementById("turnList").innerHTML = turnText;

  //wait for card to finish spinning before you spin it back
  card.ontransitionend = function(){
    document.getElementById('troikacardback').style.backgroundColor = bgColor;
    document.getElementById('troikacardback').style.backgroundImage = bgImage;
    document.getElementById('troikacardback').style.backgroundSize = "contain";
    document.getElementById("backText").innerHTML = cardTxt;
    card.style.webkitTransform = "rotateY(" + degrees + "deg)";
  }
}

function countTokens() {

  var countPCs = 0;
  var countHenchmen = 0;
  var countEnemies = 0;
  var countEnd = 0;

  for (i in allTokens) {

    switch (allTokens[i]) {
      case ("Enemy"):
        countEnemies++;
        break;
      case ("Henchmen"):
        countHenchmen++;
        break;
      case ("End Round"):
        countEnd++;
        break;
      default:
        countPCs++;
    }
  }

  tokenText = colorText + "<h3 class=\"tightSpacing\">Cards Remaining:</h3><p><ul>";

  if (countPCs > 0) {
    tokenText = tokenText + "<li>" + (countPCs) + " Player cards</li>";
  }
  if (countHenchmen > 0) {
    tokenText = tokenText + "<li>" + (countHenchmen) + " Henchmen cards</li>";
  }
  if (countEnemies > 0) {
    tokenText = tokenText + "<li>" + (countEnemies) + " Enemy cards</li>";
  }
  if (countEnd > 0) {
    tokenText = tokenText + "<li>" + (countEnd) + " End Round cards</li>";
  }
  document.getElementById("tokenList").innerHTML = tokenText + "</ul>";
}

function saveCharacterIMG() {
  imageName = CHARname;
  window.scrollTo(window.pageXOffset, 0);
  var container = document.getElementById("charCard");
  useWidth = container.offsetWidth;
  useHeight = container.offsetHeight;
  html2canvas(container, {
    allowTaint: true,
    width: useWidth,
    height: useHeight,
    scale: 2,
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "troika-" + imageName.replace(/ /g, "-") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.target = '_blank';
    link.click();
  });
}
