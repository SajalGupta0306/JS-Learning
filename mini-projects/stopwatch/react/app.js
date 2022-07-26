import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    let test = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setTimer(test);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    setCount(0);
  };

  return (
    <>
      <div className="App">
        <button onClick={() => startTimer()}>Start / Resume</button>
        <button onClick={() => stopTimer()}>Stop</button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
      <br />
      <div className="App">{count}</div>
    </>
  );
}
