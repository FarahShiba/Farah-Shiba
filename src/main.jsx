import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

//import glob styling
import "bootstrap/dist/css/bootstrap.min.css";

//css resets
import "./styles/resets.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
