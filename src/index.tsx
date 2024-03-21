import React from "react";
import ReactDOM from "react-dom/client";
// Make sure to import this first so your styles take priority!
import "tachyons/css/tachyons.min.css";
// All your styles go here!
import "src/css/style.css";
import "src/css/media.css";
import App from "src/App";
import Maintenance from "src/pages/Maintenance";

// Set to true to enable maintenance mode in production
const MAINTENANCE_MODE = false;
const mainComponent =
  MAINTENANCE_MODE && process.env.NODE_ENV === "production" ? (
    <Maintenance />
  ) : (
    <App />
  );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>{mainComponent}</React.StrictMode>);
