import React, { memo, useState } from "react";

const MemoChild1 = memo(function Child1({ dukaan }) {
  console.log("Running Child1");
  return <div>I am child1</div>;
});

const MemoChild2 = memo(function Child2({ study }) {
  console.log("Running Child2");
  return (
    <div>
      I am Child2
      <Gc />
    </div>
  );
});

function Gc() {
  console.log("Running GC");
  return <div>I am GC</div>;
}

function Parent() {
  const [dukan, setDukan] = useState(1);
  const [study, setStudy] = useState(1);

  console.log("Running Parent");

  return (
    <div>
      <button onClick={() => setDukan(dukan + 1)}>Updatee Dukan</button>
      <button onClick={() => setStudy(study + 1)}>Updatee Study</button>
      <MemoChild1 dukaan={dukan} />
      <MemoChild2 study={study} />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
