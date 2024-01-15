import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
