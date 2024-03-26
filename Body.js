const max_path = 200;

class Body {
  constructor(p, v, m, c) {
    this.p = p;
    this.v = v;
    this.m = m;
    this.c = c;

    this.path = [];
  }

  update() {
    if (Math.floor(millis() / 10) % 3 === 0) {
      this.path.unshift(this.p.clone());
      if (this.path.length > max_path) this.path.pop();
    }

    this.p.add(this.v);

    for (const body of bodies) {
      if (body == this) continue;

      const g = body.p.clone().sub(this.p).mul(body.m * .000001);
      this.v.add(g);
    }
  }

  draw() {
    push();

    translate(...this.p);

    noStroke();
    lights();
    specularMaterial(20);
  
    fill(...this.c);
    sphere(this.m);

    pop();
    push();

    // draw the path
    stroke(...this.c);
    strokeWeight(5);
    let last;

    for (const p of this.path) {
      if (last) line(...last, ...p);
      last = p;
    }

    pop();
  }
}