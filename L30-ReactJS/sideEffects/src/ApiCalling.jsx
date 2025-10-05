import React, { useEffect, useState } from "react";

const App = () => {
  const [cnt, setCnt] = useState(1);
  const [cnt2, setCnt2] = useState(1);

  console.log("Running APp");
  useEffect(() => {
    console.log("Running function at the end");

    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
      });
  }, [cnt]);

  return (
    <div>
      Counter: {cnt}
      <button onClick={() => setCnt(cnt + 1)}>Update</button>
      Counter: {cnt2}
      <button onClick={() => setCnt2(cnt2 + 1)}>Update CCnt2</button>
    </div>
  );
};

export default App;
