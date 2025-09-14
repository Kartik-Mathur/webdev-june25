const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 4444;
app.use(express.urlencoded({ extended: true }));

// SCHEMA FOR STUDENT
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: String,
    date: { type: Date, default: Date.now },
})

const students = mongoose.model('students',studentSchema);


app.get('/students', async (req, res) => {
    const allStudents = await students.find();
    res.send(allStudents);
})

app.post('/students', async (req, res) => {
    const {name, age, city} = req.body;
    let newStudent= await students.create({
        name,
        age: Number(age),
        city: city || ''
    })
    res.send(newStudent);
})
// app.put('/students', async (req, res) => { })

mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
