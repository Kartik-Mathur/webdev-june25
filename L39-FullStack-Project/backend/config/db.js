const mongoose = require('mongoose');


module.exports = async function () {
    return await mongoose.connect(process.env.DB_URL);
}