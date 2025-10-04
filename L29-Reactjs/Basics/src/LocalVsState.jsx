import React, { useState } from "react";

const App = () => {
  // const [variable, setterFunction] = useState(initialValue);
  let x = 1; // local variable
  x++;

  console.log("Running App component");
  const [cnt, setCnt] = useState(1);

  // let cnt = 1;
  function countHandler() {
    // cnt++;
    console.log("X", x);
    // setCnt(cnt+1);
    // setCnt((prev) => {
    //   return prev + 1;
    // });
    setCnt((prev) => prev + 1);
    console.log("Counter ", cnt);
  }

  return (
    <div>
      Count: {cnt}
      <button onClick={countHandler}>Update Count</button>
      {/* <button onClick={countHandler()}>Update Count</button> */}
      {/* <button onClick={() => countHandler()}>Update Count</button> */}
    </div>
  );
};

export default App;
