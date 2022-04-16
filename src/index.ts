import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./app.css";
import InitComponent from "./initialComponent";
import {FSModule} from "browserfs/dist/node/core/FS";

declare global {
    interface Window {
        fs: FSModule;
    }
}

ReactDOM.render(
    React.createElement(InitComponent),
    document.getElementById("editor")
);
