import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import DarkVeil from "../components/DarkVeil";
import SplitText from "../components/SplitText";
import Folder from "../components/Folder";
// CircularGallery removed per request
import StaggeredMenu from "../components/StaggeredMenu";


const navItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  { label: "Future Projects", ariaLabel: "See future projects", link: "/future-projects" },
  { label: "Contact", ariaLabel: "Open contact page", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

function Projects() {
  const handleAnimationComplete = () => {
    // SplitText animation finished
  };

  // Circular galleries removed
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "visible",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "120px 20px 80px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <DarkVeil />
      </div>

      <BackHomeButton style={{ position: "fixed", bottom: 20, left: 20, zIndex: 999 }} />
      <StaggeredMenu
        items={navItems}
        socialItems={socialItems}
        position="right"
        displaySocials
        displayItemNumbering
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px",
          maxWidth: "900px",
          width: "100%",
          fontSize: "1.1rem",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "#ffffff", marginBottom: 2, fontSize: "3.2rem" }}
        >
          Projects
        </motion.h1>

        <div style={{ marginTop: 0 }}>
          <SplitText
            text="This is where most of my project are, I have 3 big projects which are my Kinetic sand table, the LED-Cube and lastly
            the smart magic mirror. Along with these projects I have done some small projects that I want to show case. Lastly I want 
            to include projects that I have done through out my classes I took during my 4 years of my undergrad. Each folder can be clicked to
            open and see more images or details about the project."
            className="text-2xl font-semibold text-center"
            delay={25}
            duration={0.6}
            fontSize="2.0rem"
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div
          style={{
            minHeight: "120px",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: "80px",
            flexWrap: "wrap",
            paddingTop: "4px",
          }}
        >
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.5}
              color="#f2c12fff"
              className="test"
              label="LED Cube"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.5}
              color="#e7913bff"
              className="test"
              label="Kinetic Sand Table"
              labelHref="https://github.com/jhonalej/Kinetic-sand-table.git"
              labelTarget="_blank"
              labelRel="noopener noreferrer"
              items={[
                <a key="sand-controls-link" href="https://github.com/jhonalej/Kinetic-sand-table.git" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/sand_table/controls.jpg')} alt="Sand table control layout" />
                </a>,
                <a key="sand-pattern-link" href="https://github.com/jhonalej/Kinetic-sand-table.git" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/sand_table/Lines_color.jpg')} alt="Colored sand pattern from the table" />
                </a>,
                <a key="sand-mechanics-link" href="https://github.com/jhonalej/Kinetic-sand-table.git" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/sand_table/mechanical_inside.jpg')} alt="Mechanical interior of sand table" />
                </a>,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.5}
              color="#ef7a1aff"
              className="test"
              label="Smart Magic Mirror"
              items={[]}
            />
          </div>
        </div>

        {/* Circular gallery removed */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ color: "#ffffff", marginTop: 1, marginBottom: 12, fontWeight: 700, fontSize: "1.4rem" }}
        >
          School Projects
        </motion.h2>

        <div
          style={{
            minHeight: "120px",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: "80px",
            flexWrap: "wrap",
            paddingTop: "4px",
          }}
        >
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.2}
              color="#8ad6ff"
              className="test"
              label="4-Wheel drive robot"
              labelHref="https://github.com/jhonalej/MAE-576-robot.git"
              labelTarget="_blank"
              labelRel="noopener noreferrer"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.2}
              color="#b6c0ff"
              className="test"
              label="Power Electronics"
              items={[
                <img
                  key="power1"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                  alt="Power board close-up"
                />,
                <img
                  key="power2"
                  src="https://images.unsplash.com/photo-1555696958-c5049c2c05f9?auto=format&fit=crop&w=600&q=80"
                  alt="PCB layout"
                />,
                <img
                  key="power3"
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                  alt="Lab instruments"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.2}
              color="#9fe7b6"
              className="test"
              label="ACV sensor"
              items={[
                <img
                  key="acv1"
                  src="https://images.unsplash.com/photo-1582719478242-48d48c8b31c8?auto=format&fit=crop&w=600&q=80"
                  alt="AC voltage sensor setup"
                />,
                <img
                  key="acv2"
                  src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?auto=format&fit=crop&w=600&q=80"
                  alt="Oscilloscope measuring sensor output"
                />,
                <img
                  key="acv3"
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
                  alt="Breadboard wiring for ACV sensor"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.2}
              color="#7cc7ff"
              className="test"
              label="Frogger (EE379)"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.2}
              color="#ffd27f"
              className="test"
              label="Servo Control (EE478)"
              items={[]}
            />
          </div>
        </div>

        {/* School circular gallery removed */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ color: "#ffffff", marginTop: 1, marginBottom: 12, fontWeight: 700, fontSize: "1.4rem" }}
        >
        Small Projects
        </motion.h2>

        <div
          style={{
            minHeight: "120px",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: "80px",
            flexWrap: "wrap",
            paddingTop: "4px",
          }}
        >
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#ffb3c8"
              className="test"
              label="Portfolio Site"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#c2b7ff"
              className="test"
              label="Automatic Blinds"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#ffcfa1"
              className="test"
              label="PCB Design"
              items={[]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#b6f3ff"
              className="test"
              label="Memory Game"
              items={[]}
            />
          </div>
        </div>

        {/* Small projects circular gallery removed */}
      </div>
    </div>
  );
}

export default Projects;
