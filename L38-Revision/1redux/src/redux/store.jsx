import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo.slices";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
