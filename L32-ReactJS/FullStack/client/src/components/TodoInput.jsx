import React from "react";
import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const taskRef = useRef();
  const descriptionRef = useRef();
  const addTodoHelper = () => {
    const task = taskRef.current.value;
    const description = descriptionRef.current.value;

    addTodo(task, description);
  };

  return (
    <div>
      <input ref={taskRef} type="text" placeholder="Enter Task" name="task" />
      <input
        ref={descriptionRef}
        type="text"
        placeholder="Enter Description"
        name="description"
      />

      <button onClick={addTodoHelper}>Add Task</button>
    </div>
  );
};

export default TodoInput;
