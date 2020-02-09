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

Tempered Legacy is a magic item supplement for fantasy RPGs. The powers of these items are locked behind the regrets of previous owners. Click the "Generate Weapon" button to get started.

Join [the Mailing List](https://gumroad.com/technicalgrimoire/follow) to get updates about the upcoming **Tempered Legacy Zine**.

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generateWeapon()">
      <h3>Generate a Weapon</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="generateSlot()">
      <h3>Generate a Slot</h3>
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

## Want more?

Tempered Legacy is an ongoing project. We're constantly adding stuff to the generators, tweaking the details, and
updating the rules. Join [the Mailing List](https://gumroad.com/technicalgrimoire/follow) to get updates about the
upcoming **Tempered Legacy Zine**:

- Pre-made weapons written by Fiona Geist, Ash Mchallan, Johnny, Madeline, and more amazing designers.
- The Many Origins of Tempered Metal
- Rules for Tempered Armor
- Tempered Coin Stock Market (TempCoin)
- Advice on using Regrets to improve your prep and engage your players.
- And more!

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

![temperedBow.png]({{site.url}}/images/posts/temperedBow.png)

<script async src="/assets/js/html2canvas.min.js"></script>
<script async src="/_pages/temperedgenerators.js" charset="utf-8"></script>
