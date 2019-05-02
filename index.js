// Add your Circle class here

class Circle {
	constructor(radius) {
		this._radius = radius;
	}

	get radius() {
		return this._radius;
	}

	set radius(value) {
		this._radius = value;
	}

	set diameter(value) {
		this._radius = value/2;
	}

	set circumference(value) {
		this._radius = ((value/2) / Math.PI);
	}

	get diameter() {
		return (this._radius * 2);
	}

	get circumference() {
		return Math.PI * this.diameter;
	}

	get area() {
		return (Math.PI * (Math.pow(this._radius, 2)));
	}
}

