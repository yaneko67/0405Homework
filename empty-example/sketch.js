let x = 1;
let y = 1;
let easing = 0.1;

function setup() { 
  createCanvas(600, 400); 
}

function draw() { 
  background(50);

  let targetX = mouseX;
  let dx = targetX-x;
  x += dx*easing;
  
  let targetY = mouseY;
  let dy = targetY-y;
  y += dy*easing;


  stroke(255);
  strokeWeight(1.5);
  fill(255, frameCount%40);
  
  ellipse(x+30, y, 60, 45);
  ellipse(x-30, y, 60, 45);
  ellipse(x, y+30, 45, 60);
  ellipse(x, y-30, 45, 60);

}