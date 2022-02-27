import "./App.css";
import CreateTodo from "./components/CreateTodo";
import AppState from "./context/AppState";

function App() {
  return (
    <AppState>
      <CreateTodo />
    </AppState>
  );
}

export default App;
