import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import Waves from "../components/Waves";
import SplitText from "../components/SplitText";
import Folder from "../components/Folder";
import CircularGallery from "../components/CircularGallery";
import StaggeredMenu from "../components/StaggeredMenu";
import sandControls from "../images/sand_table/controls.jpg";
import sandLines from "../images/sand_table/Lines_color.jpg";
import sandChristmas from "../images/sand_table/christmas_lines.jpg";
import sandInside from "../images/sand_table/mechanical_inside.jpg";

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

  const galleryItems = [
    { image: sandLines, text: "Sand Table Patterns" },
    { image: sandChristmas, text: "Sand Table Christmas Pattern" },
    { image: sandControls, text: "Sand Table Controls" },
    { image: "/profile.jpg", text: "Profile" },
    {
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
      text: "Electronics Bench",
    },
    {
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
      text: "Code on Screen",
    },
  ];

  const schoolGalleryItems = [
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      text: "Lab Bench",
    },
    {
      image: "https://images.unsplash.com/photo-1523966211575-eb4a017e3b76?auto=format&fit=crop&w=900&q=80",
      text: "Team Build",
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      text: "Code Review",
    },
    {
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      text: "Workshop",
    },
  ];

  const smallGalleryItems = [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      text: "Prototype",
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      text: "UI Sketch",
    },
    {
      image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      text: "LED Controller",
    },
    {
      image: "https://images.unsplash.com/photo-1555696958-c5049c2c05f9?auto=format&fit=crop&w=900&q=80",
      text: "PCB Layout",
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "120px 20px 80px",
      }}
    >
      <Waves
        lineColor="rgba(97,218,251,0.35)"
        backgroundColor="rgba(5,8,16,0.9)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.93}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        style={{ zIndex: 0 }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(140% 120% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      />

      <BackHomeButton style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }} />
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
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "#61dafb", marginBottom: 4 }}
        >
          Projects
        </motion.h1>

        <div style={{ marginTop: 0 }}>
          <SplitText
            text="This is where most of my project are, I have 3 big projects which are my Kinetic sand table, the LED-Cube and lastly
            the smart magic mirror. along with these projects I have done some small projects that I want to show case. lastly I want 
            to include projects that I have done through the classes I took during my 4 years of my undergrad."
            className="text-2xl font-semibold text-center"
            delay={25}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div
          style={{
            height: "150px",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: "140px",
            flexWrap: "wrap",
            paddingTop: "5px",
          }}
        >
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.5}
              color="#f2c12fff"
              className="test"
              label="LED Cube"
              items={[
                <img
                  key="led1"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="LED cube prototype"
                />,
                <img
                  key="led2"
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80"
                  alt="Soldering LED matrix"
                />,
                <img
                  key="led3"
                  src="https://images.unsplash.com/photo-1555696958-c5049c2c05f9?auto=format&fit=crop&w=600&q=80"
                  alt="PCB layout"
                />,
              ]}
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
                <img
                  key="sand-controls"
                  src={sandControls}
                  alt="Sand table control layout"
                />,
                <img
                  key="sand-pattern"
                  src={sandLines}
                  alt="Colored sand pattern from the table"
                />,
                <img
                  key="sand-mechanics"
                  src={sandInside}
                  alt="Mechanical interior of sand table"
                />,
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
                <img
                  key="mirror1"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="UI sketch"
                />,
                <img
                  key="mirror2"
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80"
                  alt="Code on screen"
                />,
                <img
                  key="mirror3"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                  alt="Electronics bench"
                />,
              ]}
            />
          </div>
        </div>

        <div style={{ height: "320px", position: "relative", marginTop: "-10px", marginBottom: "4px" }}>
          <CircularGallery
            items={galleryItems}
            bend={-1.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ color: "#9fe4ff", marginTop: 24, marginBottom: 12, fontWeight: 600 }}
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
              size={1.4}
              color="#8ad6ff"
              className="test"
              label="4-Wheel drive robot"
              labelHref="https://github.com/jhonalej/MAE-576-robot.git"
              labelTarget="_blank"
              labelRel="noopener noreferrer"
              items={[
                <img
                  key="robot1"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                  alt="Robot build bench"
                />,
                <img
                  key="robot2"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                  alt="Code review"
                />,
                <img
                  key="robot3"
                  src="https://images.unsplash.com/photo-1523966211575-eb4a017e3b76?auto=format&fit=crop&w=600&q=80"
                  alt="Team build session"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.4}
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
              size={1.4}
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
              size={1.4}
              color="#7cc7ff"
              className="test"
              label="frogger (EE379)"
              items={[
                <img
                  key="frogger1"
                  src="https://images.unsplash.com/photo-1527443224154-d8c1f98d60fd?auto=format&fit=crop&w=600&q=80"
                  alt="Retro arcade cabinet"
                />,
                <img
                  key="frogger2"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                  alt="Game code on laptop"
                />,
                <img
                  key="frogger3"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="LED matrix for game display"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.4}
              color="#ffd27f"
              className="test"
              label="Servo control (EE478)"
              items={[
                <img
                  key="servo1"
                  src="https://images.unsplash.com/photo-1582719478145-3caa709e119b?auto=format&fit=crop&w=600&q=80"
                  alt="Servo motor close-up"
                />,
                <img
                  key="servo2"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                  alt="Bench setup with controllers"
                />,
                <img
                  key="servo3"
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
                  alt="Breadboard wiring for servo control"
                />,
              ]}
            />
          </div>
        </div>

        <div style={{ height: "320px", position: "relative", marginTop: "-10px", marginBottom: "4px" }}>
          <CircularGallery
            items={schoolGalleryItems}
            bend={-1.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#a2f0c4",
            marginTop: 28,
            marginBottom: 12,
            fontWeight: 600,
          }}
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
              items={[
                <img
                  key="portfolio1"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Design sketch"
                />,
                <img
                  key="portfolio2"
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
                  alt="Code editor"
                />,
                <img
                  key="portfolio3"
                  src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=600&q=80"
                  alt="UI wiring"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#c2b7ff"
              className="test"
              label="automatic blinds"
              items={[
                <img
                  key="blinds1"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Circuit planning"
                />,
                <img
                  key="blinds2"
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=600&q=80"
                  alt="Microcontroller wiring"
                />,
                <img
                  key="blinds3"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                  alt="Board layout"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#ffcfa1"
              className="test"
              label="PCB Design"
              items={[
                <img
                  key="pcb1"
                  src="https://images.unsplash.com/photo-1555696958-c5049c2c05f9?auto=format&fit=crop&w=600&q=80"
                  alt="PCB routing"
                />,
                <img
                  key="pcb2"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                  alt="Circuit board close-up"
                />,
                <img
                  key="pcb3"
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                  alt="Lab tools"
                />,
              ]}
            />
          </div>
          <div style={{ textDecoration: "none" }}>
            <Folder
              size={1.3}
              color="#b6f3ff"
              className="test"
              label="memory game"
              items={[
                <img
                  key="memory1"
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
                  alt="Workshop table"
                />,
                <img
                  key="memory2"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Code on screen"
                />,
                <img
                  key="memory3"
                  src="https://images.unsplash.com/photo-1523966211575-eb4a017e3b76?auto=format&fit=crop&w=600&q=80"
                  alt="Team build"
                />,
              ]}
            />
          </div>
        </div>

        <div style={{ height: "320px", position: "relative", marginTop: "-10px", marginBottom: "4px" }}>
          <CircularGallery
            items={smallGalleryItems}
            bend={-1.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
