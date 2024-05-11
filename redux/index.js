const redux = require("redux");
const createStore = redux.createStore; // Corrected typo

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buycake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "first ice_cream boxx",
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIcecream: 30,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer); // Corrected typo
console.log("initial state store", store.getState());
store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// unsubscribe() // Commented out since it's not defined in the code
