class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area(){
    return Math.PI * Math.pow(this.radius, 2);
  }

  set diameter(d){
    if(d > 0){
      this.radius = d / 2;
    } else {
      throw new Error('A circle cannot have a negative diameter');
    }
  }

  set circumference(c){
    if(c > 0){
      this.radius = c / 2 / Math.PI;
    } else {
      throw new Error('A circle cannot have a negative circumference')
    }
  }

  set area(a){
    if(a > 0){
      this.radius = Math.sqrt(a)/2;
    } else {
      throw new Error('A circle cannot have a negative area')
    }
  }
};
