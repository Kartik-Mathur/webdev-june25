import React, { useContext } from "react";
import { nameContext } from "../App";

const Child = ({ data }) => {
  const name = useContext(nameContext);

  return (
    <div>
      I am child: {data} - Context : {name}
    </div>
  );
};

export default Child;
