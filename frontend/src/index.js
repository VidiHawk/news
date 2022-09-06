import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Terms from "./pages/terms";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
