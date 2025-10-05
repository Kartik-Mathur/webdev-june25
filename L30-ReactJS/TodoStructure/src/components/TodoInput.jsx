import React, { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const taskRef = useRef();
  const descriptionRef = useRef();
  function taskHandler() {
    let taskName = taskRef.current.value;
    let description = descriptionRef.current.value;
    
    addTodo(taskName, description);

    taskRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div className="todo-input">
      <input ref={taskRef} type="text" placeholder="Enter Task Name" />
      <input ref={descriptionRef} type="text" placeholder="Enter Description" />
      <button onClick={taskHandler}>Add</button>
    </div>
  );
};

export default TodoInput;
