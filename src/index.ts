//react
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./app.css";
import WebRouter from "./router";
import {FSModule} from "browserfs/dist/node/core/FS";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        fs: FSModule;
    }
}

ReactDOM.render(
    React.createElement(WebRouter),
    document.getElementById("editor")
);
