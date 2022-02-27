import React, { useContext } from "react";
import context from "../context/AppContext";

export default function Feed() {
  const { flag, setFlag, message } = useContext(context);
  return (
    <div>
      <h1>
        You clicked on the <strong>Feeds</strong> Link
      </h1>
      <div>
        <h2 style={{ background: flag ? "beige" : "grey" }}>{message}</h2>
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
