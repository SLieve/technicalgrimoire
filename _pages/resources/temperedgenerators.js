/*
Tracery LowDown: https: //github.com/galaxykate/tracery/tree/tracery2
grammar.flatten("#creature#") = horse
grammar.flatten("#creature.capitalize#") = Horse
grammar.flatten("#creature.a#") = a horse
grammar.flatten("#creature.a.capitalize#") = A horse
grammar.flatten("#creature.capitalize.a#") = a Horse
grammar.flatten("#creature.a.capitalizeAll#") = A Horse
grammar.flatten("#random-100-200.calc#") = 137
*/

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    tempered = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "/_pages/resources/tempered.json", true);
xmlhttp.send();

var Wielder = "Lemuria";
var WeaponName = "Excaliber";
var WeaponType = "Dagger";
var tempered = {};

function generate(text) {
  grammar = tracery.createGrammar(tempered);
  grammar.addModifiers(baseEngModifiers);

  switch (text) {
    case ("slot"):
      generateSlot();
      break;
    default:
      generateWeapon();
  }
}

function generateSlot() {
  document.getElementById("wpnBtn").innerHTML = "Generate a Weapon";
  document.getElementById("slotBtn").innerHTML = "Generate another Slot";

  document.getElementById("weaponName").innerHTML = "New Slot:";
  document.getElementById("interacting").innerHTML = "";
  document.getElementById("weaponDesc").innerHTML = "Use this Slot for Trinkets or to replace an existing Slot in your weapon after you helped an ally, or to add on to your weapon.";
  document.getElementById("weaponImg").style = "display:none;";
  document.getElementById("temperedSlots").innerHTML = createSlot(1);

  document.getElementById("weaponCard").style = ""; //reveal the card
}

function generateWeapon() {
  document.getElementById("wpnBtn").innerHTML = "Generate another Weapon";
  document.getElementById("slotBtn").innerHTML = "Generate a Slot";

  WeaponName = grammar.flatten("#nameTemplate#");
  document.getElementById("weaponName").innerHTML = WeaponName;

  document.getElementById("temperedSlots").innerHTML = createSlot(3);

  WeaponType = grammar.flatten("#weapon#"); //generate weapon type
  //A dagger #description#
  descrip = AvsAnSimple.query(WeaponType) + " " + WeaponType + " " + grammar.flatten("#description#");
  document.getElementById("weaponDesc").innerHTML = descrip.charAt(0).toUpperCase() + descrip.substring(1);

  document.getElementById("weaponImg").src = "/images/TemperedWeapons/" +
    WeaponType.replace(/ /g, "_") + ".png";
  setWeaponColors();

  document.getElementById("interacting").innerHTML =
    '<p class="h3 tightSpacing">Interacting With Slots</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-unlocked.png"><strong>Unlock A Slot</strong>.</p><p>When you fulfill the regret of a previous owner, you unlock that Slot and gain access to the Slot.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-shaking-hands.png"><strong>Help An Ally</strong>.</p><p>After you help an ally unlock one of their Slots, you may use the "Slot Generator" to replace any Slot in your own weapon with one from the generator.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-skull-crossed-bones.png"><strong>Character Death</strong>.</p><p>When a character dies they can choose to have some aspect of themselves stored in the item. Create a new slot based on the character that just died, lock it behind a Regret and add it to the weapon.</p>';
  document.getElementById("weaponCard").style = ""; //reveal the card
}

/*returns a div row of Slots
THE LOGIC
0. Equal chance of every Slot being a Spell, Knowledge, Weapon Property, or Mutation.
1. If there is only one Slot, then it's an ancient Nonsense item.
2. Otherwise the first Slot is always unlocked.
3. Spells and Knowledge can be Real Names(2/3) or Nonsense(1/3)
4. Mutations and Weapon Properties are un-named. But their goals are Nonsense.
*/

function createSlot(numSlots) {
  slotHTML = "";
  powername = "";
  powerdescr = "";
  phrase = "";
  random = 1;
  icon = "";

  //for the number of Slots
  for (i = 0; i < numSlots; i++) {
    random = Math.round(Math.random() * 100);
    Wielder = grammar.flatten("#name.capitalize#");
    mutation = false;

    switch (true) {
      //Give a mutation ONLY if it's not the first slot of a weapon.
      case ((numSlots > 1 && random < 15 && i != 0) || (numSlots == 1 && random < 15)):
        icon = "icon-mutation.png";
        powername = "<strong>Mutation</strong>";
        powerdescr = grammar.flatten("#mutation#");
        phrase = "The dense mixture of magic and history in this weapon can result in bizarre infections that alter the wielder permanently. They can only be cured by fulfilling their associated regret.";
        mutation = true;
        break;
      case (random < 40):
        icon = "icon-spell.png";
        powername = "<strong>" + Wielder + "'s Spell</strong>";
        powerdescr = grammar.flatten("#spell#");
        phrase = "Spells can only be cast while holding this weapon. L = caster level. Spells last Lx10 minutes, range of 40ft (unless noted otherwise). \"Items\" can be held in one hand, \"objects\" are anything up to human size.";
        break;
      case (random < 65):
        icon = "icon-knowledge.png";
        powername = "<strong>" + Wielder + "'s Knowledge</strong>";
        powerdescr = grammar.flatten("#knowledge#");
        phrase = "The memories, skills, and training of a previous owner. Knowledge is only accessible while holding this weapon. After this weapon is put away, the knowledge fades away over the next hour.";
        break;
      default:
        icon = "icon-enchantment.png";
        powername = "<strong>" + Wielder + "'s Enchantment</strong>";
        powerdescr = grammar.flatten("#enchantment#");
        phrase = "Enchantments alter the properties of this weapon. They are passive bonuses and are always in effect.";
    }

    slotHTML = slotHTML + "<div class=\"row temperedRows\"><div class=\"col-lg-6 col-12 cellGoals\">";

    //SET REGRETS.
    //Mutations, the mutation comes first, cure later
    if (mutation) {
      slotHTML = slotHTML + "<p style=\"text-align: center;display: flow-root;\"><img style=\"float:left;\"class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-mutation.png\">" + powername + "<img style=\"float:right;transform: scaleX(-1);\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-mutation.png\"></p><p>This Mutation infects you <strong>immediately</strong>: " + powerdescr + "</p></div>";
      //If you're just generating 1 slot, it's locked behind a goal.
    } else if (numSlots == 1) {
      slotHTML = slotHTML + "<p style=\"text-align: center;display: flow-root;\"><img style=\"float:left;\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-locked.png\"><strong>" + Wielder + "'s Regret</strong><img style=\"float:right;transform: scaleX(-1);\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-locked.png\"></p><p>" + grammar.flatten("#goalTemplate#").replace(/WIELDER/g, Wielder) + " Then you will unlock " + powername + ".</p></div>";
      //otherwise the first slot is an introduction
    } else if (i == 0) {
      slotHTML = slotHTML + "<p>As soon as you take hold of \"" + WeaponName + "\" you gain awareness of all three slots below. <strong>" + powername + "</strong> is already unlocked.</p></div>";
    } else {
      slotHTML = slotHTML + "<p style=\"text-align: center;display: flow-root;\"><img style=\"float:left;\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-locked.png\"><strong>" + Wielder + "'s Regret</strong><img style=\"float:right;transform: scaleX(-1);\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-locked.png\"></p>" + grammar.flatten("#goalTemplate#").replace(/WIELDER/g, Wielder) + " Then you will unlock " + powername + ".</p></div>";
    }

    //SET DETAILS
    //Mutations, the mutation comes first, cure later
    if (mutation){
      slotHTML = slotHTML + "<div class=\"col-lg-6 col-12 cellLegacies\"><p style=\"text-align: center;display: flow-root;\"><img style=\"float:left;\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-cure.png\"><strong>" + Wielder + "'s Cure</strong><img style=\"float:right;transform: scaleX(-1);\" class=\"temperedicon\" src=\"/images/TemperedWeapons/icon-cure.png\"></p>" + grammar.flatten("#goalTemplate#").replace(/WIELDER/g, Wielder) + " Then you will cure this Mutation.</p></div></div><p class=\"temperedP\">" + phrase + "</p>";
    } else {
    slotHTML = slotHTML + "<div class=\"col-lg-6 col-12 cellLegacies\"><p style=\"text-align: center;display: flow-root;\"><img style=\"float:left;\"class=\"temperedicon\" src=\"/images/TemperedWeapons/" + icon + "\">" + powername + "<img style=\"float:right;transform: scaleX(-1);\" class=\"temperedicon\" src=\"/images/TemperedWeapons/" + icon + "\"></p><p>" + powerdescr + "</p></div></div><p class=\"temperedP\">" + phrase + "</p>";
    }
  }

  return slotHTML;
}

//change the colors, and sometimes flip the weapon sideways
function setWeaponColors() {
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

function saveWeaponIMG() {
  imageName = WeaponName;
  if (WeaponName == "this weapon") {
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

window.onload = function () {
  vars = getUrlVars();
  if (getUrlVars()["pre"]) {
    generateWeapon();
  }
};

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}