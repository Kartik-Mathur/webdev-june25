function Vehicle() {

}

function Car() {

}

function Bike() {

}

Car.prototype = Object.create(Vehicle.prototype);
Bike.prototype = Object.create(Vehicle.prototype);

console.log(Car.prototype.__proto__ == Vehicle.prototype)
console.log(Car.prototype.__proto__.__proto__ == Object.prototype)
console.log(Car.prototype.__proto__.__proto__.__proto__ == null)