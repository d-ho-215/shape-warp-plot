let points_1 = [];
let points_2 = [];
let points_3 = [];
let z = 0;
let y_d = 0;
let y2d = 0;
let x_d = 0;
let colors;
let c_i = 0;
//let i = 0;

function setup() {
  createCanvas(900, 900, SVG);
  background(240);
  let n = 200;
  let r = 110;
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
  let noiseScale = 200;
  let factor = 0.5;
  //let z = 0;
  //background(220, 5);
  noFill()
  stroke(colors[c_i])
  strokeWeight(1);
  for (let i=0; i<90; i++) {
      beginShape()
      for (let pt of points_1) {
        vertex(pt.position.x + x_d, pt.position.y + y_d);
        //point(pt.position.x, pt.position.y + y_d)
        let force_dir = map(noise(pt.position.x / noiseScale, pt.position.y / noiseScale, z), 0, 1, -TWO_PI *2, TWO_PI*2)
        let dx = cos(force_dir) * factor;
        let dy = sin(force_dir) * factor;
        let force = createVector(dx, dy);
        pt.applyForce(force)
      }
    endShape(CLOSE)
      
        z += 0.01;
        y_d += 7;
        y2d -= 7;
        //x_d += 5;
        c_i ++;
        c_i = c_i % colors.length;
  }
  
  z = 0;
  y_d = 0;
  y2d = 0;
  c_i = 0;
  
    for (let i=0; i<90; i++) {
      beginShape()
      for (let pt of points_2) {
        vertex(pt.position.x + x_d, pt.position.y + y2d);
        //point(pt.position.x, pt.position.y + y_d)
        let force_dir = map(noise(pt.position.x / noiseScale, pt.position.y / noiseScale, z), 0, 1, -TWO_PI *2, TWO_PI*2)
        let dx = cos(force_dir) * factor;
        let dy = sin(force_dir) * factor;
        let force = createVector(dx, dy);
        pt.applyForce(force)
      }
    endShape(CLOSE)
      
        z += 0.01;
        y_d += 7;
        y2d -= 7;
        //x_d += 5;
        c_i ++;
        c_i = c_i % colors.length;
  }
  
  z = 0;
  y_d = 0;
  y2d = 0;
  c_i = 0
  

    for (let i=0; i<90; i++) {
      beginShape()
      for (let pt of points_3) {
        vertex(pt.position.x + x_d, pt.position.y + y_d);
        //point(pt.position.x, pt.position.y + y_d)
        let force_dir = map(noise(pt.position.x / noiseScale, pt.position.y / noiseScale, z), 0, 1, -TWO_PI *2, TWO_PI*2)
        let dx = cos(force_dir) * factor;
        let dy = sin(force_dir) * factor;
        let force = createVector(dx, dy);
        pt.applyForce(force)
      }
    endShape(CLOSE)
      
        z += 0.01;
        y_d += 7;
        y2d -= 7;
        //x_d += 5;
        c_i ++;
        c_i = c_i % colors.length;
  }
  
  z = 0;
  y_d = 0;
  y2d = 0;
  c_i = 0

  
  /*
  beginShape()
  for (let pt of points_2) {
    vertex(pt.position.x + x_d, pt.position.y + y2d);
    //point(pt.position.x, pt.position.y + y2d)
    let force_dir = map(noise(pt.position.x / noiseScale, pt.position.y / noiseScale, z), 0, 1, -TWO_PI *2, TWO_PI*2)
    let dx = cos(force_dir) * factor;
    let dy = sin(force_dir) * factor;
    let force = createVector(dx, dy);
    pt.applyForce(force)
  }
  endShape(CLOSE)
  
  beginShape()
  for (let pt of points_3) {
    vertex(pt.position.x + x_d, pt.position.y + y_d);
    //point(pt.position.x, pt.position.y + y_d)
    let force_dir = map(noise(pt.position.x / noiseScale, pt.position.y / noiseScale, z), 0, 1, -TWO_PI *2, TWO_PI*2)
    let dx = cos(force_dir) * factor;
    let dy = sin(force_dir) * factor;
    let force = createVector(dx, dy);
    pt.applyForce(force)
  }
  endShape(CLOSE)
  */
  
    noLoop()
  i++;
  if (i> 90) {
    noLoop();
  }
  //console.log(z);
}