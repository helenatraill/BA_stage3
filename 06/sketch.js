var speed = 4;
var x;
var y;

function setup() {
  createCanvas(250,500);
  x = width/4;
  y = height/2;
  background(204);
  r = random(105, 19, 191);
  g = random(62, 165, 196);
  b = random(255, 148, 0);
}

function draw () {
  background(255, 154, 12);
  x += random(-speed, speed);
  y += random(-speed, speed);
 
// top diagonal
for (var i = -10; i < 400; i += 20) {
    line(i, -x, i + -y, 100);
    stroke(r, g, b);
    strokeWeight(4);
  }
  
// middle
for (var i = 0; i < 500; i += 40) {
    line(i, x, i*0.5, y);
    stroke(255, 119, 0);
    strokeWeight(3);
  }
  
// horizontal orange
for (var i = 100; i < 500; i += 20) {
    line(x, i + 10, y, i + 10);
    stroke(r, g, b);
    strokeWeight(8);
  }
// horizontal blue
for (var i = 200; i < 400; i += 15) {
    line(x + 10, i + 1, y - 4, i + 12);
    stroke(61, 90, 237);
    strokeWeight(3);
  }

}

function mousePressed() {
  r = random(105, 19, 191);
  g = random(62, 165, 196);
  b = random(255, 148, 0);
}

