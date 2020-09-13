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

My intention is to make a simple game that has similar hand-eye coordination as pulling Jenga blocks. 

The more blobs you shoot, the more difficult the game gets. If you miss, Game Over!

<div id="jenga-buttons" class="row" style="justify-content: space-around !important;margin-bottom:30px;">
  <div class="col-md-4 col noPadding">
  <a class="btn btn-black" style="background-color:#922b21;" onclick="window.throwBalls('dread', 6, 60, 6)"><h3 class="tightSpacing">Dread</h3>Default Settings</a></div>

  <div class="col-md-4 col noPadding">
  <a class="btn btn-black" style="background-color:#6c3483;" onclick="window.throwBalls('star', 3, 80, 10)"><h3 class="tightSpacing">StarCrossed</h3>Large, fast blobs</a></div>

  <div class="col-md-4 col noPadding">
  <a class="btn btn-black" style="background-color:#196f3d;" onclick="window.throwBalls('wretched', 9, 30, 3)"><h3 class="tightSpacing">Wretched</h3>Small, slow blobs</a></div>
</div>

<h2 style="text-align:center;" id="jengaScore"></h2>

<div id="jenga-div">
    <canvas id="jenga-canvas" resize="true" width="1000" height="1000"></canvas>
</div>

If you have feedback on tweaking the difficult or settings please let me know!

<p><i>Cover Image by <a href="https://pixabay.com/users/thekurupi-3657708/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Fernando FLeitas</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Pixabay</a></i></p>

<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
        height: 100%;
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