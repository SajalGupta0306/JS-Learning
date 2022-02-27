import React, { useState } from "react";
import DisplayTodoList from "./DisplayTodoList";

export default function CreateTodo() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const data = [...todoList];
    data.push({
      id: data.length,
      value: todoText,
      done: false,
    });
    setTodoList(data);
    setTodoText("");
  };

  const updateColor = (id) => {
    const data = [...todoList];
    data.forEach((val) => {
      if (val.id === id) {
        val.done = true;
      }
    });
    setTodoList(data);
  };

  const deleteTodoItem = (index) => {
    const data = [...todoList];
    data.splice(index, 1);
    setTodoList(data);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={todoText}
          placeholder="Enter your todo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <br />
        <br />
        {todoText !== "" ? (
          <button onClick={() => addTodo()}>Add a ToDo</button>
        ) : (
          <button disabled onClick={() => addTodo()}>
            Add a ToDo
          </button>
        )}
      </div>
      {todoList.map((val, index) => {
        return (
          <DisplayTodoList
            key={val.id}
            index={index}
            payload={val}
            updateColor={updateColor}
            deleteTodoItem={deleteTodoItem}
          ></DisplayTodoList>
        );
      })}
    </div>
  );
}
