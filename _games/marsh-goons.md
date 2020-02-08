---
date: 2019-07-01
layout: project
title: Marsh Goons
caption: A Rules-Light Mud-Crawl Adventure
screenshot:
  src: images/posts/MG-Logo.png
image: images/posts/MG-Logo.png
hide_description: true
permalink: marsh-goons
featured: false
---

A Tabletop RPG mud-crawl adventure. 

Marsh Goons is designed to be a complete package: adventure, rules, items, dungeons, monsters, all packed into a beautiful little zine. Written by [Joe Banner](https://joebanner.co.uk/) using the elegant “Tunnel Goons” rules. Beautiful artwork by Jess Comstock sets the tone somewhere between murky reality and fantastic adventure.

In Marsh Goons your inventory is your life, and the mud keeps taking up space! The rule system perfectly reflects the chaotic and difficult terrain of the marshes; both its dangers and its riches. The game also includes a new system of magic revolving around mud; spells powered by mud, magic items that change when covered in mud, mud mud MUD! 

Join [the Mailing List](https://gumroad.com/technicalgrimoire/follow) to get updates about the upcoming zine!

<div class="row centerButtons">
  <div class="col-md-6 col-9">
    <button id="CharButton" class="btn bonemarshes-btn" href="/files/MG_CharSheet.pdf" target="_blank">
      <h3>Character Sheet</h3>
    </button>  
    </div>
  <div class="col-md-6 col-9">
    <button id="CharButton" class="btn bonemarshes-btn" onclick="generate()">
      <h3>Generate Character</h3>
    </button>  
    </div>
</div>

<div class="container bonemarshesCard" id="charCard">
  <div class="row">
		<div class="col-md-6 col-12"><h2 id="charName">Testing</h2></div>
		<div class="col-md-3 col-6"><h3 id="charHP">23</h3></div>
		<div class="col-md-3 col-6"><h3>Lvl: 1</h3></div>
  </div>
  <hr>
  <div class="row">
		<div class="col-md col-10"><h3 id="charPOW"></h3></div>
		<div class="col-md col-10"><h3 id="charINS"></h3></div>
		<div class="col-md col-10"><h3 id="charKNO"></h3></div>
	</div>
  <hr>
  <h2 id="charEquip">Starting Equipment</h2>
  <p>Choose <strong>three</strong> of the items below to start. Unless otherwise noted, each item takes up one slot.</p>
  <p id="charItems"></p>
  <h3 style="text-align: center;">TAKE A SCREENSHOT SO YOU DON'T LOSE YOUR CHARACTER</h3>
</div>

### Marsh Goons will include:

 - Complete ruleset based on Tunnel Goons (but with more mud!)
 - A hex-crawl map with travel rules
 - Several detailed and engaging locations
 - Mapped lair of the vain druid Knochen by [John Gregory](http://unlawfulgames.blogspot.com/)
 - 20 detailed NPCs and bizarre creatures
 - 50 marshy magic items, spells, and more
 - Hooks and quests to engage your players
 - Include rules for blending content between [Bone Marshes](/bone-marshes) and Marsh Goons!

![MG_cover.png.png](/images/posts/MG_cover.png)

<script async src="/_pages/mg_generator.js" charset="utf-8"></script>