var startX = 20;
var stopX = 160;
var startY = 30;
var stopY = 80;
var x = startX;
var y = startY;
var step = 0.005;
var pct = 0.0;

function setup() {
  createCanvas(250,500);
} 

function draw() {
  background(244, 167, 66);
  if (pct <1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }
  line(x, y, 20, 20);
  strokeWeight(7);
  stroke(65, 113, 244);
  strokeCap(SQUARE)
}