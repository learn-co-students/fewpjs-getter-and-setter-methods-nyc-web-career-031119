class Circle {
  constructor(radius){
    this.radius = radius;

  }

  set diameter(diameter){
     this._diameter = diameter;
     this.radius = this._diameter / 2;
  }

  get diameter(){
    return this.radius * 2;
  }

  set circumference(circumference){
     this._circumference = circumference;
     this.radius = this._circumference / Math.PI / 2
  }

  get circumference(){
    return Math.PI * this.diameter;
  }

  get area(){
    return Math.PI * Math.pow(this.radius, 2);
  }
}
// Add your Circle class here
