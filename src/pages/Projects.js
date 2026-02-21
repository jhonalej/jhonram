import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";
import Folder from "../components/Folder";
import useViewportScale from "../components/useViewportScale";
// CircularGallery removed per request
import StaggeredMenu from "../components/StaggeredMenu";
import "./Projects.css";


const navItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  { label: "Future Projects", ariaLabel: "See future projects", link: "/future-projects" },
  { label: "Contact", ariaLabel: "Open contact page", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/jhonalej" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/jhon-ramirez2003" },
];

function Projects() {
  const { outerRef, contentRef, scale } = useViewportScale();
  const introText = [
    "This is where most of my project are, I have 3 big projects which are my Kinetic sand table, the LED-Cube and lastly",
    "the smart magic mirror. Along with these projects I have done some small projects that I want to show case. Lastly I want",
    "to include projects that I have done through out my classes I took during my 4 years of my undergrad. Each folder can be clicked to",
    "open and see more images or details about the project.",
  ].join(" ");

            
  return (
    <div
      ref={outerRef}
      className="projects-page"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        padding: "clamp(40px, 8vh, 80px) 20px clamp(20px, 5vh, 40px)",
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
        ref={contentRef}
        className="projects-content"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px",
          maxWidth: "1650px",
          width: "100%",
          fontSize: "1.1rem",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px, 2vh, 16px)",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "#61dafb", marginBottom: 2, fontSize: "clamp(2rem, 4vw, 2.6rem)" }}
        >
          Projects
        </motion.h1>

        <div style={{ marginTop: 0, maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
          <div style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)", textAlign: "center", position: "relative" }}>
            <p style={{ margin: 0, visibility: "hidden" }}>{introText}</p>
            <div style={{ position: "absolute", inset: 0 }}>
            <TextType
              text={introText}
              className="text-2xl font-semibold text-center"
              cursorCharacter="▎"
              variableSpeedEnabled
              speed={20}
            />
            </div>
          </div>
        </div>

        <div
          className="projects-sections"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            gap: "clamp(40px, 8vw, 96px)",
            flexWrap: "wrap",
            paddingTop: "12px",
          }}
        >
          <div
            className="projects-group"
            style={{
              flex: "1 1 360px",
              maxWidth: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(10px, 2vh, 16px)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              style={{ color: "#61dafb", marginTop: 1, marginBottom: 12, fontWeight: 700, fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
            >
              School Projects
            </motion.h2>
            <div
              className="projects-folder-grid"
              style={{
                minHeight: "120px",
                position: "relative",
                paddingTop: "4px",
              }}
            >
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.4}
                  color="#8ad6ff"
                  className="test"
                  label="4-Wheel Drive Robot"
                  items={[
                    <a key="mae-576-top-view-link" href="https://github.com/jhonalej/MAE-576-robot.git" target="_blank" rel="noopener noreferrer">
                      <img src={require('../images/MAE 576 robot/top View.jpeg')} alt="Top view of MAE 576 robot" />
                    </a>,
                    <a key="mae-576-top-view-wheels-link" href="https://github.com/jhonalej/MAE-576-robot.git" target="_blank" rel="noopener noreferrer">
                      <img src={require('../images/MAE 576 robot/top view with wheels.jpeg')} alt="MAE 576 robot with wheels attached" />
                    </a>,
                    <a key="mae-576-wheels-link" href="https://github.com/jhonalej/MAE-576-robot.git" target="_blank" rel="noopener noreferrer">
                      <img src={require('../images/MAE 576 robot/wheels_2jpeg.jpeg')} alt="Close-up of MAE 576 robot wheels" />
                    </a>,
                  ]}
                />
              </div>
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.4}
                  color="#b6c0ff"
                  className="test"
                  label="Power Electronics"
                  items={[]}
                />
              </div>
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.4}
                  color="#7cc7ff"
                  className="test"
                  label="Frogger (EE379)"
                  items={[]}
                />
              </div>
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.4}
                  color="#ffd27f"
                  className="test"
                  label="Servo Control (EE478)"
                  items={[]}
                />
              </div>
            </div>
          </div>

          <div
            className="projects-group"
            style={{
              flex: "1 1 360px",
              maxWidth: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(10px, 2vh, 16px)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              style={{ color: "#61dafb", marginTop: 1, marginBottom: 12, fontWeight: 700, fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
            >
              Major Independent Projects
            </motion.h2>
            <div
              className="projects-folder-grid"
              style={{
                minHeight: "120px",
                position: "relative",
                paddingTop: "4px",
              }}
            >
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.5}
                  color="#f2c12fff"
                  className="test"
                  label="LED Cube"
                  items={[
                    <a
                      key="led-cube-circuit-link"
                      href="https://github.com/jhonalej/LED_cube.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/LED_cube/new_circuit .jpeg')} alt="LED cube circuit layout" />
                    </a>,
                    <a
                      key="led-cube-side-view-link"
                      href="https://github.com/jhonalej/LED_cube.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/LED_cube/side view.jpeg')} alt="Side view of the LED cube" />
                    </a>,
                    <a
                      key="led-cube-assembled-link"
                      href="https://github.com/jhonalej/LED_cube.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/LED_cube/LED_CUBE.jpeg')} alt="Assembled LED cube" />
                    </a>,
                  ]}
                />
              </div>
              <div style={{ textDecoration: "none" }}>
                <Folder
                  size={1.5}
                  color="#e7913bff"
                  className="test"
                  label="Kinetic Sand Table"
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
                  items={[
                    <a
                      key="smart-mirror-default-link"
                      href="https://github.com/jhonalej/Smart_magic_mirror"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/Smart Mirror/Defualt page.png')} alt="Smart mirror default page layout" />
                    </a>,
                    <a
                      key="smart-mirror-ai-example-link"
                      href="https://github.com/jhonalej/Smart_magic_mirror"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/Smart Mirror/AI_example.png')} alt="Smart mirror AI demo interface" />
                    </a>,
                    <a
                      key="smart-mirror-ai-example-2-link"
                      href="https://github.com/jhonalej/Smart_magic_mirror"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={require('../images/Smart Mirror/AI_example_2.png')} alt="Smart mirror AI demo with custom response" />
                    </a>,
                  ]}
                />
              </div>
            </div>
          </div>

          <div
            className="projects-group"
            style={{
              flex: "1 1 360px",
              maxWidth: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(10px, 2vh, 16px)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              style={{ color: "#61dafb", marginTop: 1, marginBottom: 12, fontWeight: 700, fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
            >
              Minor Independent Projects
            </motion.h2>
            <div
              className="projects-folder-grid"
              style={{
                minHeight: "120px",
                position: "relative",
                paddingTop: "4px",
              }}
            >
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
                  color="#b6f3ff"
                  className="test"
                  label="Memory Game"
                  items={[]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
