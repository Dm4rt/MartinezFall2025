let images = [];
let currentImg = 0;

function preload() {
  images.push(loadImage('images/lesPaul.jpg'));
  images.push(loadImage('images/flyingV.jpg'));
  images.push(loadImage('images/sg.jpg'));
}

function setup() {
  let canvas = createCanvas(windowWidth * 0.25, 600);
  canvas.parent('p5-container');
  frameRate(1); //this should make it 1 FPS
}

function draw() {
  background(33, 86, 74);
  let img = images[currentImg];
  let aspect = img.width / img.height;
  let newW = width * 0.9;
  let newH = newW / aspect;
  imageMode(CENTER);
  image(img, width/2,height/2-20, newW,newH);
  fill(255);
  rectMode(CENTER);
  noStroke();
  rect(width /2,height - 80,width * 0.8,60);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  text("ON SALE NOW!",width/2,height - 80);
  currentImg = (currentImg + 1) %images.length;
}
function windowResized() {
  resizeCanvas(windowWidth * 0.25, 600);
}