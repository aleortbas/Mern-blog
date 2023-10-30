import "./index.css";
import "./components/navbar/navbar.css";
import "./components/home/home.css";
import "./components/login/login.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const accessToken = localStorage.removeItem("accessToken");
console.log("TOKKKKEEEENN0 ", accessToken);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
