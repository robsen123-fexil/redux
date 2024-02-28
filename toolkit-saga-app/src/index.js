import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga"; // Import createSagaMiddleware
import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songstate";
import songsaga from "./songsaga";

const sagaMiddleware = createSagaMiddleware(); // Create an instance of sagaMiddleware

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(songsaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
