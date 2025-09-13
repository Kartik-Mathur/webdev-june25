const fs = require('node:fs/promises');
const path = require('path');
const { v4: uuid } = require('uuid');
let filePath = path.join(__dirname, 'database', 'todos.json');
async function getData() {
    try {
        let data = await fs.readFile(filePath, {
            encoding: 'utf-8'
        });

        return JSON.parse(data);
    } catch (error) {
        throw new Error("Unable to read file")
    }
}

async function writeData(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data));
        return data;
    } catch (error) {
        throw new Error("Unable to read file")
    }
}

class Todos {
    static async addTodo(task, description) {
        try {
            let todos = await getData();
            console.log(todos);
            let newTodo = {
                id: uuid(),
                task,
                description
            }
            // console.log(newTodo)
            todos.push(newTodo);
            console.log(todos);
            await writeData(todos);
            return "newtodo added successfully";
        } catch (error) {
            throw new Error("Unable to add a newTodo");
        }
    }

    static async getTodos() {
        try {
            let todos = await getData();
            return todos;
        } catch (error) {
            throw new Error("Unable to fetch all todos");
        }
    }

    static async getTodo(id) {
        // 
        try {
            let todos = await getData();
            todos = todos.filter(todo => todo.id == id);
            return todos[0];
        } catch (error) {
            throw new Error("Unable to fetch single todos");
        }
    }

    static async deleteTodo(id) {
        try {
            let todos = await getData();
            todos = todos.filter(todo => todo.id != id);
            await writeData(todos);
            return "Deleted todo successfully";
        } catch (error) {
            throw new Error("Unable to delete todo");
        }
    }
}

module.exports = Todos;