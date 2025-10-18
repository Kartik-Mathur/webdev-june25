import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "./redux/todosReducer";

const App = () => {
  let url = "https://jsonplaceholder.typicode.com/todos";
  const { todos } = useSelector((state) => state.todos);
  const [todosFetched, setTodosFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      
      dispatch(
        setTodos({
          data,
        })
      );

      setTodosFetched(true);
    });
  }, []);

  return (
    <div>
      MY Todo App
      {!todosFetched ? (
        <div>Loading....</div>
      ) : (
        <div>
          {todos.map((t) => {
            return (
              <li key={t.id}>
                Name: {t.title}
                <br />
                {t.completed ? (
                  <span>Completed</span>
                ) : (
                  <span>Un-Completed</span>
                )}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
