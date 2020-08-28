var sty_xmlhttp = new XMLHttpRequest();
sty_xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    stygian = JSON.parse(this.responseText);
  }
};

sty_xmlhttp.open("GET", "/assets/generator_resources/stygian.json", true);
sty_xmlhttp.send();

var sty_currentLayer = -1;
var sty_hrHTML = "<hr class=\"stygian-hr\">";

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [nextRoomNum, nextDetailNum, logDescr]
var sty_locationLog = [];

function sty_getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function sty_getRoom(logRoom) {

  document.getElementById("encounterContent").innerHTML = "";

  //build the room text
  document.getElementById("roomContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >" + stygian.locations[logRoom[0]].title + "</h2>" + "<p>" + stygian.locations[logRoom[0]].description + "</p>" + sty_hrHTML;

  //build the detail text
  document.getElementById("detailContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Detail: " + stygian.details[logRoom[1]].title + "</h2>" + "<p>" + stygian.details[logRoom[1]].description + "</p>";

  //scroll to top
  window.scrollTo(0,0);
}

function sty_newEvent(sty_visitor) {
  rand20 = sty_getRandomInt(0,20);
  visitorHTML = ""
  if (sty_visitor) {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:cornflowerblue;\">Visitor</span> Event</h2>";
  } else {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:crimson;\">Intruder</span> Event</h2>";
  }
  console.log(rand20);
  eventDescription = visitorHTML + "<p>" + stygian.events[rand20].description + "</p>";
  encounters = "";
  nextEncounter = "";

  for (i = 0; i < stygian.events[rand20].encounters; i++) {
    depth20 = sty_getRandomInt(0,20) + sty_currentLayer;

    if (depth20 >= 34) {
      depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (sty_visitor) {
      nextEncounter = stygian.visitorEncounters[depth20];
    } else {
      nextEncounter = stygian.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<h3>" + nextEncounter.title + "</h3><p> " + nextEncounter.description + "</p>";
  }

  document.getElementById("encounterContent").innerHTML = eventDescription + encounters + sty_hrHTML;
  
  //scroll to top
  window.scrollTo(0,0);
}

function sty_goDeeper() {
  document.getElementById("deeperButton").innerHTML = "Go Deeper";

  sty_currentLayer = sty_currentLayer + 1;

  nextRoomNum = sty_getRandomInt(sty_currentLayer, sty_currentLayer + 20);
  nextDetailNum = sty_getRandomInt(sty_currentLayer, sty_currentLayer + 20);

  //If above 35, then re-roll
  if (nextRoomNum >= 34)
    nextRoomNum = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  //add this to the log
  sty_locationLog.push([nextRoomNum, nextDetailNum]);

  sty_getRoom([nextRoomNum, nextDetailNum]);

  sty_updateLog();
}

function sty_updateLog() {

  logHTML = "";
  lvlCounter = 0;

  for (const location of sty_locationLog) {
    lvlCounter = lvlCounter + 1;
    logRoom = location[0];
    logDetail = location[1];
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"sty_getRoom([" + logRoom + ", " + logDetail + "])\"><p><span class=\"logLevel\">" + lvlCounter + "</span> " + stygian.locations[logRoom].title + "<br><i>" + stygian.details[logDetail].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML;
}
