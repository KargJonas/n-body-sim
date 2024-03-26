class Vec {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  clone() {
    return vec(this.x, this.y, this.z);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;
    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;
    return this;
  }

  mul(factor) {
    this.x *= factor;
    this.y *= factor;
    this.z *= factor;
    return this;
  }

  div(factor) {
    this.x /= factor;
    this.y /= factor;
    this.z /= factor;
    return this;
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
}

function vec(x = 0, y = 0, z = 0) {
  return new Vec(x, y, z);
}
