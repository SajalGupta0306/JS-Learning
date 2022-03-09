import React from "react";
import { useDispatch } from "react-redux";
import { onDeleteTodo, onMarkTodo } from "../../actions/index";

export default function TodoItem({ id, markDone, text }) {
  const dispatch = useDispatch();
  const styles = {
    marginLeft: "15px",
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label style={{ color: markDone ? "green" : "red", width: "15rem" }}>
          <strong> {text}</strong>
        </label>
        <button onClick={() => dispatch(onMarkTodo(id))} style={styles}>
          Mark as Done
        </button>
        <i
          onClick={() => dispatch(onDeleteTodo(id))}
          style={styles}
          className="fa-solid fa-trash"
        ></i>
      </div>
      <br />
    </>
  );
}
