var speed = 2.5;
var diameter = 20;
var x;
var y;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  background(204);
}

function draw () {
  x += random(-speed, speed);
  y += random(-speed, speed);
  line(x, y, 50, 50);
}