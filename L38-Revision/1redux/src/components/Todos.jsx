import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/slices/todo.slices";

export default function Todos() {
  const [task, setTask] = useState("");
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  function addTodoHandler() {
    if (!task.trim()) return;
    dispatch(addTodo({ task }));
    setTask("");
  }

  function todoToggleHandler(e, id) {
    dispatch(
      toggleTodo({
        completed: e.target.checked,
        id,
      })
    );
  }

  return (
    <div>
      <div className="todoInput">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter Task Name"
        />
        <button onClick={addTodoHandler}>Add Task</button>
      </div>

      <div className="filterTasks">
        <button className="All Tasks">All Tasks</button>
        <button className="completedTasks">Completed</button>
        <button className="pendingTasks">Pending</button>
      </div>

      <ul className="todoList">
        {todos.map((t) => (
          <li key={t.id}>
            <input
              onClick={(e) => todoToggleHandler(e, t.id)}
              type="checkbox"
              id={t.id}
            />
            <label htmlFor={t.id}>
              {t.completed ? (
                <span style={{ textDecoration: "line-through" }}>{t.task}</span>
              ) : (
                <span>{t.task}</span>
              )}
            </label>

            <button onClick={() => dispatch(deleteTodo(t.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
