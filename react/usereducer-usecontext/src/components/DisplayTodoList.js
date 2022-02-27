import React from "react";

export default function DisplayTodoList({
  payload,
  updateColor,
  deleteTodoItem,
  index,
}) {
  const styles = {
    marginLeft: "15px",
  };

  return (
    <>
      <div>
        {/* <span style={{ color: donePressed ? "green" : "red" }}>{payload.value}</span> */}
        <label style={{ color: payload.done ? "green" : "black" }}>
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
