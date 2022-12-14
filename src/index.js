import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducer from "./store/reducer";

import "./index.css";

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
