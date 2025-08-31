const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
let todos = [
    // {id: 1, task: 'Cricket'}
]
// app.use('/', express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/todos', (req, res) => {
    res.send(todos);
});
app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    const data = todos.filter(todo => todo.id == +id);
    res.send(data);
});

app.post('/todo', (req, res) => {
    const { task } = req.body;
    todos.push({
        id: todos.length + 1,
        task
    })

    // res.send(todos);
    // res.redirect('/todos');
    res.redirect('/');
});


app.listen(4444, () => {
    console.log("http://localhost:4444");
})