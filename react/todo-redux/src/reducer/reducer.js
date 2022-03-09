import { ADD_TODO, DELETE_TODO, MARK_DONE_TODO } from "../actions/actions";

const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case MARK_DONE_TODO:
      return {
        todo: state.todo.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
