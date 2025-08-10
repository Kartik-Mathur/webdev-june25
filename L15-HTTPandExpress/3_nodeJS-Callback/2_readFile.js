const { readFile } = require('node:fs');
const path = require('path');

let filePath = path.join(__dirname, 'data', 'names.txt');
readFile(filePath, {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) throw err;
    console.log(data);
}); 