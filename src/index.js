import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

const API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RenderAfterNavermapsLoaded
    clientId={API_KEY}
    error={<p>Maps Load Error</p>}
    loading={<p>Maps Loading</p>}
  >
    <App />
  </RenderAfterNavermapsLoaded>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
