import React from "react";
import ReactDOM from "react-dom";

import App from "./container/App";

import { Provider } from "react-redux";
import { ConfiguredStore } from "./configureStore";

const Store = ConfiguredStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
