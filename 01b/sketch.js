function setup() {
  createCanvas(500,500);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(200);
  fill(r, g, b);
  stroke(r, g, b);
  ellipse(278,-100,400,400);
  ellipse(120,100,110,110);
  ellipse(mouseX-100,60,mouseY,18);
  ellipse(mouseX+100,300,mouseY,150);
  ellipse(300,400,199,199);
  ellipse(200,300,20,20);
}

function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
  }