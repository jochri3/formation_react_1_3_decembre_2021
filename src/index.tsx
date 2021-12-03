import ReactDOM from "react-dom";
import React from "react";
import Router from "./router";
import store from "./state/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#root")
);
