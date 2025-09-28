const Users = require("../model/Users");

module.exports.getSignup = (req, res) => {
    res.render('signup');
}

module.exports.postSignup = async (req, res, next) => {
    const { username, password, email } = req.body;
    console.log(username, password)
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
}

module.exports.getLogin = (req, res, next) => {
    res.render('login');
}