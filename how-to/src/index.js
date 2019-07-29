import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
