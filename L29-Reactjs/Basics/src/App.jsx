import React, { useRef, useState } from "react";

const App = () => {
  const inpref = useRef();
  const [inpData, setInpData] = useState("");

  function showInput() {
    // console.log(inpref.current.value);
    setInpData(inpref.current.value);
  }

  return (
    <div>
      <input ref={inpref} id="inp" type="text" placeholder="Enter Name" />

      <button onClick={showInput}>Show Input</button>
      <br></br>

      <div>{inpData}</div>
    </div>
  );
};

export default App;
