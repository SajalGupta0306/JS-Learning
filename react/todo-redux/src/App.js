import { Provider } from "react-redux";
import "./App.css";
import Todo from "./components/todos/Todo";
import store from "./store/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Todo />
       ̰</Provider>
    </>
  );
}

export default App;
