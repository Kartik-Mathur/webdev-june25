import React, { createContext } from "react";
import Parent from "./components/Parent";
/*
1. Create Context
2. Provider
3. Consumer or useContext Hook
*/
// Create a Context
const context = createContext({
  x: "",
});

const todosContext = createContext({
  todos: [],
});

const App = () => {
  let data = {
    x: 1,
  };
  let todosData = ["Cricket", "Sing", "Dance"];

  return (
    <context.Provider value={data}>
      <todosContext.Provider value={todosData}>
        <Parent />
      </todosContext.Provider>
    </context.Provider>
  );
};

export default App;
export { context, todosContext };
