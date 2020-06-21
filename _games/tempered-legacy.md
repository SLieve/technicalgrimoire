---
date: 2019-08-01
layout: project
title: Tempered Legacy
caption: Magic Items locked behind Regrets
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

Tempered Legacy is a magic item supplement for fantasy RPGs. The powers of these items are locked behind the regrets of previous owners.

<div class="row centerButtons">
  <div class="col-md-6 col-12">
  	<a class="btn tempered-btn notransition" href="https://gum.co/HnQeI" target="_blank"><h3>Download the Zine (PDF): $5</h3></a>
  </div>
  <div class="col-md-6 col-12">
  	<a class="btn tempered-btn notransition"><h3>Order the Zine (Print): SOON!</h3></a>
  </div>
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

## Want more? Get the Zine!

The Zine includes a tone of example Tempered Weapons with strong themes and histories as well as tools for using these weapons in your adventures.

- Advice on using Regrets to make GMing even easier!
- 20 different templates for making your own Regrets.
- 15 pre-made weapons written by Fiona Geist, John Gregory, Mahar Mangahas, and several more incredible designers.
- Rules for Tempered Armor by Dave Cox
- Tempered Trinkets, Coins, and Pans
- and more!

![temperedBow.png]({{site.url}}/images/posts/temperedBow.png)

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
- Archer: [The Blue Poetry Book](https://www.flickr.com/photos/britishlibrary/11298236855)
- Icons: [Game-Icons.net](https://game-icons.net/)

Everything on this page is protected under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

<script async src="/assets/js/html2canvas.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/_pages/resources/temperedgenerators.js" language="javascript" type="text/javascript"></script>
