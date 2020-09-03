
//get the json file and parse it
fetch('/assets/generator_resources/tempered.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        tempered = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var tl_Wielder = "Lemuria";
var tl_WeaponName = "Excaliber";
var tl_WeaponType = "Dagger";
var tempered = {};

function quiz_generate(text) {
  grammar = tracery.createGrammar(tempered);
  grammar.addModifiers(baseEngModifiers);


  quiz_generateWeapon();

}

function quiz_generateWeapon() {

  tl_WeaponName = grammar.flatten("#nameTemplate#");
  document.getElementById("weaponName").innerHTML = tl_WeaponName;

  document.getElementById("temperedSlots").innerHTML = tl_createSlot(3);

  tl_WeaponType = grammar.flatten("#weapon#"); //generate weapon type
  //A dagger #description#
  descrip = AvsAnSimple.query(tl_WeaponType) + " " + tl_WeaponType + " " + grammar.flatten("#description#");
  document.getElementById("weaponDesc").innerHTML = descrip.charAt(0).toUpperCase() + descrip.substring(1);

  document.getElementById("weaponImg").src = "/images/TemperedWeapons/" +
    tl_WeaponType.replace(/ /g, "_") + ".png";
  tl_setWeaponColors();

  document.getElementById("interacting").innerHTML =
    '<p class="h3 tightSpacing">Interacting With Slots</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-unlocked.png"><strong>Unlock A Slot</strong>.</p><p>When you fulfill the regret of a previous owner, you unlock that Slot and gain access to the Spell/Knowledge/Enchantment.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-shaking-hands.png"><strong>Help An Ally</strong>.</p><p>After you help an ally unlock one of their Slots, you may use the "Slot Generator" to replace any Slot in your own weapon with one from the generator.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-skull-crossed-bones.png"><strong>Character Death</strong>.</p><p>When a character dies they can choose to have some aspect of themselves stored in the item. Create a new slot based on the character that just died, lock it behind a Regret, and add it to the weapon.</p>';
  document.getElementById("weaponCard").style = ""; //reveal the card
}

//change the colors, and sometimes flip the weapon sideways
function tl_setWeaponColors() {
  random = Math.random();
  if (random >= .5) {
    flipped = 1;
  } else {
    flipped = -1;
  }

  var bgstyle = "background: linear-gradient(to right";
  for (i = 0; i < 8; i++) {
    bgstyle = bgstyle + ", #" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }

  document.getElementById("weaponImg").style = bgstyle + ");transform: scaleX(" + flipped + ");";
}

function tl_saveWeaponIMG() {
  imageName = tl_WeaponName;
  if (tl_WeaponName == "this weapon") {
    imageName = Wielder + "'s Slot";
  }
  window.scrollTo(window.pageXOffset, 0);
  document.getElementById("downloadBTN").style = "display:none;";
  var container = document.getElementById("weaponCard");
  useWidth = container.offsetWidth;
  useHeight = container.offsetHeight;
  //console.log(useWidth + " " + useHeight);
  html2canvas(container, {
    allowTaint: true,
    width: useWidth,
    height: useHeight,
    scale: 2,
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "tempered-legacy-" + imageName.replace(/ /g, "-") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.target = '_blank';
    link.click();
  });
  document.getElementById("downloadBTN").style = "min-width:160px;margin-bottom:auto;";
}