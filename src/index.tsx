import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CalcContext from "./context/calcContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CalcContext>
      <App />
    </CalcContext>
  </React.StrictMode>
);
