class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log("Name", this.name);
        console.log("Price", this.price);
    }

}

let Maruti = new Car("Breeza", 10);
let Audi = new Car("A4", 20);

Maruti.print();
Audi.print();

console.log(Car.prototype.__proto__ == Object.prototype);