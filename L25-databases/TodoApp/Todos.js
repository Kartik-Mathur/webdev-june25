const path = require('path');
const todos = require('./models/todos');

class Todos {
    static async addTodo(task, description) {
        try {
            let newTodo = {
                task,
                description
            }
            await todos.create(newTodo);
            return "newtodo added successfully";
        } catch (error) {
            throw new Error("Unable to add a newTodo");
        }
    }

    static async getTodos() {
        // console.log(todos);
        try {
            let data = await todos.find({});
            return data;
        } catch (error) {
            throw new Error("Unable to fetch all todos");
        }
    }

    static async getTodo(id) {
        // 
        try {
            let todo = await todos.findOne({
                _id: id
            });
            return todo;
        } catch (error) {
            throw new Error("Unable to fetch single todos");
        }
    }

    static async deleteTodo(id) {
        try {
            let todos = await todos.deleteOne({
                _id: id
            });
            return "Deleted todo successfully";
        } catch (error) {
            throw new Error("Unable to delete todo");
        }
    }
}

module.exports = Todos;