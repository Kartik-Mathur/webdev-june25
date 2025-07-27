function Person(name, age) {
    // this->{}
    this.name = name; // this : {name: 'Vikas'}
    this.age = age;// this : {name: 'Vikas', age: 20}
}

let p = new Person("Vikas", 20);
let p1 = new Person("Aryan", 18);

console.log(p);
console.log(p1);
