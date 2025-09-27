const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String
    },
    email: {
        type: mongoose.Schema.Types.String
    },
    google_access_token: mongoose.Schema.Types.String,
    profile_picture_google: mongoose.Schema.Types.String
})

module.exports = mongoose.model('users', userSchema);