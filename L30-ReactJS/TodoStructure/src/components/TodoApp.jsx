import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";
import initialTodos from "../data/initialTodos";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  function increasePriority(id) {
    let indx = todos.findIndex((t) => t.id == id);
    if (indx > 0) {
      let newTodos = [...todos];
      [newTodos[indx - 1], newTodos[indx]] = [
        newTodos[indx],
        newTodos[indx - 1],
      ];
      setTodos(newTodos);
    }
  }

  function decreasePriority(id) {
    let indx = todos.findIndex((t) => t.id == id);
    if (indx < todos.length - 1) {
      let newTodos = [...todos];
      [newTodos[indx], newTodos[indx + 1]] = [
        newTodos[indx + 1],
        newTodos[indx],
      ];
      setTodos(newTodos);
    }
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  }

  function addTodo(task, description) {
    setTodos([...todos, { id: uuidv4(), task, description }]);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <Todos
        increasePriority={increasePriority}
        decreasePriority={decreasePriority}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default TodoApp;
