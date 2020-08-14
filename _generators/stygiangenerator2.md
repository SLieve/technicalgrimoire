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

## IT'S NOT DONE, OH GOD! DON'T LOOK!

<div class="stygian-card">
  <div class="stygian-text">
    <div id="encounterContent">
    </div>
    <div id="roomContent">
      <h3 id="roomName">Welcome</h3>
      <p>Books are condensed collections of knowledge, and knowledge is power. As any physicist will tell you, power is a function of energy, and energy and mass are interchangeable, and enough mass warps space time.</p>
      <p>Knowledge is power. Power corrupts. The more power, the more it corrupts. Sufficient knowledge twists the world around it into strange shapes. Put enough books in one place, and they distort the world. Space bends in on itself, forming a sort of wormhole, linking the library to other libraries likewise afflicted. The space between is a sort of pocket realm, budded off from reality, maintained by the sheer power of books.</p>
      <p>After you've bought a copy of the book, you can use the buttons to generate levels and events. <a href="https://www.kickstarter.com/projects/soulmuppet/the-stygian-library-remastered">Get it here.</a></p>
    </div>
    <div id="detailContent">
    </div>
    <img src="/images/StygianHelpDesk.png">
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
        <button class="stygian-button" type="button" onclick="goDeeper()">Go Deeper</button>
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
