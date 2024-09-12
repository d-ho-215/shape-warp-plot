/*
let points_1 = [];
let points_2 = [];
let points_3 = [];
let z = 0;
let y_d = 0;
let y2d = 0;
let x_d = 0;
let colors;
let c_i = 0;
*/
//let i = 0;

let warpy;

function setup() {
  createCanvas(900, 900, SVG);
  background(240);
  let n = 200;
  let r = 110;
  
  /*
  for (let i=0; i<n; i++) {
    let theta = i * (TWO_PI / n);
    let x_1 = cos(theta) * r + (2*width/10);
    let x_2 = cos(theta) * r + (5*width/10);
    let x_3 = cos(theta) * r + (8*width/10);
    let y = sin(theta) * r + height/6;
    let y_2 = sin(theta) * r + 5*height/6;
    let pt1 = new Pt(createVector(x_1,y))
    points_1.push(pt1)
    let pt2 = new Pt(createVector(x_2,y_2))
    points_2.push(pt2)
    let pt3 = new Pt(createVector(x_3,y))
    points_3.push(pt3)
  }
  */
  
  
  /*colors = [
    color('green'),
    color('blue'),
    color('purple'),
    color('pink'),
    color('red'),
    color('black')
  ]*/
  colors = [
    color('black'),
    color('black'),
    color('black'),
    color('black'),
    //color('red'),
    //color('black')
  ]
  
}

function draw() {
  noFill();
  let noiseScale = 200;
  let factor = 0.5;
  
  let n = 200;
  let r = 110;
  
  let center1 = createVector(2*width/10, height/6)
  let center2 = createVector(5*width/10, height - height/6)
  let center3 = createVector(8*width/10, height/6)
  
  let cp1 = new CirclePoints(center1, r, n);
  let cp2 = new CirclePoints(center2, r, n);
  let cp3 = new CirclePoints(center3, r, n);
  
  warpy1 = new ShapeWarp(noiseScale, factor, cp1.points, 90, 0, 7);
  warpy2 = new ShapeWarp(noiseScale, factor, cp2.points, 90, 0, -7);
  warpy3 = new ShapeWarp(noiseScale, factor, cp3.points, 90, 0, 7); 
  warpy1.show()
  warpy2.show()
  warpy3.show()

  noLoop();
  
}