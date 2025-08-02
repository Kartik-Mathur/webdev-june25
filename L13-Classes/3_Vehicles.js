class Vehicle {
    constructor(company) {
        console.log(this, "inside vehicle");
        this.company = company;
    }
};

class Car extends Vehicle {
    constructor(company, name, price) {
        super(company);
        console.log(this, "inside car");
        this.name = name;
        this.price = price;
    }

    print() {
        console.log("Name", this.name);
        console.log("Price", this.price);
        console.log("Company", this.company);
    }
};

let Maruti = new Car("Maruti", "Breeza", 10);

// let Audi = new Car("Audi", "A4", 20);

// Maruti.print();
// Audi.print();

// console.log(Maruti);

// console.log(Car.prototype.__proto__ == Vehicle.prototype);
// console.log(Car.prototype.__proto__.__proto__ == Object.prototype);
// console.log(Vehicle.prototype);

// Maruti.sayHello();

// let Maruti = new Vehicle("Maruti");
// console.log(Maruti);