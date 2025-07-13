function outer() {
    let x = 10;
    x++;
    function inner() {
        x++;
        console.log(x);
    }

    return inner
}
let fn = outer(); 
/* // Finally fn will have inner function that can be called via fn
let fn = function inner() { // Closure: {x : 11}
    x++;
    console.log(x);
};*/

fn();
fn();
fn();