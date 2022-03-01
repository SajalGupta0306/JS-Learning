import React, { useReducer } from "react";
import Context from "./appContext";
import todoReducer from "./todo-reducer";
import { ADD_TODO, DELETE_TODO, MARK_DONE } from "./todoActions";

export default function AppState(props) {
  const initialState = {
    todo: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addNewTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: MARK_DONE,
      payload: id,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        todos: state.todo,
        addNewTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
