---
date: 2020-08-01
layout: full-page
title: Stygian Library Generator
redirect_from:
  - "/stygiangenerator2"
permalink: stygiangenerator
published: true
image: /images/StygianHelpDesk.png
description: >
  A mobile-friendly generator for the Stygian Library.
---

<div class="stygian-card">
  <div class="stygian-text">
    <div id="encounterContent">
    </div>
    <div id="roomContent">
      <h2 id="roomName">Welcome</h2>
      <p>The Stygian Library is an adventure designed for old school roleplaying games written by <a href="https://twitter.com/DyingStylishly">Emmy ‘Cavegirl’ Allen</a>.</p>
      <p>After you've bought a copy of the book, you can use the buttons to generate levels and events.</p>
      <p><a href="https://www.kickstarter.com/projects/soulmuppet/the-stygian-library-remastered">Get it here.</a></p>
      <hr class="stygian-hr">
    </div>
    <div id="detailContent">
    <h2>Finding the Entrance</h2>
    <p>Only a few locations form a proper connection to the Library and thus can be used to access the place. The requirements are:</p>
    <ul>
<li>It must be a collection of books or similar written works. A library, archive, or perhaps a particularly large bookshop.</li>
<li>It must be large enough that you can’t see all of it from the entrance.</li> 
<li>Somebody must have died there (you can kill somebody and an entrance will appear).</li>
<p>Any such space will contain an entrance to the Stygian Library. Any collection of books might contain an entrance if the information inside is interesting or potent enough.</p>
  <p>The entrance to the Library is a simple thing. Somewhere in the library, there will be an unmarked door. It is invariably locked. It is probably hidden, perhaps behind a shelf against the wall, beneath wallpaper, in rooms the public are barred from entering, or under a painting or sign. Find it, unlock it, and on the other side the rows of shelves continue.</p>
    </div>
    <img src="/images/StygianHelpDesk.png" style="max-height: 300px;float:right;margin-right: -20px;margin-bottom: -20px;">
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
        <button id="deeperButton" class="stygian-button" type="button" onclick="goDeeper()">Enter the Library</button>
        <button class="stygian-button" type="button" onclick="newEvent(true)"><span style="color:cornflowerblue;">Visitor</span> Event</button>
        <button class="stygian-button" type="button" onclick="newEvent(false)"><span style="color:crimson;">Intruder</span> Event</button>
    </div>
    <hr class="stygian-hr-dark">
    <div>
      <h3 style="margin-top: -20px;">
        Levels
      </h3>
      <p style="text-align:center;">Click a level to return.</p>
      <div id="logContent">
      </div>
    </div>
  </div>
</div>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
  }
  hy-push-state, hy-drawer {
  overflow: unset;
  }
  h3 {
  margin-top: 0px;
  }
</style>

<script async src="/assets/generator_resources/stygiangenerator.js" language="javascript" type="text/javascript"></script>
