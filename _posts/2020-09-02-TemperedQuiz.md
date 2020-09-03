---
date: 2020-06-01
layout: project
title: What Weapon Are You?
caption: >
  A Tempered Personality Quiz (total nonsense)
image: images/temperedlegacyQUIZ.png
screenshot:
  src: images/posts/temperedlegacyQUIZ.png
published: false
---

Your mind is a weapon, and your body a sheathe.

But what of your soul? What form would your soul take?

### Answer Truthfully

If you can't be honest with your inner weapon, then you'll never know the truth.

<form action="" method="">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn tempered-btn notransition" onclick="quiz_generate()">
      <h3 id="wpnBtn">Discover your Inner Weapon</h3>
    </button>
  </div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
  <div style="display:flex;justify-content:space-between;">
    <h2 id="weaponName" style="margin-top:0px;">Silver Rapier</h2>
    <button id="downloadBTN" class="btn tempered-btn-sm data-html2canvas-ignore" onclick="tl_saveWeaponIMG()" style="min-width:160px;margin-bottom:auto;">
      <p>DOWNLOAD</p>
    </button>
  </div>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <p><img id="weaponImg" src="/images/TemperedWeapons/Sword.png" style="background: black; width: 100%;"></p>
</div>

*this test is utter crap and is meaningless. But if you like the weapon you can find more like it in [Tempered Legacy](/tempered-legacy).*

<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/temperedquizgenerators.js" language="javascript" type="text/javascript"></script>
