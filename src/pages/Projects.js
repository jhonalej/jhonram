import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import Waves from "../components/Waves";
import SplitText from "../components/SplitText";
import Folder from "../components/Folder";
import { Link } from "react-router-dom";

function Projects() {
  const handleAnimationComplete = () => {
    // SplitText animation finished
  };

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
            text="Place holder ........"
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
            height: "600px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/projects/led-cube" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#5227FF" className="test" label="LED Cube" />
          </Link>
          <Link to="/projects/kinetic-sand-table" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#4CAF50" className="test" label="Kinetic Sand Table" />
          </Link>
          <Link to="/projects/smart-magic-mirror" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#FF7043" className="test" label="Smart Magic Mirror" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
