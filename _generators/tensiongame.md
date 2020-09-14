---
date: 2020-09-12
layout: full-page
title: Tension Mini-game for Tabletop RPGs
permalink: tensiongame
published: true
image: /images/posts/jenga-colorful.jpg
description: >
  A hand-eye coordination game similar to Jenga.
---

A mini-game that requires similar hand-eye coordination as pulling Jenga blocks. The more blobs you shoot, the more difficult things get. If you miss, Game Over! 

<div id="jenga-buttons" class="row" style="justify-content: space-around !important;margin-bottom:30px;">
  <!-- throwBalls(gameName, numBalls, ballSize, ballSpeed) -->
  <div class="col-md-4 col">
  <a class="btn jenga-dread-btn" onclick="window.newGame('dread', 6, 60, 3)"><h3 class="tightSpacing">Dread</h3>Default Settings</a></div>

  <div class="col-md-4 col">
  <a class="btn jenga-star-btn" onclick="window.newGame('star', 3, 80, 5)"><h3 class="tightSpacing">StarCrossed</h3>Large, fast blobs</a></div>

  <div class="col-md-4 col">
  <a class="btn jenga-wretched-btn" onclick="window.newGame('wretched', 9, 30, 2)"><h3 class="tightSpacing">Wretched</h3>Small, slow blobs</a></div>
</div>

<h2 style="text-align:center;" id="jengaScore"></h2>

<div id="jenga-div">
    <canvas id="jenga-canvas" resize="true"></canvas>
</div>

### Explanation

Playing Jenga is mostly an exercise in patience. Especially for the first few pulls, as long as you're willing to check for the loose blocks it's trivial. 

Unlike Jenga there's no way to play this game together; but I still find it a better replacement than raw statistical methods.

If you have suggestions for tweaking the game to make it more suitable, please let me know!

<p><i>Cover Image by <a href="https://pixabay.com/users/thekurupi-3657708/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Fernando FLeitas</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Pixabay</a></i></p>

<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
  }
  body a {
    color: #F5F5F5;
  }

/* Scale canvas with resize attribute to full size */
canvas[resize] {
    width: 100%;
    height: 100%;
    background-color:#313131;
}
  </style>

<script async src="/assets/js/paper-full.js" type="text/javascript"></script>

<script async src="/assets/generator_resources/tensionMinigame.js" type="text/paperscript" canvas="jenga-canvas" hidpi="off"></script>