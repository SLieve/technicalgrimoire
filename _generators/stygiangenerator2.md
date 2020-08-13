---
date: 2019-08-01
layout: full-page
title: Stygian Library Generator 2
permalink: stygiangenerator2
published: true
image: /images/stygiangenerator.png
description: >
  A mobile-friendly generator for the Stygian Library.
---

<div class="stygian-cards">
  <div class="stygian-text">
    <div id="roomContent">
      <h3 id="roomName">Welcome</h3>
      <p>Books are condensed collections of knowledge, and knowledge is power. As any physicist will tell you, power is a function of energy, and energy and mass are interchangeable, and enough mass warps space time.</p>
      <p>Knowledge is power. Power corrupts. The more power, the more it corrupts. Sufficient knowledge twists the world around it into strange shapes. Put enough books in one place, and they distort the world. Space bends in on itself, forming a sort of wormhole, linking the library to other libraries likewise afflicted. The space between is a sort of pocket realm, budded off from reality, maintained by the sheer power of books.</p>
      <p>After you've bought a copy of the book, you can use the buttons to generate locations and events. <a href="https://www.drivethrurpg.com/product/257113/The-Stygian-Library">Buy it here.</a></p>
    </div>
    <div id="detailContent">
    </div>
    <div id="encounterContent">
    </div>
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
        <button id="backButton" class="stygian-button" type="button" onclick="goBack()" style="display:none;">Go Back</button>
        <button class="stygian-button" type="button" onclick="goDeeper()">Go Deeper</button>
            <hr class="stygian-hr-dark">
        <button class="stygian-button" type="button"><span style="color:cornflowerblue;">Visitor</span> Event</button>
        <button class="stygian-button" type="button"><span style="color:crimson;">Intruder</span> Event</button>
    </div>
    <hr class="stygian-hr-dark">
    <div>
      <h3>
        Location Log
      </h3>
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