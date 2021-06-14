import React from "react";
import ReactDOM from "react-dom";
import "./sass_styles/global.scss";
import "./sass_styles/typography.scss";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.render(<App />, document.getElementById("root"));
