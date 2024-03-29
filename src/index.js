import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./variables.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.querySelector("body"));

serviceWorker.unregister();
