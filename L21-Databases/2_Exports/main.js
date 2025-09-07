const { add } = require('./sum');
const mySub = require('./subtract');

let a = 10;
let b = 20;

// console.log(myAdd);
// console.log(mySub);
/* 
const myAdd = require('./sum');
console.log(myAdd.add(a, b));
*/
// Iska better way is

console.log(add(a, b));
console.log(mySub(a, b));