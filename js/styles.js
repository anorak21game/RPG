"use strict"

var body = document.querySelector("body");
var player_figure = document.querySelector("player__figure");
var player = document.querySelector(".player__stay");

body.style.backgroundColor = "#96ffc1";

player_figure = document.createElement('style')
player_figure.innerHTML = "div {width: 256px; height: 256px; overflow: hidden; position: relative; margin: 0 auto;}";
document.body.appendChild(player_figure);

