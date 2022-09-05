import Header from "components/Header";
import Contact from "pages/Contact";
import Projects from "pages/Projects";
import SpecificProject from "pages/SpecificProject";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projeto=:id" element={<SpecificProject />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  </BrowserRouter>;
}
