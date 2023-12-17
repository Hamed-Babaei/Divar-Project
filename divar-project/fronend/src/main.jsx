import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/reset.css";
import "./Styles/default.css";
import "./Styles/variables.css";
import "./Styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
