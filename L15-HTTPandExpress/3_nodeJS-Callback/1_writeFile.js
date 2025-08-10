const { writeFile } = require('node:fs');
const path = require('path');

let filePath = path.join(__dirname, 'data', 'names.txt');
writeFile(filePath, "Hello writing data", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 