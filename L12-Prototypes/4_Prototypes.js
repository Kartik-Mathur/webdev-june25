function Car() {
    console.log("I am car");
}

Car();
console.log(Car.prototype);

console.log(Car.prototype.__proto__ == Object.prototype);