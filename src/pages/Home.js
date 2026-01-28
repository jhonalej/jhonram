import React from "react";
import { motion } from "framer-motion";
import TextType from "../components/TextType";
import DarkVeil from "../components/DarkVeil";
import ProfileCard from "../components/ProfileCard";
import StaggeredMenu from "../components/StaggeredMenu";
import useViewportScale from "../components/useViewportScale";
import BounceCards from "../components/BounceCards";

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

function Home() {
  const { outerRef, contentRef, scale } = useViewportScale();
  const introText = [
    "Welcome to my personal portfolio! Here, I want to showcase all",
    "of the projects that I have done through my school career as well as",
    "any future projects that I want to work on. The purpose of this",
    "porfolio is not just to showcase everything I have done but also",
    "ensipre anyone and everyone to do a projects like these.",
  ].join(" ");
  const bounceImages = [
    require("../images/sand_table/controls.jpg"),
    require("../images/sand_table/Lines_color.jpg"),
    require("../images/LED_cube/side view.jpeg"),
    require("../images/Smart Mirror/Defualt page.png"),
    require("../images/MAE 576 robot/top view with wheels.jpeg"),
  ];

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Animated Background */}
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

      <StaggeredMenu
        items={navItems}
        socialItems={socialItems}
        position="right"
        displaySocials
        displayItemNumbering
      />

      {/* Top Header */}
      <header
        style={{
          backgroundColor: "rgba(5, 8, 15, 0.7)",
          backdropFilter: "blur(10px)",
          color: "#eaf3ff",
          textAlign: "center",
          padding: "20px 0",
          fontWeight: "700",
          fontSize: "1.8rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          zIndex: 2,
          position: "relative",
          width: "100%",
        }}
      >
        Jhon Ramirez
      </header>

      <div
        ref={contentRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            position: "relative",
            zIndex: 1,
            gap: "clamp(32px, 6vw, 80px)",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "0 1 420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "36px",
            }}
          >
            <ProfileCard
              name="Jhon Ramirez"
              title="Electrical Engineer, B.S."
              location="New York"
              image="/profile.jpg"
              tags={["Circuit Desing", "C/C++", "PCB Desing", "Power Electronics"]}
            />

            {/* Buttons Section */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[
                { text: "Projects", link: "#/projects" },
                { text: "Future Projects", link: "#/future-projects" },
                { text: "Contact Info", link: "#/contact" },
              ].map((btn, index) => (
                <motion.a
                  key={btn.text}
                  href={btn.link}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                  style={{
                    display: "inline-block",
                    padding: "15px 40px",
                    backgroundColor: "#61dafb",
                    color: "#0b1220",
                    borderRadius: "30px",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "0.3s ease",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  {btn.text}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              flex: "1 1 480px",
              maxWidth: "780px",
              textAlign: "center",
              color: "#e1e8f4",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              padding: "0 12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ position: "relative", marginBottom: "24px" }}>
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
              <BounceCards images={bounceImages} />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Home;
