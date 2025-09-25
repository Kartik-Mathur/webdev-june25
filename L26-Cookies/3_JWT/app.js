const path = require('path');
const express = require('express');
var app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT = 4444;
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'akjsfhaourfagrergevr vjevrjfvejvfrjev';

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    let token = req.cookies.token;
    if (token) {
        return res.redirect('/profile');
    }

    res.sendFile(path.join(__dirname, 'login.html'))
})

app.post('/login', (req, res) => {
    const { username } = req.body;

    let userData = {
        username,
        cnt: 0
    }

    var token = jwt.sign(userData, JWT_SECRET);

    res.cookie('token', token, {
        httpOnly: true
    })

    res.redirect('/profile');
})

app.get('/profile', (req, res) => {
    let token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    let userData;
    try {
        userData = jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return res.redirect('/login');
    }
    
    if (!userData.username) {
        return res.redirect('/login');
    }

    res.send(`Welcome to the page ${userData.username} for : ${userData.cnt}
            <br>
            <a href='/logout'>
                <button>LOGOUT</button>
            </a>
        `);
})

app.get('/logout', (req, res) => {
     res.cookie('token', "", {
        httpOnly: true
    })
    res.redirect('/login');
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});