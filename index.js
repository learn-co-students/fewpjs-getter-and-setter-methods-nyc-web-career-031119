// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    let pie = Math.PI;
    return 2 * pie * this.radius;
  }

  get area(){
    let pie = Math.PI;
    let rSquared = this.radius * this.radius;
    return  pie * rSquared;
  }

  set diameter(newDiameter){
    this.radius = newDiameter / 2;
  }

  set circumference(newCirc){
    let pie = Math.PI;
    this.radius = newCirc / (2 * pie);
  }

  set area(newArea){
    let pie = Math.PI;
    this.radius = Math.sqrt(newArea / pie);
  }

}
