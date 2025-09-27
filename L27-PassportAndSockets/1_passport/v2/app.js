const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4444;
const passport = require('./passport/passport');
const isLoggedIn = require('./middlewares/isLoggedIn');
const isLoggedOut = require('./middlewares/isLoggedOut');

app.use(require('express-session')({ secret: 'abdfrv jhrjewrjwerje', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

// Way to user routers
app.use('/auth', isLoggedOut, require('./routers/auth'));
app.use('/', isLoggedIn, require('./routers/user'));

app.post('/logout', function (req, res, next) {
    req.logout(function (error) {
        if (error) {
            return res.render('error', {
                error
            })
        }
        res.redirect('/auth/login');
    });
});


mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })