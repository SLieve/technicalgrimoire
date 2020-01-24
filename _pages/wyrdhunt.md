---
layout: page
title: Wyrd Hunt Generator
permalink: wyrdhuntgenerator
published: true
image: /images/posts/wyrd_generator.png
description: >
  A mobile-friendly Hunt generator for the Wyrd and Wild.
---
![wyrd_generator.png]({{site.url}}/images/posts/wyrd_generator.png)

<p class="tightSpacing" id="huntText"></p>

<div id="startBtn" class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="startHunt()">
      <h3>Start Hunt</h3>
    </button>
  </div>
</div>

<div id="descriptiontext">
  <p>Into the Wyrd and Wild is a book for those seeking to incorporate a dark, grim forest into their game. You can <a href="/david/2019/07/WyrdWild">read my review here</a>.
  <h3 class="tightSpacing">How To Use This Generator</h3>
  <strong>Prep beforehand:</strong>
  <ol>
  <li>Grab a notebook and a pencil.</li>
  <li>Click "Start Hunt" and write down the details along the top. You'll give these details to the players.</li>
  <li>Draw a diamond somewhere in the middle of the page and write the location number on it.<br>(81. Singer’s Domain)</li>
  <li>Draw the paths moving away from it. The four corners of the diamond are North/South/East/West/etc. Note what each path looks like:<br> (81-SouthWest: a rocky path with blood fungus).</li>
  <li>For each path draw a new diamond and generate a location.</li>
  <li>Keep drawing paths and generating locations until you're happy with how things look.</li></ol>
  <strong>During the game:</strong>
  <ul>
  <li>Reference the location numbers in the book and describe them to your players.</li>
  <li>When they travel, click the "Random Encounter" button for a creature, trap, or plant.</li>
  <li>Use the buttons along the bottom for items, spells, and mutations.</li>
  </ul>
  <br><strong>The woods do not care for you. Never forget that.</strong></p>
  </div>

<div id="mainButtons" class="row centerButtons" style="display:none;">
<div class="col-md-6 col-12">
  <button class="btn wyrd-btn" onclick="nextLocation()">
    <h3 id="locBtn">Next Location</h3>
  </button></div>
<div class="col-md-6 col-12">
  <button class="btn wyrd-btn" onclick="nextEncounter()">
    <h3>Random Encounter</h3>
  </button></div>
</div>

<div id="locationCard" class="container generatorCard tightSpacing" style="margin-bottom: 30px;display:none;">
  Click the buttons above to generate locations or encounters.
</div>

<div id="encounterCard" class="container generatorCard tightSpacing" style="margin-bottom: 30px;display:none;">
  Click the buttons above to generate locations and encounters
</div>

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="searchBody()">
      <h3>Search Body</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="spell()">
      <h3>Spell</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="artifact()">
      <h3>Artifact</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="mutation()">
      <h3>Wild Mutation</h3>
    </button>
  </div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://twitter.com/CharlieFergaves">Charles Avery</a> for making such a terrifying world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script async src="/_pages/wyrdhunt.js" charset="utf-8"></script>

