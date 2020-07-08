---
date: 2020-06-01
layout: project
title: Tempered Legacy
caption: >
  Magic Items locked behind Regrets
  <br>
  (For D&D and OSR Games)
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

Tempered Legacy is a magic item supplement for fantasy RPGs. The powers of these items are locked behind the regrets of previous owners. You can buy the Zine to get started, or just use the Generator below to create unique weapons.

### The Zine
 
The 64 page Zine contains:

- Advice on using Regrets to make GMing even easier!
- Almost 20 pre-made weapons. Here is just a taste of what's inside:
  - [Fiona Geist](https://twitter.com/coilingoracle) created a crystal dao that wipes memories.
  - Madeline Mckee created an oaken cudgel that can heal as effectively as it kills.
  - Sam Morehouse wrote up an intimidating spiked club.
  - [John Gregory](http://unlawfulgames.blogspot.com/) wrote about a lantern shield that protects from fire.
  - [Ash McAllan](https://acegiak.net) unearthed a gravedigger's spade that severs the soul.
  - [Shoe Skogen](https://about.me/shoepixie) unveiled a tiny clockwork rat that can deliver messages.
  - [Mahar Mangahas](https://twitter.com/Maharhar) created a tourmaline sword that grants unicorn blessings.
- Rules for Tempered Armor by [Dave Cox](https://www.davecox.design/).
- Tempered Trinkets, Coins, and Pans.
- Different templates for making your own Regrets.
- and more!

<div class="row centerButtons">
  <div class="col-md-6 col-12">
  	<a class="btn tempered-btn notransition" href="https://gum.co/HnQeI" target="_blank"><h3>Download the Zine (PDF): $5</h3></a>
  </div>
  <div class="col-md-6 col-12">
  	<a class="btn tempered-btn notransition"><h3>Order the Zine (Print): SOON!</h3></a>
  </div>
</div>


|![Tempered-Print1.jpg](/images/Tempered-Print1.jpg)|![Tempered-Print2.jpg](/images/Tempered-Print2.jpg)|![Tempered-Print3.jpg](/images/Tempered-Print3.jpg)|

### The Generator

Click the buttons below to create thousands of unique weapons that use the Tempered Legacy framework. Grab the Zine for advice and hand-crafted weapons.

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generate()">
      <h3 id="wpnBtn">Generate a Weapon</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generate('slot')">
      <h3 id="slotBtn">Generate a Slot</h3>
    </button>
  </div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
  <div style="display:flex;justify-content:space-between;">
    <h1 id="weaponName" style="margin-top:0px;">Silver Rapier</h1>
    <button id="downloadBTN" class="btn tempered-btn-sm data-html2canvas-ignore" onclick="saveWeaponIMG()" style="min-width:160px;margin-bottom:auto;">
      <p>DOWNLOAD</p>
    </button>
  </div>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <p><img id="weaponImg" src="/images/TemperedWeapons/Sword.png" style="background: black; width: 100%;"></p>
  <div id="temperedSlots">
  </div>
  <div id="interacting"></div>
</div>


**Thanks to:**

- [David Cox](https://www.davecox.design/), the co-writer of Tempered Legacy.
- Lauren Schirduan, the love of David's life and his partner in crime.
- [Skerples](https://coinsandscrolls.blogspot.com/) for his [d1000
mutations](https://coinsandscrolls.blogspot.com/2019/11/osr-1d1000-mutations.html).
- [Ben Milton](http://questingblog.com/) for his [level-less Knave spells](https://questingbeast.itch.io/knave).
- [The Nonsense Word Generator](http://soybomb.com/tricks/words/) for some of the weirder words.
- [Freehold games](http://www.cavesofqud.com/) for making the rogue-like David keeps coming back to again and again.
- And to the [OSR community](https://discord.gg/kJjMvC) for being such an encouraging, welcoming place.

**Image Sources:**

- Weapon images are all from the [British Library](https://www.flickr.com/photos/britishlibrary).
- Title image: [Eene halve Eeuw, 1848-1898](https://www.flickr.com/photos/britishlibrary/11292680064)
- Icons: [Game-Icons.net](https://game-icons.net/)

Everything on this page is protected under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

<script async src="/assets/js/html2canvas.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/_pages/resources/temperedgenerators.js" language="javascript" type="text/javascript"></script>
