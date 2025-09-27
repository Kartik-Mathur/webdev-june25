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
        res.redirect('/login');
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


module.exports = router