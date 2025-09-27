const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', async (req, res, next) => {
    const { username, password, email } = req.body;
    try {
        await Users.insertOne({
            username,
            password,
            email: email || ''
        })
        res.redirect('/auth/login');
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

router.get('/login', (req, res, next) => {
    res.render('login');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}))

router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


module.exports = router