function fun(name, college, no) {
    console.log(name, college, no);
    console.log(this);
    this.name = name;
    this.college = college;
    this.no = no;
}
let obj = {
    a: 1,
    b: true
}

let obj1 = {
    name: 'renam',
    hobbies: 'padhai hui cheez mana karna'
}

// Inbuilt CALL
console.log("----------------- INBUILT -----------------")
fun.call(obj, "ABC", "DEF", 1021);
fun.call(obj1, "ABC", "DEF", 202);

console.log(obj)
console.log(obj1)
console.log("----------------- INBUILT -----------------")
console.log("");

// fun.myCall(obj, "ABC", "DEF", 123); // myCall ke andar `this` will be fun
// Because of implicit binding
Function.prototype.myCall = function (obj, ...args) {
    // args: [name, college]
    /*
    obj: {
        a: 1,
        b: true
    }
     */
    let fun = this;
    // fun, fun ke andar obj chahiye as this
    obj.f = fun;
    // obj: {
    //     a: 1,
    //     b: true,
    //     f: fun(){}
    // }
    obj.f(...args);
    delete obj["f"];
}

console.log("------------------ USER DEFINED --------------------")
fun.myCall(obj, "ABC", "DEF", 123);
fun.myCall(obj1, "ABC", "DEF", 4444);

// fun.call(obj);
// fun.call(obj1);

console.log(obj)
console.log(obj1)
console.log("------------------ USER DEFINED --------------------")
