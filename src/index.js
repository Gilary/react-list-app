import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
