const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

app.use(express.urlencoded({ extended: true }));
let dbName = 'mydb';
let db;

app.get('/students', async (req, res) => {
    const { skip } = req.query;

    const students = db.collection('students');
    // const data = await students.find({}).skip(5 * skip).limit(5).toArray();
    const data = await students.find({}).toArray();
    // console.log(data);
    res.send(data);
})

app.post('/student', async (req, res) => {
    const { name, age, city } = req.body;
    console.log(name, age, city);
    const students = db.collection('students');
    const newStudent = await students.insertOne({
        name,
        age: +age,
        city
    })

    res.send(newStudent);
})

app.put('/students', async (req, res) => {
    const { age, city } = req.body;
    const students = db.collection('students');
    await students.updateMany(
        {age: +age},
        {
            $set: {
                city
            }
        }
    )
    res.redirect('/students');
})

client.connect()
    .then(() => {
        db = client.db(dbName);
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
