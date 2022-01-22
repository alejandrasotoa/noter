import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <Router basename="/noter">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById("root")
);
