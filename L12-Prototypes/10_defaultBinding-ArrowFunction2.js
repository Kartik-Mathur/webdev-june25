function outer() {
    console.log("Outer", this);
    let inner = () => {
        console.log("Inner", this);
    }

    inner();
}

let person = {
    name: 'Vikas'
}

let person1 = {
    name: 'Aryan'
}

outer.call(person);
// outer.call(person1);