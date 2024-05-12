import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numberOfcakes: 20
};


const cakeReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Copy the current state
        numberOfcakes: state.numberOfcakes - action.payload}
    default:
      return state
  }
};

export default cakeReducer;
