import React, { useContext, useState } from "react";
import DisplayTodoList from "./DisplayTodoList";
import appContext from "../context/appContext";

export default function CreateTodo() {
  const [todo, setTodo] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);

  const { todos, addNewTodo, toggleTodo, deleteTodo } = useContext(appContext);

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      text: todo,
      done: false,
    };
    addNewTodo(newTodo);
    setTodo("");
    setButtonDisable(true);
  };

  const changeHandler = (e) => {
    if (e.target.value === "") {
      setTodo("");
      setButtonDisable(true);
    } else {
      setTodo(e.target.value);
      setButtonDisable(false);
    }
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
        <button disabled={buttonDisable} onClick={() => addTodo()}>
          Add a ToDo
        </button>
      </div>
      <br />
      <br />
      {todos.map((t) => {
        return (
          <DisplayTodoList
            key={t.id}
            text={t.text}
            markDone={t.done}
            clickToToggle={() => toggleTodo(t.id)}
            clickToDelete={() => deleteTodo(t.id)}
          ></DisplayTodoList>
        );
      })}
    </div>
  );
}
