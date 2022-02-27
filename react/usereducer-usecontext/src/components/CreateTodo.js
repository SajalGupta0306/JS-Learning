import React, { useContext } from "react";
import DisplayTodoList from "./DisplayTodoList";
import appContext from "../context/appContext";

export default function CreateTodo() {
  const { todoText, todoList, addTodo, changeButtonVisibility, buttonDisable } =
    useContext(appContext);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ width: "20%" }}
          type="text"
          value={todoText}
          placeholder="Enter your todo"
          onChange={(e) => changeButtonVisibility(e)}
        />
        <br />
        <br />
        <button disabled={buttonDisable} onClick={() => addTodo()}>
          Add a ToDo
        </button>
      </div>
      <br />
      <br />
      {todoList.map((val, index) => {
        return (
          <DisplayTodoList
            key={val.id}
            index={index}
            payload={val}
          ></DisplayTodoList>
        );
      })}
    </div>
  );
}
