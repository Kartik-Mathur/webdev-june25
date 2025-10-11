import React, { memo, useCallback, useMemo, useState } from "react";

const App = () => {
  const hello = useCallback(function () {
    console.log("Hello");
  }, []);

  const [cnt, setCnt] = useState(1);
  const [n, setN] = useState(20);

  // Factorial
  const ans = useMemo(() => {
    console.log("Calculating Factorial Again");
    let ans = 1;
    for (let i = 1; i <= 20; i++) {
      ans *= i;
    }
    return ans;
  }, [n]);

  return (
    <div>
      <MemoChild1 hello={hello} />
      <MemoChild2 cnt={cnt} />
      Factorial : {ans}
      <br />
      <button onClick={() => setCnt(cnt + 1)}>Update Cnt</button>
      <button onClick={() => setN(10)}>Factorial of 10</button>
      <button onClick={() => setN(20)}>Factorial of 20</button>
    </div>
  );
};

const MemoChild1 = memo(function Child1({ hello }) {
  console.log("Running Child1 with hello function");
  return <div>I am Child1</div>;
});

const MemoChild2 = memo(function Child2({ cnt }) {
  console.log("Running Child2 to show counter value");
  return <div>I am Child2 : {cnt}</div>;
});

export default App;
