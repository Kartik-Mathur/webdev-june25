import React from "react";
import TodoProvider from "./context/TodoProvider";
import Todos from "./components/Todos";

const App = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
};

export default App;

// import { createContext } from "react";
// import Parent from "./components/Parent";

// const nameContext = createContext();

// const App = () => {
//   let name = "ABC";
//   let data = 11111;
//   return (
//     <div>
//       <nameContext.Provider value={name}>
//         <Parent data={data} />
//       </nameContext.Provider>
//     </div>
//   );
// };

// export default App;
// export {nameContext};
