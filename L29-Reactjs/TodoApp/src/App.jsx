import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const initialTodos = [
  { id: '1', task: "Buy groceries", description: "Milk, eggs, bread, and fruits" },
  { id: '2', task: "Clean the house", description: "Vacuum, dust, and mop all rooms" },
  { id: '3', task: "Finish project report", description: "Complete the final draft and send to manager" },
  { id: '4', task: "Call plumber", description: "Fix leaking kitchen sink" },
  { id: '5', task: "Read a book", description: "Finish reading 'Atomic Habits'" }
];


const App = () => {
  /*
  Todo App to add new task with description
  User can increase and decrease priority of tasks
  User can delete a task as well...
  */
  const [todos, setTodos] = useState(initialTodos);
  const taskRef = useRef();
  const descriptionRef = useRef();
  function taskHandler() {
    let taskName = taskRef.current.value;
    let description = descriptionRef.current.value;
    setTodos([...todos, { id: uuidv4(), task: taskName, description }]);
    taskRef.current.value = "";
    descriptionRef.current.value = "";
  }

  function increasePriority(id){
    let indx = todos.findIndex(t=> t.id == id);
    if(indx > 0){
      let newTodos = [...todos];
      [newTodos[indx-1], newTodos[indx]] = [newTodos[indx], newTodos[indx-1]];
      setTodos(newTodos)
    }
  }
  
  function decreasePriority(id){
    let indx = todos.findIndex(t=> t.id == id);
    if(indx < todos.length - 1){
      let newTodos = [...todos];
      [newTodos[indx], newTodos[indx+1]] = [newTodos[indx+1], newTodos[indx]];
      setTodos(newTodos)
    }
  }


  function deleteTodo(id){
    let newTodos = todos.filter(t => t.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <div className="todo-input">
        <input ref={taskRef} type="text" placeholder="Enter Task Name" />
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Enter Description"
        />
        <button onClick={taskHandler}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id}>
            {t.task} - {t.description}
            <button onClick={()=> increasePriority(t.id)}>Increase Priority</button>
            <button onClick={()=> decreasePriority(t.id)}>Decrease Priority</button>
            <button onClick={()=> deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
