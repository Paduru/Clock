var hr, mn, sc;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(250, 250);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sc = second();

  secAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  translate(125, 125);
  rotate(secAngle);
  stroke(255 - Math.ceil(mouseX / 2), 0, 0);
  strokeWeight(7);
  line(0, 0, 0, -80);
  pop();
  stroke(255 - Math.ceil(mouseX / 2), 0, 0);
  strokeWeight(7);
  noFill();
  arc(125, 125, 180, 180, -90, secAngle - 90);

  push();
  translate(125, 125);
  rotate(minAngle);
  stroke(255 - Math.ceil(mouseX / 2), 255 - Math.ceil(mouseY / 2), 0);
  strokeWeight(7);
  line(0, 0, 0, -60);
  pop();
  stroke(255 - Math.ceil(mouseX / 2), 255 - Math.ceil(mouseY / 2), 0);
  strokeWeight(7);
  noFill();
  arc(125, 125, 200, 200, -90, minAngle - 90);

  push();
  translate(125, 125);
  rotate(hrAngle);
  stroke(0, 0, 255 - Math.ceil(mouseX / 2));
  strokeWeight(7);
  line(0, 0, 0, -40);
  pop();
  stroke(0, 0, 255 - Math.ceil(mouseX / 2));
  strokeWeight(7);
  noFill();
  arc(125, 125, 220, 220, -90, hrAngle - 90);
}
