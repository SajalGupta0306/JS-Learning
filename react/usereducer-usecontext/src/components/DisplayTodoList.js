import React, { useContext } from "react";
import appContext from "../context/appContext";

export default function DisplayTodoList({ payload, index }) {
  const styles = {
    marginLeft: "15px",
  };

  const { updateColor, deleteTodoItem } = useContext(appContext);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label
          style={{ width: "15rem", color: payload.done ? "green" : "black" }}
        >
          {payload.value}
        </label>
        <button onClick={() => updateColor(payload.id)} style={styles}>
          Mark as Done
        </button>
        <button onClick={() => deleteTodoItem(index)} style={styles}>
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
