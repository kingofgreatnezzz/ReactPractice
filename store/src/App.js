import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IcecreamContainer from "./component/IcecreamContainer";

function App() {
  return (
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer/>
        <IcecreamContainer/>
      </Provider>
  
  );
}

export default App;
