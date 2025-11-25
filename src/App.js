import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FutureProjects from "./pages/FutureProjects";
import ProjectLedCube from "./pages/ProjectLedCube";
import ProjectKineticSandTable from "./pages/ProjectKineticSandTable";
import ProjectSmartMagicMirror from "./pages/ProjectSmartMagicMirror";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/future-projects" element={<FutureProjects />} />
        <Route path="/projects/led-cube" element={<ProjectLedCube />} />
        <Route path="/projects/kinetic-sand-table" element={<ProjectKineticSandTable />} />
        <Route path="/projects/smart-magic-mirror" element={<ProjectSmartMagicMirror />} />
      </Routes>
    </Router>
  );
}

export default App;
