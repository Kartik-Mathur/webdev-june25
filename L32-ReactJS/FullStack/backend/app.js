import path from 'path';
import express from 'express';
import Todos from './model/Todos';
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

app.post('/todo', async (req, res) => {
    const { task, description } = req.body;
    try {
        let todo = await Todos.create({
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
// app.get('/todos',(req,res)=>{})
// app.put('/todo',(req,res)=>{})
// app.delete('/todo',(req,res)=>{})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});