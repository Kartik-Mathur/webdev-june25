const express = require('express');
const app = express();

// localhost:4444/
app.get('/', (req, res) => {
    // console.log(req)
    res.send('<h1 style="color:orange">Hello World</h1>');
})

app.get('/greet', (req, res) => {
    // console.log(req.query);
    // res.send(`Hi ${req.query.name} from ${req.query.college}`);
    const { name, college } = req.query;
    res.send(`Hi ${name} from ${college}`);
})

// localhost:4444/movie/ironman
app.get('/movie/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hi you want to watch : ${name}`);
})


app.listen(4444);