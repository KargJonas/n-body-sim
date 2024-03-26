const bodies = [
  // earth //
  new Body(
    vec(0, 0, 0),
    vec(0, 0, 0),
    70,
    vec(100, 100, 255)
  ),

  // moon //
  new Body(
    vec(-120, 0, 0),      // position
    vec(5, -5, 0),        // velocity
    20,                   // mass
    vec(255, 255, 255)    // path color
  ),

  // mars //
  new Body(
    vec(0, 200, 100),      // position
    vec(5, -1, 3),        // velocity
    40,                   // mass
    vec(255, 0, 0)        // path color
  ),

  // venus //
  new Body(
    vec(400, 400, 400),
    vec(2, 0, -5),
    60,
    vec(200, 255, 100)
  )
];

let cam;

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  // directionalLight(255, 255, 255, 1000, 1000, 0);

  smooth();
  cam = createEasyCam({ distance: 2000 });
}

function draw() {
  background(0);

  // let cg = vec();

  for (const body of bodies) {
    body.update();
    body.draw();
    // cg.add(body.p);
  }

  // cg.div(bodies.length);
  // cam.setCenter([...cg]);
  // cam.update();
}
