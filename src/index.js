import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movies from "./components/Movies";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
