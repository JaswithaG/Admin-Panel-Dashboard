import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/theme.css";

import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";

/* -----------------------------
   Load Saved Theme
------------------------------*/

const savedTheme =
  localStorage.getItem("theme") || "light";

if (savedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

/* -----------------------------
   Load Saved Primary Color
------------------------------*/

const savedColor =
  localStorage.getItem("primaryColor") ||
  "#2563eb";

document.documentElement.style.setProperty(
  "--primary-color",
  savedColor
);

/* -----------------------------
   Load Saved Font Size
------------------------------*/

const savedFont =
  localStorage.getItem("fontSize") ||
  "Medium";

let appFont = "16px";

switch (savedFont) {
  case "Small":
    appFont = "14px";
    break;

  case "Medium":
    appFont = "16px";
    break;

  case "Large":
    appFont = "18px";
    break;

  default:
    appFont = "16px";
}

document.documentElement.style.setProperty(
  "--app-font-size",
  appFont
);

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);