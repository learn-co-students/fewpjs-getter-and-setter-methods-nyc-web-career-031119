class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area(){
    return Math.PI * this.radius**2;
  }

  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    return Math.PI * this.diameter ;
  }

  set area(newArea){
    this.radius = Math.sqrt(newArea/Math.PI);
  }

  set diameter(newDiameter){
    this.radius = newDiameter/2 ;
  }

  set circumference(newCircumfrence){
    this.radius = newCircumfrence/Math.PI/2 ;
  }


}
