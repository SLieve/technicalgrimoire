---
date: 2019-08-01
layout: project
title: Tempered Legacy
caption: A Rogue-Like Framework for Fantasy RPGs.
image: images/temperedlegacy.png
screenshot:
  src: images/temperedlegacy.png
hide_description: true
permalink: tempered-legacy
featured: false
published: true
redirect_from:
  - "/temperedgenerators"
---

Tempered Legacy is a magic item supplement for fantasy RPGs. The powers of an item are locked behind the regrets of previous owners. 

This gives players a fun weapon they can invest in while providing GMs with an easy vehicle for adventure hooks and character motivation.

Join [the Mailing List](https://gumroad.com/technicalgrimoire/follow) to get updates about the upcoming **Tempered Legacy Zine** (more info below).

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generateWeapon()">
      <h3>Generate Weapon</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generateSlot()">
      <h3>Generate Slot</h3>
    </button>
  </div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
<div style="display:flex;justify-content:space-between;">
  <h1 id="weaponName" style="margin-top:0px;">Silver Rapier</h1>
  <!--<button class="btn tempered-btn-sm" onclick="hideWindow()" style="min-width:160px;margin-bottom:auto;"><p>CLOSE WINDOW</p></button>-->
</div>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <p id="weaponRumor">A simple but well-crafted blade</p>
  <p><img id="weaponImg" src="/images/TemperedWeapons/Sword.png" style="background: black; width: 100%;"></p>
  <h2 class="tightSpacing" id="slotNumber">3 Slots:</h2>
  <div id="temperedSlots">
  </div>
  <h3 style="text-align: center;" id="screenshot">TAKE A SCREENSHOT SO YOU DON'T LOSE YOUR WEAPON</h3>
</div>

<div class="container generatorCard" id="dataCard" style="display:none;">
<div>
  <button class="btn tempered-btn-sm" onclick="hideWindow()" style="float: right;"><p>CLOSE WINDOW</p></button>
</div>
<div class="row" id="dataRow" style="width: 100%;">
</div>
</div>


## Slots

Most Slots are locked behind the regrets of previous owners. Once you fulfill these regrets you'll gain access to their powers.

<table style="width: 100%;">
    <tr>
      <th><strong>A Spell</strong></th>
      <th><strong>Specific Knowledge</strong></th>
    </tr>
    <tr>
      <td>These spells can only be cast while holding the Item. Tweak them to fit whatever magic system your game uses. *L = caster level. Spells last Lx10 minutes, range of 40ft (unless noted otherwise). "Items" can be held in one hand, "objects" are anything up to human size.*</td>
      <td>The memories, skills, and training of a past owner. Knowledge is accessible while holding the Item. When the Item is released, the knowledge fades away over the next hour.</td>
    </tr>
    <tr>
      <th><strong>An Enchantment</strong></th>
      <th><strong>A Mutation</strong></th>
    </tr>
    <tr>
      <td>Applied by a past owner, Enchantments alter the properties of the Item. New enchantments can be added depending on the rules of your game, but must replace an existing Enchantment Slot.</td>
      <td>The dense mixture of magic and history in a Item can result in bizarre infections that alter the owner permanently. They can only be cured by fulfilling their associated regret.</td>
    </tr>
</table>

![temperedBow.png]({{site.url}}/images/posts/temperedBow.png)

## Interacting With Slots

There are 3 ways to interact with the slots in your Item:

**A) Unlock a Slot**. When you complete the goal of a previous owner, you unlock their Slot.  This reveals a new Slot on the item. Use the "Generate Slot" button and add it to your item.

**B) Character Death**. When a character dies they can choose to have some aspect of themselves stored in the item. Erase all the slots in the item, except for the first one. Create a new slot based on the character that just died, along with a Lock for that slot and add it to the item.

**C) Help Another Wielder Unlock a Slot.** After you help an ally unlock one of their Slots, you may use the "Slot Generator" to replace any Slot in your own Item with one from the generator.

![temperedSolar.png]({{site.url}}/images/posts/temperedSolar.png)

## Want more?

Tempered Legacy is an ongoing project. We're constantly adding stuff to the generators, tweaking the details, and updating the rules. Join [the Mailing List](https://gumroad.com/technicalgrimoire/follow) to get updates about the upcoming **Tempered Legacy Zine**:

 - Pre-made weapons written by Fiona Geist, Ash Mchallan, Johnny, Madeline, and more amazing designers.
 - The Many Origins of Tempered Metal
 - Rules for Tempered Armor
 - Tempered Coin Stock Market (TempCoin)
 - Advice on using Regrets to improve your prep and engage your players.
 - And more!

**Thanks to:**

 - [David Cox](https://www.davecox.design/), the co-writer of Tempered Legacy.
 - Lauren Schirduan, the love of David's life and his partner in crime. 
 - [Skerples](https://coinsandscrolls.blogspot.com/) for his [d1000 mutations](https://coinsandscrolls.blogspot.com/2019/11/osr-1d1000-mutations.html).
 - [Ben Milton](http://questingblog.com/) for his [level-less Knave spells](https://questingbeast.itch.io/knave).
 - [The Nonsense Word Generator](http://soybomb.com/tricks/words/) for some of the weirder words.
 - [Freehold games](http://www.cavesofqud.com/) for making the rogue-like David keeps coming back to again and again.
 - And to the [OSR community](https://discord.gg/kJjMvC) for being such an encouraging, welcoming place.

**Image Sources:**

 - Weapon images are all from the [British Library](https://www.flickr.com/photos/britishlibrary).
 - Title image: [Eene halve Eeuw, 1848-1898](https://www.flickr.com/photos/britishlibrary/11292680064)
 - Archer: [The Blue Poetry Book](https://www.flickr.com/photos/britishlibrary/11298236855)
 - Bard's Weapons: [Martial Deeds of Pennsylvania](https://www.flickr.com/photos/britishlibrary/11068186856)

Everything on this page is protected under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

![temperedlegacy.png]({{site.url}}/images/temperedlegacy.png)

<script async src="/_pages/temperedgenerators.js" charset="utf-8"></script>