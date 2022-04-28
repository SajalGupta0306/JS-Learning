import { ADD_TODO, DELETE_TODO, MARK_DONE_TODO } from "./actions";

export const onAddTodo = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};

// for thunk based async code
// export const onAddTodo = (value) => {
//   return (dispatch) => {
//     dispatch({
//       type: ADD_TODO,
//       payload: value,
//     });
//   };
// };

export const onDeleteTodo = (value) => {
  return {
    type: DELETE_TODO,
    payload: value,
  };
};

export const onMarkTodo = (value) => {
  return {
    type: MARK_DONE_TODO,
    payload: value,
  };
};
