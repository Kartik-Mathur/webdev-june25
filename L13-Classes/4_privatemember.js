class Person {
    #secret = "Mera secret"
    constructor(name) {
        this.name = name
    }

    getSecret() {
        return this.#secret;
    }

    get getName() {
        return this.name
    }

    set setName(newName) {
        this.name = newName;
    }
}

// let p = new Person("Aditya");

// console.log(p.getSecret());
// // console.log(p.#secret);

// console.log(p.getName)
// p.setName = "Aditya Garg";
// console.log(p.getName)
