// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius
  };

  get diameter() {
    return this.radius * 2
  };

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  get circumference() {
    return this.radius * (2 * pi)
    // C = 2π x 5
  };

  set circumference(circumference) {
    return circumference / 2(pi)
  }

  get area() {
    return pi * ( this.radius * this.radius )
  }

  set area(area) {
    this.radius = area / pi 
  }



}
