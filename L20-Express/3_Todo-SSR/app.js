const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const PORT = 4444;
const path = require('path');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

let todos = [
    {
        id: 1,
        task: "Buy groceries",
        description: "Pick up milk, eggs, bread, and vegetables from the store."
    },
    {
        id: 2,
        task: "Finish project report",
        description: "Complete the final draft of the project report and email it to the manager."
    },
    {
        id: 3,
        task: "Call the plumber",
        description: "Schedule an appointment to fix the leaking kitchen sink."
    },
    {
        id: 4,
        task: "Workout",
        description: "Do a 30-minute cardio session and some light stretching."
    },
    {
        id: 5,
        task: "Read a book",
        description: "Read at least 20 pages of the new novel before bed."
    }
];

app.get('/', (req, res) => {
    res.render('index', { todos });
})

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const data = todos.filter(todo => todo.id == +id);
    res.render('index', {
        todos: data
    })
})

app.get('/delete-todo/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id != +id);
    res.redirect('/');
})

app.post('/todos', (req, res) => {
    const { task, description } = req.body;
    todos.push({
        id: uuid(),
        task,
        description
    })
    console.log(todos);
    res.redirect('/');
})


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})