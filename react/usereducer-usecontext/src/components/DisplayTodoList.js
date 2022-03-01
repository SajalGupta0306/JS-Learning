import React from "react";

export default function DisplayTodoList({
  text,
  clickToDelete,
  markDone,
  clickToToggle,
}) {
  const styles = {
    marginLeft: "15px",
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label style={{ color: markDone ? "green" : "red", width: "15rem" }}>
          <strong> {text}</strong>
        </label>
        <button onClick={clickToToggle} style={styles}>
          Mark as Done
        </button>
        <button onClick={clickToDelete} style={styles}>
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
