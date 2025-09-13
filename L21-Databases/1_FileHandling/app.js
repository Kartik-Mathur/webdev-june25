const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const PORT = 4444;
const path = require('path');
const Todos = require('./Todos');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        let todos = await Todos.getTodos();
        res.render('index', { todos });
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.get('/todos/:id', async (req, res) => {
    const { id } = req.params;
    // const data = todos.filter(todo => todo.id == +id);
    try {
        let data = await Todos.getTodo(id);
        res.render('index', {
            todos: data
        })
    } catch (error) {
        res.render('error', {
            error
        })
    }
})

app.get('/delete-todo/:id', async (req, res) => {
    const { id } = req.params;
    // todos = todos.filter(todo => todo.id != +id);
    try {
        let msg = await Todos.deleteTodo(id);
        console.log(msg);
        res.redirect('/');
    } catch (error) {
        res.render('error', {
            error
        })
    }

})

app.post('/todos', async (req, res) => {
    const { task, description } = req.body;
    try {
        let msg = await Todos.addTodo(task,description);
        console.log(msg);

        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.render('error', {
            error
        })
    }
})


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})