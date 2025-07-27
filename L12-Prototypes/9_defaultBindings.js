function outer() {
    console.log("Outer", this);
    function inner() {
        console.log("Inner", this);// Global
    }

    inner();
}

let person = {
    name: 'Vikas'
}

outer.call(person);
