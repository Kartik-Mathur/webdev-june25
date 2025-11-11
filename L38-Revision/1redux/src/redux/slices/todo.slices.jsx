import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todos: [
    { task: "Cricket", id: 2321234, completed: false },
    { task: "Sign", id: 2322334, completed: true },
    { task: "Dance", id: 232125, completed: true },
    { task: "Code", id: 232121, completed: false },
    { task: "Travel", id: 324324, completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        task: action.payload.task,
        id: new Date().getTime(),
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    getTodos: (state) => {
      return state.todos;
    },
    toggleTodo: (state, action) => {
      const { id, completed } = action.payload;
      let indx = state.todos.findIndex((e) => e.id === id);
      state.todos[indx].completed = completed;
    },
    updateTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, getTodos, toggleTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
