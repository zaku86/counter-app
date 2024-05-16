import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./style.css";

const rootEl = document.getElementById("root");
ReactDom.createRoot(rootEl).render(<App />);
