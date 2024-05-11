import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numberOfIcecream: 30
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream -1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
