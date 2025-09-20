const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    description: String
})

module.exports = mongoose.model('todos', todoSchema);