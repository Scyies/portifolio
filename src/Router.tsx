import Header from "components/Header";
import Projects from "pages/Projects";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
    </Routes>
  </BrowserRouter>;
}
