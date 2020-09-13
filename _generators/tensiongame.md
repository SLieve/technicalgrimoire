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
  <a class="btn btn-black" style="background-color:#922b21;" id="dread-btn"><h3 class="tightSpacing">Dread</h3>Easy</a></div>

  <div class="col-md-4 col noPadding">
  <a class="btn btn-black" style="background-color:#6c3483;" id="star-btn"><h3 class="tightSpacing">StarCrossed</h3>Medium</a></div>

  <div class="col-md-4 col noPadding">
  <a class="btn btn-black" style="background-color:#196f3d;" id="wretched-btn"><h3 class="tightSpacing">Wretched</h3>Difficult</a></div>
</div>

<h2 style="text-align:center;" id="jengaScore"></h2>

<div id="jenga-div">
    <canvas id="jenga-canvas" resize></canvas>
</div>

If you have feedback on tweaking the difficult or settings please let me know!

<p><i>Cover Image by <a href="https://pixabay.com/users/thekurupi-3657708/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Fernando FLeitas</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4027763">Pixabay</a></i></p>

<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
  }
  body a {
    color: #F5F5F5;
  }
  </style>

<script async src="/assets/js/paper-full.js" type="text/javascript"></script>

<script async src="/assets/generator_resources/tensionMinigame.js" type="text/paperscript" canvas="jenga-canvas" hidpi="off"></script>

<script type="text/javascript">

window.onload = function() {
document.getElementById('dread-btn').onclick = function() {
window.deleteBalls();
window.throwBalls("dread", 8, 80, 4);
document.getElementById('jenga-buttons').style="display:none;";
};
document.getElementById('star-btn').onclick = function() {
window.deleteBalls();
window.throwBalls("star", 12, 60, 10);
document.getElementById('jenga-buttons').style="display:none;";
};
document.getElementById('wretched-btn').onclick = function() {
window.deleteBalls();
window.throwBalls("wretched", 14, 30, 10);
document.getElementById('jenga-buttons').style="display:none;";
};
};

//Disable spacebar scroll!
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
</script>