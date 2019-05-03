// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return pi * this.diameter
  }

  get area() {
    return pi * (this.radius ** 2)
  }

  set diameter(newD) {
    this.radius = newD/2
  }

  set circumference(newC) {
    this.radius = (newC / pi) / 2
  }

}
