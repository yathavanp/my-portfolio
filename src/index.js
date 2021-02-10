import React from "react";
import { Helmet } from "react-helmet";
import favicon from "./favicon-v1/favicon.ico";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{"Yathavan Pushpanahthan"}</title>
      <meta name="description" content={"Yathavan Pushpanathan"} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
