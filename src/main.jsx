import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/experience.css";
import "./styles/education.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/certifications.css";
import "./styles/contact.css";
import "./styles/animations.css";
import "./styles/effects.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);