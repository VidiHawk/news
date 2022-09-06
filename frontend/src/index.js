import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/terms";
import Terms from "./pages/terms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Homepage} />
        <Route path="/terms" component={Terms} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
