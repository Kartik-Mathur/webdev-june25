import React from "react";
import { decrement, increment } from "../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      Counter: {counter}
      <button onClick={() => dispatch(increment())}>increment Counter</button>
      <button onClick={() => dispatch(decrement())}>decrement Counter</button>
    </div>
  );
};

export default Counter;
