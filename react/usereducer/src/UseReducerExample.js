import React, { useReducer, useState } from "react";

export default function UseReducerExample() {
  const [input, setInput] = useState(0);
  
  const initialValue = {
    count: 20,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          count: state.count + 1,
        };
      case "SUB":
        return {
          ...state,
          count: state.count - 1,
        };
      case "INIT":
        return {
          ...state,
          count: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <div>
        <label>Use Reducer Example</label>
      </div>
      <br />
      <div>
        <div>
          <label>Enter a number</label>
          <input
            type="number"
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
        </div>
        <button onClick={() => dispatch({ type: "INIT", payload: input })}>
          Initialize
        </button>
      </div>
      <br />
      <div>{state.count}</div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>Increment</button>
        <button onClick={() => dispatch({ type: "SUB" })}>Decrement</button>
      </div>
    </div>
  );
}
