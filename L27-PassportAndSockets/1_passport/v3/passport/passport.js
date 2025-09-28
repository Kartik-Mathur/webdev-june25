const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../model/Users')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4444/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log("ACCESS", accessToken, "Refresh", refreshToken, "Profile", profile);
        try {
            let newUser = await Users.findOne({
                google_access_token: accessToken
            })

            if (newUser) return cb(null, newUser);
            newUser = await Users.create({
                username: profile.displayName,
                google_access_token: accessToken,
                profile_picture_google: profile.photos[0].value || ''
            })
            cb(null, newUser);
        } catch (error) {
            cb(error);
        }
    }
));

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