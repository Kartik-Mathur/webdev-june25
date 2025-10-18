import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./redux/todosReducer.js";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
