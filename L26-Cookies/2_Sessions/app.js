const path = require('path');
const express = require('express');
var app = express()
const PORT = 4444;
const session = require('express-session');

app.use(session({
    secret: ',ansdjarbfk.esjrke sbrkfasfbgkrsagkarfjehfjaghkhhk vkh',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    if (req.session.user) {
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
    req.session.user = userData;
    res.redirect('/profile');
})

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    req.session.user.cnt++;
    let userData = req.session.user;
    res.send(`Welcome to the page ${userData.username} for : ${userData.cnt}
            <br>
            <a href='/logout'>
                <button>LOGOUT</button>
            </a>
        `);
})

app.get('/logout', (req, res) => {
    req.session.destroy(function (err) { 
        res.redirect('/login');
    })

})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});