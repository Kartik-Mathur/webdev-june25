function hello() {
    console.log("Hello");
}

let world = function () {
    console.log("World");
}

hello();
world();

let cb = () => {
    console.log("Coding Blocks");
}

cb();

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

let add = (a, b) => a + b;
console.log(add(20, 30));