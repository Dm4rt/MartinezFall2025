
let countMax = 15; //time before every random change
let count = 0;
let x;
let z;
let shapeChange;
function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(64, 16, 128);
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
  );
  x = random(30,45);
  z = random(15, 30);
  shapeChange =false;
}

function draw() {
  background(6, 255, 200);
  
  // Call every frame to adjust camera based on mouse/touch
  orbitControl();

  // Rotate rings in a half circle to create a sphere of cubes
  for (let zAngle = 0; zAngle < 270; zAngle += z) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += x) {
      push();

      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);
      
      
      // Then translate down 400 units
      translate(0, 400, 0);
      if(shapeChange){
        box();
      }
      else{
        sphere(20);
      }
      pop();
    }
  }

  count++;
  if(count==countMax){
    count = 0;
    x = random(30,45);
    z = random(15, 30);
    shapeChange = !shapeChange;
  }
}