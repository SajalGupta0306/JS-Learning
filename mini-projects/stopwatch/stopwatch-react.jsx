import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    let interval = null;
    if (startTime) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 1000)).slice(-2)}</span>
      </h1>
      <div>
        <button
          onClick={() => {
            setStartTime(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setStartTime(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setTime(0);
            setStartTime(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
