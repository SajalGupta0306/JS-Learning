import { Provider } from "react-redux";
import "./App.css";
import Todo from "./components/todos/Todo";
import store from "./store/store";

// https://github.com/harblaith7/react-redux-crash-course  with a basic thunk setup

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo /> 
      </Provider>
    </>
  );
}

export default App;
