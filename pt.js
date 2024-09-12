class Pt {
  constructor (position) {
    this.position = position
  }
  
  applyForce(force) {
    this.position.add(force)
  }
}

class ShapeWarp {
    constructor (noisescale, factor, points, iterations, x_d, y_d) {
        this.noisescale = noisescale;
        this.factor = factor;
        this.points = points;
        this.iterations = iterations;
        this.noise_z = 0;
        this.x_d = x_d;
        this.x_delta = 0;
        this.y_d = y_d;
        this.y_delta = 0;
        
    }
    
    next() {
        for (let pt of this.points) {
            let noise_val = noise(
                                    pt.position.x / this.noisescale, 
                                    pt.position.y / this.noisescale, 
                                    
                                    this.noise_z);
            let force_dir = map(noise_val,
                                0, 
                                1,
                                -TWO_PI * 2, 
                                TWO_PI * 2,
                                );
            let dx = cos(force_dir) * this.factor;
            let dy = sin(force_dir) * this.factor;
            let force = createVector(dx, dy);
            //console.log("noise_val:", noise_val, "force_dir: ", force_dir, "force: ",force)
            pt.applyForce(force)
        }
        this.noise_z += 0.02;
        this.x_delta += this.x_d;
        this.y_delta += this.y_d;
    }
    
    show() {
        
        for (let i=0; i<this.iterations; i++) {
            beginShape();
            for (let pt of this.points) {
                vertex(pt.position.x + this.x_delta, pt.position.y + this.y_delta)
            }
            endShape(CLOSE);
            this.next();
        }
        
    }
}

class CirclePoints {
    constructor(center, radius, n_points) {
        this.center = center;
        this.radius = radius;
        this.n_points = n_points;
        
        this.points = []
        
        this.build();
    }
    
    build() {
        for (let i=0; i<this.n_points; i++) {
            let theta = i * (TWO_PI / this.n_points);
            let x = cos(theta) * this.radius + this.center.x;
            let y = sin(theta) * this.radius + this.center.y;
            let pt = new Pt(createVector(x,y));
            this.points.push(pt);
        }
    }
}