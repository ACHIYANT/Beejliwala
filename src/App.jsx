import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Why from "./components/Why";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Services" element={<Services />} />
          <Route path="WhyUs" element={<Why />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
