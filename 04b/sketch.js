//var colors = [];
function setup() {
  resizeCanvas(500, 500);
}

var balls = [];
function mouseDragged() {
  fill(random (0, 255), (0, 255), (0, 255));
  var ball = new Ball();
  ball.position.x = mouseX;
  ball.position.y = mouseY;
  ball.speed.x = random(-5, 5);
  ball.speed.y = random(-5, 5);
  
  var index = Math.floor(random(3));
  
//  ball.c = colors[index];
  balls.push(ball);
}

function draw() {
//  background(255, 255, 255);
  noStroke();
  for(var i = 0; i < balls.length; i++) {
    balls[i].draw();
  }
}

function Ball() {
  this.position = {x: 0, y: 250};
  this.speed = {x:1, y:1};
 // fill(random(0, 255), random(0, 255), random(0, 255));
//  this.c;
  
  this.draw = function() {
    
    // fill(255,0,0);
//    fill(this.c);
    
    this.position.x = this.position.x + this.speed.x;
    this.position.y = this.position.y + this.speed.y;
    ellipse(this.position.x, this.position.y, 10, 10);
    
    if(this.position.y > height) {
      this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.x > width) {
      this.speed.x = this.speed.x * -1;
    }
    
    if(this.position.y < 0) {
      this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.x < 0) {
      this.speed.x = this.speed.x * -1;
    }
  }
}