import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddTodo } from "../../actions/index";

export default function AddTodo() {

  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);

  const changeHandler = (e) => {
    if (e.target.value === "") {
      setTodo("");
      setButtonDisable(true);
    } else {
      setTodo(e.target.value);
      setButtonDisable(false);
    }
  };

  const newTodo = {
    id: Math.random(),
    text: todo,
    done: false,
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ width: "20%" }}
          type="text"
          value={todo}
          placeholder="Enter your todo"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        <button disabled={buttonDisable} onClick={() => dispatch(onAddTodo(newTodo))}>
          Add a ToDo
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
