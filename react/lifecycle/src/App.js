import "./App.css";
import { useState } from "react";
import DummyComp from "./DummyComp";

// Eg of lifecycle methods
// https://codesandbox.io/s/lifecycle-p9cequ?file=/src/App.js

function App() {
  console.log("App level");
  const [count, setCount] = useState(0);

  const clickBtn = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <label>{count}</label>
      <button onClick={() => clickBtn()}>App Click Here</button>
      <DummyComp />
    </div>
  );
}

export default App;
