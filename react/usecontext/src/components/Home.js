import React, { useContext } from "react";
import context from "../context/AppContext";

export default function Home() {
  const { flag, setFlag, message } = useContext(context);
  return (
    <div>
      <h1>
        You clicked on the <strong>Home</strong> Link
      </h1>
      <div>
        <h2 style={{ background: flag ? "yellow" : "pink" }}>{message}</h2>
        <button
          onClick={() => {
            setFlag(!flag);
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}
