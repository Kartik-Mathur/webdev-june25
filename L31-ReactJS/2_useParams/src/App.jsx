import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import initialTodos from "./initialTodos.jsx";
import { Routes, Route, useNavigate, useParams } from "react-router";
const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const navigate = useNavigate();
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <Fragment key={todo.id}>
              <button
                style={{
                  display: "inline-block",
                  margin: "10px 10px",
                }}
                onClick={() => navigate(`/games/${todo.id}`)}
              >
                {todo.name}
              </button>
            </Fragment>
          );
        })}
      </ul>

      <Routes>
        <Route path="/games/:id" element={<Games todos={todos} />} />
      </Routes>
    </div>
  );
};

function Games({todos}) {
  const param = useParams();
  const id = param.id;
  // console.log(id);
  let todo = todos.filter((t) => t.id == id);
  if (todo.length > 0) todo = todo[0];

  return (
    <>
      {todo.length == 0 ? (
        <div>No Data Found</div>
      ) : (
        <div className="todo-item">
          <h3>{todo.name}</h3>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
          </p>
          <p>
            <strong>Priority:</strong> {todo.priority}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
