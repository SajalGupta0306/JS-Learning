// import React, { useState, useEffect } from "react";

// export default function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [startTime, setStartTime] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (startTime) {
//       interval = setInterval(() => {
//         setTime((prev) => prev + 10);
//       }, 10);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [startTime]);

//   return (
//     <div className="App">
//       <h1>Stopwatch</h1>
//       <h1>
//         <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//         <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//         <span>{("0" + Math.floor((time / 10) % 1000)).slice(-2)}</span>
//       </h1>
//       <div>
//         <button
//           onClick={() => {
//             setStartTime(true);
//           }}
//         >
//           Start
//         </button>
//         <button
//           onClick={() => {
//             setStartTime(false);
//           }}
//         >
//           Stop
//         </button>
//         <button
//           onClick={() => {
//             setTime(0);
//             setStartTime(false);
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

import { useReducer, useEffect, useRef } from "react";

const initialState = {
  isRunning: false,
  time: 0,
};

export default function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="stopwatch">
      {state.time}s
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}
