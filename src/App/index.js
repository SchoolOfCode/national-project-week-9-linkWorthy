import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/index.js";
import Content from "../Content/index.js";

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}

export default App;
