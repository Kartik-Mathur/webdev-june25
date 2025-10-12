import React from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";
import { useState } from "react";
import { useEffect } from "react";
import { getTodos } from "../apis/getTodos";
import { addNewTodo } from "../apis/addNewTodo";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function addTodo(task, description) {
    try {
        console.log(task, description)
      let data = await addNewTodo(task, description);
      setTodos(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  );
};

export default TodoApp;
