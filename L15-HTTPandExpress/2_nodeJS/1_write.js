const { writeFile } = require('node:fs/promises');
const path = require('path');

let fileName = 'names.txt';
// let filePath = `/Users/kartikmathur/Desktop/C++/WebDev-1JuneBatch/L15-HTTPandExpress/2_nodeJS/data/names.txt`;
// console.log(__dirname);
let filePath = path.join(__dirname, 'data', fileName);
// console.log(filePath);
// writeFile is a function that returns a promise
writeFile(filePath, "आर्यन", {
    encoding: 'utf8',
    flag: 'w'
})
    .then(() => {
        console.log("File write success");
    })
    .catch(err => {
        console.log(err);
    })

console.log("Hello");
let sum = 10 + 20;
console.log(sum);