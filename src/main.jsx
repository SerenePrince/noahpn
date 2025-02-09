import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="m-auto flex h-screen max-h-screen max-w-[1980px] items-center justify-center">
      <App />
    </div>
  </StrictMode>,
);
