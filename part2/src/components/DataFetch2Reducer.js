import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case "FAIL":
      return {
        loading: false,
        post: {},
        error: "something went wrong !!!!", // Fixed typo here
      };
    default:
      return state;
  }
};

function DataFetch2Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // Fixed action type here
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "FAIL" }); // Fixed action type here
      });
  }, []);

  console.log(state);
  
  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetch2Reducer;
