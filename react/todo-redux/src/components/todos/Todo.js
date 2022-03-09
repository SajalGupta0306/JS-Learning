import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      <AddTodo />
      {todos.map((t) => {
        return (
          <TodoItem
            key={t.id}
            id={t.id}
            text={t.text}
            markDone={t.done}
          ></TodoItem>
        );
      })}
    </div>
  );
}
