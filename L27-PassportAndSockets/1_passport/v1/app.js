const path = require('path');
const express = require('express');
const Users = require('./model/Users');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4444;
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(require('express-session')({ secret: 'abdfrv jhrjewrjwerje', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
        let existingUser = await Users.findOne({
            username
        })
        if (!existingUser) {
            // Error nhi tha user ne username galat daal diya, that means error ki jagah null,
            // user nhi milla toh uski jagah false
            return cb(null, false, { message: 'Incorrect username' });
        }

        if (existingUser.password != password) {
            return cb(null, false, { message: 'Incorrect password' });
        }

        return cb(null, existingUser);
    } catch (error) {
        // error first callbacks
        cb(error);
    }
}));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({
            _id: id
        })
        // console.log("Deserialize",user)
        done(null, user);
    } catch (error) {
        done(error);
    }
});

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/signup', isLoggedOut, (req, res) => {
    res.render('signup');
})

function isLoggedIn(req, res, next) {
    if (req.user) {
        return next();
    }
    res.redirect('/login');
}

function isLoggedOut(req, res, next) {
    if (!req.user) {
        return next();
    }
    res.redirect('/');
}


app.post('/signup', isLoggedOut, async (req, res, next) => {
    const { username, password, email } = req.body;
    try {
        await Users.insertOne({
            username,
            password,
            email: email || ''
        })
        res.redirect('/login');
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.get('/login', isLoggedOut, (req, res, next) => {
    res.render('login');
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

app.get('/', isLoggedIn, (req, res) => {
    console.log(req.user);
    res.render('profile', {
        user: req.user
    });
})

app.post('/logout', function (req, res, next) {
    req.logout(function (error) {
        if (error) {
            return res.render('error', {
                error
            })
        }
        res.redirect('/login');
    });
});

mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })