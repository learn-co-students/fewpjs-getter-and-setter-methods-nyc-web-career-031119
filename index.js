class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }
  set circumference(circumference) {
    this.diameter = circumference / Math.PI;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

}
