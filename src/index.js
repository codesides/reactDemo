import React from "react";
import ReactDom from "react-dom";
import App from "./app";

// function colock() {
//   const element = <h1>{new Date().toLocaleTimeString()}</h1>;
//   ReactDom.render(element, document.getElementById("root"));
// }
// setInterval(colock, 1000);

ReactDom.render(<App />, document.getElementById("root"));
