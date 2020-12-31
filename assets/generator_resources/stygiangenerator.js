//get the json file and parse it
fetch('/assets/generator_resources/stygian.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        stygian = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var sty_hrHTML = "<hr class=\"stygian-hr\">";

var sty_data = {
  //A list of lists of number sets tracking the previous rooms and details. 
  //One list per layer.
  //Used when backtracking: [level, nextRoomNum, nextDetailNum]
  locationLog: [],
  currentLayer: -1,
};

document.getElementById("fileElem")
  .addEventListener('change', loadLibrary, false);

function sty_getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function sty_getRoom(layer, index) {
  document.getElementById("encounterContent").innerHTML = "";

  sty_data.currentLayer = layer;
  var location = sty_data.locationLog[layer][index];
  console.log(location);

  //build the level text
  document.getElementById("levelContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Level " + layer + ": " + stygian.locations[location[0]].title + "</h2><p>" + stygian.locations[location[0]].description + "</p>" + sty_hrHTML + "<h2 style=\"margin-top: 10px;\" >Detail: " + stygian.details[location[1]].title + "</h2><p>" + stygian.details[location[1]].description + "</p>";

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
    depth20 = sty_getRandomInt(0,20) + sty_data.currentLayer;

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
  sty_data.currentLayer = sty_data.currentLayer + 1;

  nextRoomNum = sty_getRandomInt(sty_data.currentLayer, sty_data.currentLayer + 20);
  nextDetailNum = sty_getRandomInt(sty_data.currentLayer, sty_data.currentLayer + 20);

  //If above 35, then re-roll
  if (nextRoomNum >= 34)
    nextRoomNum = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  //add this to the log
  if (sty_data.locationLog.length <= sty_data.currentLayer) {
    sty_data.locationLog.push([]);
  }
  sty_data.locationLog[sty_data.currentLayer].push([nextRoomNum, nextDetailNum]);

  sty_getRoom(sty_data.currentLayer, sty_data.locationLog[sty_data.currentLayer].length - 1);

  sty_updateLog();
}

function sty_updateLog() {
  logHTML = "";

  for (var layer = 0; layer < sty_data.locationLog.length; ++layer) {
    for (var index = 0; index < sty_data.locationLog[layer].length; ++index) {
      var location = sty_data.locationLog[layer][index];
      logHTML += "<div class=\"logItem\"><a onclick=\"sty_getRoom("+layer+","+index+")\"><p><span class=\"logLevel\">" + layer + "</span> " + stygian.locations[location[0]].title + "<br><i>" + stygian.details[location[1]].title + "</i></p></a></div>";
    }
  }

  document.getElementById("deeperButton").innerHTML = "Go Deeper";
  var printLibraryButtonHtml = "<div class=\"logItem\"><a onclick=\"printLibrary()\"><p><span class=\"logLevel\" style=\"color:lightgreen;\">S</span> Save this Libary<br><i>as PDF</i></p></a></div>";
  var saveLibraryButtonHtml = "<div class=\"logItem\"><a onclick=\"saveLibrary()\"><p><span class=\"logLevel\" style=\"color:lightgreen;\">S</span> Save this Libary<br><i>as a data file</i></p></a></div>";
  document.getElementById("logContent").innerHTML = logHTML + printLibraryButtonHtml + saveLibraryButtonHtml;
}

function saveLibrary() {
    var d = document.createElement("a");
    var file = new Blob([JSON.stringify(sty_data)], {type: "text/plain"});
    d.href = URL.createObjectURL(file);
    d.download = "stygianlibrary";
    d.click();
}

function sty_runLoadLibrary() {
  var fileElem = document.getElementById("fileElem");
  fileElem.click();
}

function loadLibrary(e) {
  console.log("Loading file");
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    sty_data = JSON.parse(e.target.result);
    sty_updateLog();
  };
  reader.readAsText(file);
}

function printLibrary() {
//There are so many things about this function that I CAN'T control. font size, font type, etc etc. But I CAN set the size of the div and the size of the paper. So this is as close as I've got....definitely room for improvement.

  //Go through and expand all the rooms
  printHTML = "";
  document.getElementById("encounterContent").innerHTML = "";
  document.getElementById("stygian-img").style = "display:none;";

  for (var layer = 0; layer < sty_data.locationLog.length; ++layer) {
    for (const location of sty_data.locationLog[layer]) {
      //build the level text
      printHTML = printHTML + "<h2 style=\"margin-top: 10px;\" >Level " + layer + ": " + stygian.locations[location[0]].title + "</h2>" + "<p>" + stygian.locations[location[0]].description + "</p><h2 style=\"margin-top: 10px;\" >Detail: " + stygian.details[location[1]].title + "</h2>" + "<p>" + stygian.details[location[1]].description + "</p>" + sty_hrHTML;
    }
  }

  document.getElementById("levelContent").innerHTML = printHTML;

  var jsPDF = window.jspdf.jsPDF;
  var container = document.getElementById("stygian-complete");

  //force the width so it will print at the right size
  container.style.maxWidth = "720px";
  container.style.minWidth = "720px";
  container.style.Width = "720px";

  var doc = new jsPDF({
    unit: "px",
    format: [720, 975],
    putOnlyUsedFonts: true
  });

  doc.html(document.getElementById("stygian-complete"), {
    callback: function (doc) {
      doc.save("stygian-generated.pdf");
      //set back to latest location
      latestRoom = sty_data.locationLog[sty_data.locationLog.length - 1];
      sty_getRoom(latestRoom);
      document.getElementById("stygian-img").style = "max-height: 300px;float:right;margin-right: -20px;margin-bottom: -20px;";
      container.style.maxWidth = null;
      container.style.minWidth = null;
      container.style.width = null;    
    }
  });

}
