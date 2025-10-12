import path from 'path';
import express from 'express';
import Todos from './model/Todos.js';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const PORT = 4444;
// axios
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.urlencoded({ extended: true }));

app.post('/todo', async (req, res) => {
    const { task, description } = req.body;
    try {
        await Todos.create({
            task,
            description
        })
        res.redirect('/todos');
    } catch (error) {
        res.status(500).json({
            message: 'Unable to add a new todo',
            error
        })
    }
})

app.get('/todos', async (req, res) => {
    try {
        let todos = await Todos.find({});
        return res.status(200).json({
            todos,
            message: 'Todos fetched successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Unable to add a new todo',
            error
        })
    }
})

app.put('/todo', async (req, res) => {
    const { id, task, description } = req.body;
    try {
        await Todos.findOneAndUpdate({
            _id: id
        }, {
            task,
            description
        })
        res.redirect('/todos');
    } catch (error) {
        res.status(500).json({
            message: 'Unable to update todos',
            error
        })
    }
})

app.delete('/todo', async (req, res) => {
    const { id } = req.body;
    try {
        await Todos.deleteOne({
            _id: id
        });
        res.redirect('/todos');
    } catch (error) {
        res.status(500).json({
            message: 'Unable to delete a todo',
            error
        })
    }
})

mongoose.connect('mongodb://localhost:27017/todos')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
