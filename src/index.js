import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.js";
import "./Style/GridSystem/Grid.css";
import "./Style/MainStyle/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init();
