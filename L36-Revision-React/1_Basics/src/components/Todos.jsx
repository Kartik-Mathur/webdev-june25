import React, { useRef } from "react";
import { useTodos } from "../context/TodoProvider";

const Todos = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const { getTodos, createTodo, deleteTodo } = useTodos();
  let todos = getTodos();
    
  function addTodoHandler(){
    let name = nameRef.current.value;
    let description = descriptionRef.current.value;
    createTodo({description, name});
    nameRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div>
      <input ref={nameRef} type="text" placeholder="Enter Name" />
      <input ref={descriptionRef} type="text" placeholder="Enter description" />

      <button onClick={addTodoHandler}>Add Todo</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.name} - {t.description}
            <button onClick={()=>deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
