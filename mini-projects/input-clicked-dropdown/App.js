import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const testRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!testRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main">
      <input
        id="myInput"
        ref={testRef}
        onMouseDown={() => setVisible(!visible)}
        className="input"
      />
      {visible && (
        <div id="liDiv" className="div">
          <ul id="ullist" className="ul">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
          </ul>
        </div>
      )}
    </div>
  );
}
