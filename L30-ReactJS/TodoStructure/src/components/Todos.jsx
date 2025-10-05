import React from "react";

const Todos = ({ todos, increasePriority, decreasePriority, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <li key={t.id}>
          {t.task} - {t.description}
          <button onClick={() => increasePriority(t.id)}>
            Increase Priority
          </button>
          <button onClick={() => decreasePriority(t.id)}>
            Decrease Priority
          </button>
          <button onClick={() => deleteTodo(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
