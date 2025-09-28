const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getSignup, postSignup, getLogin } = require('../controllers/auth');


router.get('/signup', getSignup)
router.post('/signup', postSignup)
router.get('/login', getLogin)

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