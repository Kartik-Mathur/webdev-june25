'use strict';

let x = "Hello";
console.log(x);

for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

x = "Hello World Learning strings";

let indx = x.indexOf("World");
console.log(indx);

let ans = "";
for (let i = 0; i < x.length; i++) {
    ans += x[i] + ' ';
}

console.log(ans);
