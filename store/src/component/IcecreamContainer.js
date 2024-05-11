import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/iceCreamAction";

function IcecreamContainer() {
  const numberOfIcecream = useSelector((state) => state.icecream.numberOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>ice cream section</h1>
      <h2>NUmber of Icecraeam - {numberOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Ice cream </button>
    </div>
  );
}

export default IcecreamContainer;
