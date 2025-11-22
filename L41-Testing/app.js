const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send("hello");
})

app.get('/world', (req, res) => {
    res.send("world");

})

app.get('/user', (req, res) => {
    res.send({
        name: 'kartik',
        email: 'kartik@cb.com',
        password: 'password'
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});

module.exports = app;