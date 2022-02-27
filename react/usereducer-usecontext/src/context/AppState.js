import React, { useState } from "react";
import Context from "./appContext";

export default function AppState(props) {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(true);

  const addTodo = () => {
    const data = [...todoList];
    data.push({
      id: data.length,
      value: todoText,
      done: false,
    });
    setTodoList(data);
    setTodoText("");
    setButtonDisable(true);
  };

  const changeButtonVisibility = (e) => {
    if (e.target.value === "") {
      setButtonDisable(true);
      setTodoText("");
    } else {
      setTodoText(e.target.value);
      setButtonDisable(false);
    }
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
    <Context.Provider
      value={{
        todoText,
        setTodoText,
        todoList,
        addTodo,
        updateColor,
        deleteTodoItem,
        changeButtonVisibility,
        buttonDisable,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
