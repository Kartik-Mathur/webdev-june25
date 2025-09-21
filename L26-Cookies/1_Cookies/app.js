const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser')
var app = express()
app.use(cookieParser())
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'))
})

app.post('/login', (req, res) => {
    const { username } = req.body;
    let userData = {
        username,
        cnt: 0
    }
    res.cookie('user', JSON.stringify(userData), {
        httpOnly: true
    });
    res.redirect('/profile');
})

app.get('/profile', (req, res) => {
    console.log(req.cookies);
    if (!req.cookies.user) {
        return res.redirect('/login')
    }
    
    let userData = JSON.parse(req.cookies.user);
    if (!userData.username) {
        return res.redirect('/login');
    }
    userData.cnt++;
    res.cookie('user', JSON.stringify(userData), {
        httpOnly: true
    });

    res.send(`Welcome to the page ${userData.username} for : ${userData.cnt}
            <br>
            <a href='/logout'>
                <button>LOGOUT</button>
            </a>
        `);
})

app.get('/logout', (req, res) => {
    res.cookie('user', "");
    res.redirect('/login');
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});