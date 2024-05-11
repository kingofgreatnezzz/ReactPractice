// how to use a middle ware in redux.. 
//call in (line 5) , 13, 70 ... reduxlogger 

const redux = require("redux");
const reduxLogger = require('redux-logger')

const createStore = redux.createStore; // Corrected typo
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware()



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

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 10,
};

const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};


const IceCreamreducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIcecream: state.numOfIcecream - 1,
        };
      default:
        return state;
    }
  };
  
const RootReducer = combineReducers({
    cake: Cakereducer,
    icecream: IceCreamreducer
})
const store = createStore(RootReducer, applyMiddleware(logger)); // Corrected typo
console.log("initial state store", store.getState());
store.unsubscribe = store.subscribe(() => {});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// unsubscribe() // Commented out since it's not defined in the code
