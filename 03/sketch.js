function setup() {
  createCanvas(250,500);
  strokeCap(SQUARE);
}

function draw() {
  background(255, 154, 12);
  for (var i = -10; i < 400; i += 20) {
    line(i, -50, i + -60, 100);
    stroke(255, 119, 0);
    strokeWeight(4);
  }
  for (var i = 0; i < 500; i += 40) {
    line(i, 300, i*0.5, 200);
    stroke(255, 119, 0);
    strokeWeight(3);
  }
  for (var i = 105; i < 175; i += 20) {
    line(0, i + 10, 250, i + 10);
    stroke(255, 119, 0);
    strokeWeight(8);
  }
  for (var i = 0; i < 500; i += 40) {
    line(i, 400, i*0.75, 499);
    stroke(255, 119, 0);
    strokeWeight(8);
  }
   for (var i = 280; i < 430; i += 10) {
    line(0, i + 10, 250, i + 10);
    stroke(255, 119, 0);
    strokeWeight(3);
  }
  for (var i = -20; i < 600; i += 20) {
    line(0, i*2, mouseX, i + 10);
    stroke(94, 31, 109, 200)
    strokeWeight(8);
  }
}