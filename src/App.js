import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FutureProjects from "./pages/FutureProjects";
import ResumeViewer from "./pages/ResumeViewer";

const logoUrl = `${process.env.PUBLIC_URL || ""}/logo.svg`;

function BrandAssets() {
  const location = useLocation();

  useEffect(() => {
    const upsertLink = (rel) => {
      let link = document.querySelector(`link[rel='${rel}']`);

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = logoUrl;
      link.type = "image/svg+xml";
    };

    upsertLink("icon");
    upsertLink("shortcut icon");
    upsertLink("apple-touch-icon");
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <BrandAssets />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/future-projects" element={<FutureProjects />} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
