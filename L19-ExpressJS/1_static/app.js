const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    /*res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is a Medium Website!!!!!!</h1>
</body>
</html>`)*/
})

app.get('/file.js',(req,res)=>{
    res.sendFile(path.join(__dirname, '/file.js'));
})

app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname, '/style.css'));
})


app.listen(4444, () => {
    console.log("http://localhost:4444");
})