import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import Waves from "../components/Waves";
import SplitText from "../components/SplitText";
import Folder from "../components/Folder";
import CircularGallery from "../components/CircularGallery";
import StaggeredMenu from "../components/StaggeredMenu";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  { label: "Future Projects", ariaLabel: "See future projects", link: "/future-projects" },
  { label: "Contact", ariaLabel: "Open contact page", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

function Projects() {
  const handleAnimationComplete = () => {
    // SplitText animation finished
  };

  const galleryItems = [
    { image: "/profile.jpg", text: "Profile" },
    {
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      text: "Workshop",
    },
    {
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
      text: "Electronics Bench",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
      text: "Circuit Board",
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
          <Link to="/projects/led-cube" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#f2c12fff" className="test" label="LED Cube" />
          </Link>
          <Link to="/projects/kinetic-sand-table" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#e7913bff" className="test" label="Kinetic Sand Table" />
          </Link>
          <Link to="/projects/smart-magic-mirror" style={{ textDecoration: "none" }}>
            <Folder size={1.5} color="#ef7a1aff" className="test" label="Smart Magic Mirror" />
          </Link>
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
          <Link to="/projects/school/embedded-systems" style={{ textDecoration: "none" }}>
            <Folder size={1.4} color="#8ad6ff" className="test" label="Embedded Systems Lab" />
          </Link>
          <Link to="/projects/school/data-structures" style={{ textDecoration: "none" }}>
            <Folder size={1.4} color="#b6c0ff" className="test" label="Data Structures" />
          </Link>
          <Link to="/projects/school/robotics-team" style={{ textDecoration: "none" }}>
            <Folder size={1.4} color="#c5ffa3" className="test" label="Robotics Team" />
          </Link>
          <Link to="/projects/school/control-systems" style={{ textDecoration: "none" }}>
            <Folder size={1.4} color="#ffd7a0" className="test" label="Control Systems" />
          </Link>
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
          <Link to="/projects/small/portfolio-site" style={{ textDecoration: "none" }}>
            <Folder size={1.3} color="#ffb3c8" className="test" label="Portfolio Site" />
          </Link>
          <Link to="/projects/small/weather-widget" style={{ textDecoration: "none" }}>
            <Folder size={1.3} color="#c2b7ff" className="test" label="Weather Widget" />
          </Link>
          <Link to="/projects/small/pcb-design" style={{ textDecoration: "none" }}>
            <Folder size={1.3} color="#ffcfa1" className="test" label="PCB Design" />
          </Link>
          <Link to="/projects/small/light-controller" style={{ textDecoration: "none" }}>
            <Folder size={1.3} color="#b6f3ff" className="test" label="Light Controller" />
          </Link>
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
