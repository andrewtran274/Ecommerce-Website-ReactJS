import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShopContextPrivider } from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextPrivider>
      <App />
    </ShopContextPrivider>
  </React.StrictMode>
);
