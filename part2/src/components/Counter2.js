import React, { useReducer } from "react";

const initialState = {
    firsCounter:0,
    secondCounter:10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return {...state, firsCounter: state.firsCounter + action.value}
    case "decrement":
      return {...state, firsCounter: state.firsCounter - action.value}
    case "increament2":
      return {...state, secondCounter: state.secondCounter + action.value}
    case "decrement2":
      return {...state, secondCounter: state.secondCounter - action.value}

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firsCounter}</div>
      <div>COunt2 - {count.secondCounter}</div>
      <button onClick={() => dispatch({type:"increament", value:1})}> incresss</button>
      <button onClick={() => dispatch({type:"decrement", value:1})}> decress</button>
      <button onClick={() => dispatch({type:"increament", value:5})}> increament 5</button>
      <button onClick={() => dispatch({type:"decrement", value:5})}> decrement 5</button>
      <button onClick={() => dispatch({type:"reset"})}> reset</button><br/>
      <button onClick={() => dispatch({type:"increament2", value:1})}> incresss2</button>
      <button onClick={() => dispatch({type:"decrement2", value:1})}> decress2</button>
    </div>
  );
}

export default Counter2;
