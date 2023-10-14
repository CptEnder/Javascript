let cartCorr;
let poleCorr;
let cartW = 30;
let cartH = 20;
let poleW = 10;
let poleH = 100;

function setup() {
  createCanvas(400, 400);
  cartCorr = createVector(width / 2, (height / 3) * 2);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cartCorr.x -= 2;
  } else if (keyCode === RIGHT_ARROW) {
    cartCorr.x += 2;
  }
}

function draw() {
  poleCorr = cartCorr;

  background(0);
  rectMode(CENTER);
  fill(255);
  rect(cartCorr.x, cartCorr.y, cartW, cartH);
  rectMode(CORNER);
  fill(255, 0, 0);
  rect(poleCorr.x - poleW / 2, poleCorr.y, poleW, -poleH);
}
