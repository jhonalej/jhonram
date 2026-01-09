import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import StaggeredMenu from "../components/StaggeredMenu";
import useViewportScale from "../components/useViewportScale";
import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";

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

const timelineItems = [

  {
    title: "Led Cube PCB Revamp",
    timeframe: "1",
    status: "Planned",
    description: "Redesigned PCB with improved power management and modular connectivity. As well as well as make it phone app controlled.",
  },
  {
    title: "Smart Home automation",
    timeframe: "2",
    status: "Planned",
    description: "Integrate IoT devices for seamless home control via Raspberry Pi hub. With adaptability for artificial intelligence integration.",
  },
  {
    title: "VPN Service",
    timeframe: "3",
    status: "Planned",
    description: "Develop a secure, high-speed VPN service focusing on user privacy and ease of use. With plans for cross-platform compatibility. using a Raspberry Pi as a server.",
  },
  {
    title: "OpenCV Dartboard Game",
    timeframe: "4",
    status: "Planned",
    description: "Create an interactive dartboard game using OpenCV for real-time score tracking and feedback. Implementing computer vision to enhance gameplay experience. Using a Raspberry Pi for processing. and connection to a web app.",
  }
];

function FutureProjects() {
  const { outerRef, contentRef, scale } = useViewportScale();
  const introText = [
    "Here are some of the projects I am planning to work on in the near future.",
    "below is a timeline outlining which projects are slated for development in the coming months.",
    "Along with each project, I've included a brief description and its current status.",
    "I will prosvide updates as these projects progress on my social media platforms.",
  ].join(" ");
  return (
    <div
      ref={outerRef}
      style={{
        height: "100vh",
        overflow: "visible",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "60px 20px 80px",
        boxSizing: "border-box",
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
      <BackHomeButton style={{ position: "fixed", bottom: 20, left: 20, zIndex: 3 }} />
      <StaggeredMenu
        items={navItems}
        socialItems={socialItems}
        position="right"
        displaySocials
        displayItemNumbering
      />
      <div
        ref={contentRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "#61dafb", fontSize: "clamp(2rem, 4vw, 2.6rem)" }}
        >
          Future Projects
        </motion.h1>
        <div
          style={{
            maxWidth: "1200px",
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.06em",
          }}
        >
          <div style={{ fontSize: "1.7rem", position: "relative" }}>
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
          style={{
            position: "relative",
            width: "100%",
            marginTop: "12px",
            padding: "16px 0 0",
            boxSizing: "border-box",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "34px",
              left: 0,
              right: 0,
              height: "4px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, rgba(97,218,251,0.15), rgba(97,218,251,0.7), rgba(97,218,251,0.15))",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "28px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {timelineItems.map((item) => (
              <div
                key={item.title}
                style={{
                  flex: "1 1 0",
                  minWidth: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#61dafb",
                    boxShadow: "0 0 0 6px rgba(97,218,251,0.18)",
                  }}
                />
                <div
                  style={{
                    marginTop: "14px",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: "rgba(8, 10, 14, 0.72)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    minHeight: "140px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(97,218,251,0.9)",
                    }}
                  >
                    {item.timeframe}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", marginTop: "6px", color: "#61dafb" }}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#ffffff",
                      marginTop: "8px",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.description}
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureProjects;
