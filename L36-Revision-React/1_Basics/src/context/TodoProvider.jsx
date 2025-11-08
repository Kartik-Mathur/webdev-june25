import React, { createContext, useContext, useState } from "react";

const todoContext = createContext({
  createTodo: function () {},
  deleteTodo: function () {},
  getTodos() {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    return todos;
  }

  function createTodo({ name, description }) {
    if (name.trim().length == 0 || description.trim().length == 0) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { name, description, id: new Date().getTime() },
    ]);
    
    console.log(todos);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  }

  return (
    <todoContext.Provider
      value={{
        getTodos,
        createTodo,
        deleteTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;

export function useTodos() {
  return useContext(todoContext);
}
