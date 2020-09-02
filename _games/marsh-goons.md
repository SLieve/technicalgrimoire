---
date: 2020-05-01
layout: project
title: Marsh Goons
caption: >
  A Rules-Light Mud-Crawl Adventure
  <br>
  (Complete RPG Zine)
screenshot:
  src: images/MG_cover.jpg
image: images/MG_cover.jpg
hide_description: true
permalink: marsh-goons
featured: false
---

Marsh Goons is the complete package: adventure, rules, items, dungeons, monsters, all packed into 36 pages. Written by [Joe Banner](https://joebanner.co.uk/) using the elegant “Tunnel Goons” rules. Beautiful artwork by [Jess Comstock](https://www.jessidraws.art/) and [Laura Ketcham](https://twitter.com/ketchaml) sets the tone somewhere between murky reality and fantastic adventure.

In Marsh Goons your inventory is your life, and the mud keeps weighing you down! The rule system perfectly reflects the chaotic and difficult terrain of the marshes; both its dangers and its riches. The game also includes a new system of magic revolving around mud; spells powered by mud, magic items that change when covered in mud, mud mud MUD!

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <a class="btn bonemarshes-btn snipcart-add-item" 
      data-item-id="marsh-goons-pdf" 
      data-item-price="5.00"
      data-item-url="/marsh-goons"
      data-item-description="Includes the PDF. Marsh Goons is the complete package: adventure, rules, items, dungeons, monsters, all packed into 36 pages."
      data-item-image="/images/MG_cover.jpg" 
      data-item-name="Marsh Goons (PDF)"
      data-item-file-guid="b6bfc4aa-9af8-4382-bc1a-0e7e82b4d43b">
      <h3>Download the PDF: $5</h3>
    </a>
  </div>
  <div class="col-md-6 col-12">
       <a class="btn bonemarshes-btn snipcart-add-item" 
      data-item-id="marsh-goons-print" 
      data-item-price="5.00"
      data-item-url="/marsh-goons"
      data-item-description="Includes a printed zine and the PDF. Marsh Goons is the complete package: adventure, rules, items, dungeons, monsters, all packed into 36 pages."
      data-item-image="/images/MG_cover.jpg" 
      data-item-name="Marsh Goons (Print + PDF)"
      data-item-file-guid="b6bfc4aa-9af8-4382-bc1a-0e7e82b4d43b"
      data-item-weight="61"
      data-item-length="23"
      data-item-width="16"
      data-item-height="3"
      data-item-shippable="true">
      <h3>Order the Zine (Print+PDF): $10</h3>
    </a>
  </div>
</div>

<table>
  <tbody>
    <tr>
      <td><a href="/images/MG_cover.jpg" target="_blank"><img src="/images/MG_cover.jpg" alt="MG_cover.jpg"></a></td>
      <td><a href="/images/MG_index.jpg" target="_blank"><img src="/images/MG_index.jpg" alt="MG_index.jpg"></a></td>
      <td><a href="/images/MG_mucker.jpg" target="_blank"><img src="/images/MG_mucker.jpg" alt="MG_mucker.jpg"></a></td>
    </tr>
  </tbody>
</table>

<div class="row centerButtons">
  <div class="col-md-6 col-9">
    <button id="CharButton" class="btn bonemarshes-btn" onclick="mg_generate()">
      <h3>Generate a Character</h3>
    </button>  
    </div>
      <div class="col-md-6 col-6">
    <a class="btn bonemarshes-btn" href="/files/MG_CharSheet.pdf" target="_blank">
      <h3>Character Sheet</h3>
    </a>
  </div>
</div>

<div class="container bonemarshesCard" id="charCard">
  <div style="display:flex;justify-content:space-between;">
    <h2 id="charName" style="margin-top:0px;">Johnny</h2>
    <button id="downloadBTN" class="btn bonemarshes-btn-sm data-html2canvas-ignore" onclick="mg_saveCharacterIMG()" style="width:160px;margin-bottom:auto;">
      <p style="margin-bottom: 0;">DOWNLOAD</p>
    </button>
  </div>
  <div class="row">
		<div class="col-md col-10"><h3 id="charHP" style="text-align:center;">23</h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="charPOW"></h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="charINS"></h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="charKNO"></h3></div>
	</div>
  <hr>
  <p class="h2" style="margin-top: 10px;" id="charEquip">Starting Equipment</p>
  <p>Choose <strong>three</strong> of the items below to start. Unless otherwise noted, each item takes up one slot.</p>
  <p id="charItems"></p>
</div>

<script async src="/assets/generator_resources/mg_generator.js" charset="utf-8"></script>
