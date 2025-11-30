const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const PORT = 4444;
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'nidgg bgbg bsdgs bnigbidbgibigbsbgilshbbs',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/session-store' })
}))

app.get('/login', (req, res) => {
    if (req.session.username) { // if session already have username then send this user
        // to dashboard
        return res.redirect('/dashboard');
    }

    const { username } = req.query;
    req.session.username = username;
    res.redirect('/dashboard');
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

app.get('/dashboard', (req, res) => {
    if (!req.session.username) { // if session doesnt have username then send this user
        // to login
        return res.redirect('/');
    }

    res.send("Welcome to dashboard <button> <a href='/logout'>Logout</a></button>")
})

/*
// In memory hai yeh toh yeh system ko crash kar dega
SESSION_MAP: {
    session_id_1: {},
    session_id_2: {user_2_Data},
    session_id_3: {user_3_Data},
}
 */


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});