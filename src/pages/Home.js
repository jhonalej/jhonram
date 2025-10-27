import React from "react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import TiltedCard from "../components/TiltedCard";
import DarkVeil from "../components/DarkVeil";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Animated Background */}
      <DarkVeil />

      {/* Top Header */}
      <header
        style={{
          backgroundColor: "#fff",
          color: "#1d1e22",
          textAlign: "center",
          padding: "20px 0",
          fontWeight: "700",
          fontSize: "1.8rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 2,
          position: "relative",
        }}
      >
        Jhon Ramirez Portfolio
      </header>

      {/* Hero Section */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            background: "rgba(45, 46, 50, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "25px",
            padding: "60px",
            maxWidth: "850px",
            width: "90%",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* Profile Image (Tilted Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TiltedCard
              image="/profile.jpg"
              width={320}
              height={320}
              borderRadius={25}
            />
          </motion.div>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              maxWidth: "700px",
              textAlign: "center",
              color: "#d0d0d0",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            <SplitText
              text="Welcome to my personal portfolio! Here, I showcase my engineering projects, upcoming ideas, and professional growth. This website highlights my journey through design, development, and innovation — built fully with React and animated using Framer Motion."
              delay={0.02}
            />
          </motion.div>
        </motion.div>

        {/* Buttons Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "50px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {[
            { text: "Projects", link: "#/projects" },
            { text: "Future Projects", link: "#/future-projects" },
            { text: "Contact Info", link: "#/contact" },
            { text: "About", link: "#/about" },
          ].map((btn, index) => (
            <motion.a
              key={btn.text}
              href={btn.link}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              style={{
                display: "inline-block",
                padding: "15px 40px",
                backgroundColor: "#61dafb",
                color: "#1d1e22",
                borderRadius: "30px",
                fontSize: "1.2rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "0.3s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              {btn.text}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
