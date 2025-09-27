const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../model/Users')

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

module.exports = passport