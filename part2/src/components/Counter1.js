import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increament")}> incresss</button>
      <button onClick={() => dispatch("decrement")}> decress</button>
      <button onClick={() => dispatch("reset")}> reset</button>
    </div>
  );
}

export default Counter1;
