
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    stygian = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "/assets/generator_resources/stygian.json", true);
xmlhttp.send();

var currentLayer = 0;
var visitor = true;
var hrHTML = "<hr class=\"stygian-hr\">";

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [nextRoomNum, nextDetailNum, logDescr]
var locationLog = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function goDeeper(){
currentLayer = currentLayer + 1;

document.getElementById("backButton").style = "";

nextRoomNum = getRandomInt(currentLayer, currentLayer+20);
nextDetailNum = getRandomInt(currentLayer, currentLayer+20);

//If above 35, then re-roll
if (nextRoomNum >= 34)
nextRoomNum = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;

//max for details is 35
if (nextDetailNum > 34)
nextDetailNum = 34;

//add this to the log
locationLog.push([nextRoomNum, nextDetailNum]);

//build the room text
document.getElementById("roomContent").innerHTML = "<h3>" + stygian.locations[nextRoomNum].title + "</h3>" + "<p>" + stygian.locations[nextRoomNum].description + "</p>" + hrHTML;

//build the detail text
document.getElementById("detailContent").innerHTML = "<h3>" + stygian.details[nextDetailNum].title + "</h3>" + "<p>" + stygian.details[nextDetailNum].description + "</p>" + hrHTML;

updateLog();
}

function goBack(){
  currentLayer = currentLayer - 1;

  if (currentLayer <= 0){
    document.getElementById("backButton").style = "display:none;";
    currentLayer = 0;
  } else {
    document.getElementById("backButton").style = "";
  }

  //remove current location
  locationLog.pop();

  //Grab the previous one
  backLocation = locationLog[locationLog.length - 1];
  backRoom = backLocation[0];
  backDetail = backLocation[1];

//build the room text
document.getElementById("roomContent").innerHTML = "<h3>" + stygian.locations[backRoom].title + "</h3>" + "<p>" + stygian.locations[backRoom].description + "</p>" + hrHTML;

//build the detail text
document.getElementById("detailContent").innerHTML = "<h3>" + stygian.details[backDetail].title + "</h3>" + "<p>" + stygian.details[backDetail].description + "</p>" + hrHTML;

updateLog();

}

function updateLog(){
  console.log(currentLayer);

  logHTML = "";
  lvlCounter = 0;

  for (const location of locationLog) {
    lvlCounter = lvlCounter + 1;
    logRoom = location[0];
    logDetail = location[1];
    logHTML = logHTML + "<p><strong>Level " + lvlCounter + "</strong>: " + stygian.locations[logRoom].title + "<br><i>" + stygian.details[logDetail].title + "</i></p>";
  }

  document.getElementById("logContent").innerHTML = logHTML;
}