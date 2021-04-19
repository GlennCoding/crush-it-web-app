import React from "react";
import ReactDOM from "react-dom";
import "./sassStyles/global.scss";
import "./sassStyles/typography.scss";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://api-crush-it.herokuapp.com";
ReactDOM.render(<App />, document.getElementById("root"));
