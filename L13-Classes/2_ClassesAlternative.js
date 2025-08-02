function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.print = function(){
    console.log("Name", this.name);
    console.log("Price", this.price);
}

let Maruti = new Car("Breeza",10);
let Audi = new Car("A4",20);

Maruti.print();
Audi.print();