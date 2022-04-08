//react
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./app.css";
import WebRouter from "./router";
import { FSModule } from "browserfs/dist/node/core/FS";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    fs: FSModule;
  }
}
// ReactDOM.render(
//   React.createElement(WellcomePage),
//   document.getElementById("editor")
// );
ReactDOM.render(
    React.createElement(WebRouter),
    document.getElementById("editor")
);

// BrowserFSStorage((e, fs) => {
//   if (e) {
//     throw e;
//   }
//   FocusStyleManager.onlyShowFocusOnTabs();
//
//   window.fs = fs;
//
//   ReactDOM.render(
//     React.createElement(WebRouter),
//     document.getElementById("editor")
//   );
//
//   serviceWorker.unregister();
// });
