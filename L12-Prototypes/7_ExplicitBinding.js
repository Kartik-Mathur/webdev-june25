// Three ways to do this:
/*
1. call
2. bind
3. apply
*/
let person = {
    name: 'Vikas',
    age: 20
}

let person2 = {
    name: 'Aryan',
    age: 18
}

function print(city, country) {
    console.log(this);
    this.city = city;
    this.country = country;
}

// print.call(person2, "Delhi", "India"); // now inside print this will point to person
// console.log(person2);

// print.apply(person, ["Delhi", "India"]);


// let f = print.bind(person, "Delhi", "India");
// f();
// console.log(person);

print();