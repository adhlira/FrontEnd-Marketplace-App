import ReactDOM from "react-dom/client";
import React from "react";
import AppRoutes from "./routes/app_routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
