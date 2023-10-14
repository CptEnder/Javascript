// Visualization of the Recaman's Sequence

let count = 1;
let currentNum = 0;
let Sequence = [currentNum];
let arcs = [];
let notAvailableNums = [true];
let start, end;
let scl = 0;
let biggest = 0;

class Arc {
  constructor(start, end, dir) {
    this.start = start;
    this.end = end;
    this.dir = dir;
  }

  show() {
    let diameter = abs(this.end - this.start);
    let x = (this.end + this.start) / 2;
    stroke(255);
    strokeWeight(0.5);
    noFill();
    if (this.dir == 0) {
      arc(x, 0, diameter, diameter, PI, 0);
    } else {
      arc(x, 0, diameter, diameter, 0, PI);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  // background(0);
}

function Recaman() {
  let next = currentNum - count;
  if (next < 0 || notAvailableNums[next]) {
    next = currentNum + count;
  }

  arcs.push(new Arc(currentNum, next, count % 2));

  notAvailableNums[next] = true;
  Sequence.push(next);
  currentNum = next;
  if (currentNum > biggest) {
    biggest = currentNum;
  }
  count++;
}

function draw() {
  Recaman();
  translate(0, height / 2);
  scl = lerp(scl, width / biggest, 0.1);
  scale(scl);
  background(0);

  for (let arc_ of arcs) {
    // console.log(arc_);
    arc_.show();
  }
}
