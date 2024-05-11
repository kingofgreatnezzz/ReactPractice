import React from "react";
import "./App.css";
//import DataFetch1 from "./components/DataFetch1";
//import DataFetch2Reducer from "./components/DataFetch2Reducer";
import FocusINput from "./components/FocusINput";
//import CompoA from "./components/comp2/CompoA";
//import CompoB from "./components/comp2/CompoB";
//import CompoC from "./components/comp2/CompoC";
//import Counter2 from "./components/Counter2";
//import ConterReducerMutiple from "./components/ConterReducerMutiple";
//import ComponentC from "./components/comp/ComponentC";
//import Counter1 from "./components/Counter1";
//import DataFetching from "./components/DataFetching";
//import InterveralHookCOunter from "./components/InterveralHookCOunter";
//import HookMouse from "./components/HookMouse";
//import HookCounter4 from './components/HookCounter4';
//import Hookereffect from "./components/Hookereffect";
//import ClickCounter from './components/ClickCounter';
//import HookCounter3 from './components/HookCounter3';
//import PostForm from './components/PostForm';
//import PostList from './components/PostList';

//export const UserContext = React.createContext();
//export const UserChannel = React.createContext();

//export const countCOntext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  //const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
    <FocusINput/>
    {/* <PostList/> 
    <DataFetch2Reducer />
    <ConterReducerMutiple/>
    <div>
      <countCOntext.Provider value={{ count, dispatch }}>
        <CompoA />
        <CompoB />
        <CompoC />
      </countCOntext.Provider>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch("increament")}> incresss</button>
        <button onClick={() => dispatch("decrement")}> decress</button>
        <button onClick={() => dispatch("reset")}> reset</button>
      </div>
    </div>
      <Counter2/>
      <Counter1/>
      <UserContext.Provider value={"Hot Boii"}>
        <UserChannel.Provider value={"my youtube channell"}>
          <ComponentC />
        </UserChannel.Provider>
      </UserContext.Provider>
    <DataFetching/>
    <HookMouse/>
    <Hookereffect />
    <HookCounter4/>
    <HookCounter3/>
    <ClickCounter/>  
    <PostForm/>
    */}
    </div>
  );
}

export default App;
