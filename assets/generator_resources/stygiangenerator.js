var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    stygian = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "/assets/generator_resources/stygian.json", true);
xmlhttp.send();

var currentLayer = -1;
var visitor = true;
var hrHTML = "<hr class=\"bookends\">";

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [nextRoomNum, nextDetailNum, logDescr]
var locationLog = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRoom(logRoom) {

  document.getElementById("encounterContent").innerHTML = "";

  //build the room text
  document.getElementById("roomContent").innerHTML = "<h3>Room: " + stygian.locations[logRoom[0]].title + "</h3>" + "<p>" + stygian.locations[logRoom[0]].description + "</p>" + hrHTML;

  //build the detail text
  document.getElementById("detailContent").innerHTML = "<h3>Detail: " + stygian.details[logRoom[1]].title + "</h3>" + "<p>" + stygian.details[logRoom[1]].description + "</p>";

  //scroll to top
  window.scrollTo(0,0);
}

function newEvent(visitor) {
  rand20 = getRandomInt(0,20);
  visitorHTML = ""
  if (visitor) {
    visitorHTML = "<h3><span style=\"color:cornflowerblue;\">Visitor</span> Event</h3>";
  } else {
    visitorHTML = "<h3><span style=\"color:crimson;\">Intruder</span> Event</h3>";
  }
  eventDescription = visitorHTML + "<p>" + stygian.events[rand20].description + "</p>";
  encounters = "";
  nextEncounter = "";

  for (i = 0; i < stygian.events[rand20].encounters; i++) {
    depth20 = rand20 + currentLayer;

    if (depth20 >= 34) {
      depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (visitor) {
      nextEncounter = stygian.visitorEncounters[depth20];
    } else {
      nextEncounter = stygian.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<h3>" + nextEncounter.title + "<small> pg " + nextEncounter.page + "</small></h3><p><i>" + nextEncounter.stats + "</i></p><p> " + nextEncounter.description + "</p>";
  }

  if (visitor) {
      document.getElementById("encounterContent").innerHTML = eventDescription + encounters + hrHTML;
    } else {
      document.getElementById("encounterContent").innerHTML = eventDescription + encounters + hrHTML;
    }
  
    //scroll to top
  window.scrollTo(0,0);
}

function goDeeper() {
  currentLayer = currentLayer + 1;

  nextRoomNum = getRandomInt(currentLayer, currentLayer + 20);
  nextDetailNum = getRandomInt(currentLayer, currentLayer + 20);

  //If above 35, then re-roll
  if (nextRoomNum >= 34)
    nextRoomNum = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  //add this to the log
  locationLog.push([nextRoomNum, nextDetailNum]);

  getRoom([nextRoomNum, nextDetailNum]);

  updateLog();
}

function updateLog() {

  logHTML = "";
  lvlCounter = 0;

  for (const location of locationLog) {
    lvlCounter = lvlCounter + 1;
    logRoom = location[0];
    logDetail = location[1];
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"getRoom([" + logRoom + ", " + logDetail + "])\"><p><span class=\"logLevel\">" + lvlCounter + "</span> " + stygian.locations[logRoom].title + "<br><i>" + stygian.details[logDetail].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML;
}
