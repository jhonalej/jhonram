import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1d1e22, #2d2e32)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", color: "#61dafb" }}
      >
        Welcome to the JhonRam Website
      </motion.h1>

      {/* Fade-in paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ fontSize: "1.3rem", maxWidth: "600px", lineHeight: "1.5" }}
      >
        Crafting creative digital experiences using React, animations, and a
        passion for clean design.
      </motion.p>

      {/* Slide-in button */}
      <motion.a
        href="#/about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "12px 30px",
          background: "#61dafb",
          color: "#1d1e22",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "600",
        }}
        whileHover={{ scale: 1.05, backgroundColor: "#4ec0f7" }}
      >
        Learn More
      </motion.a>
    </div>
  );
}

export default Home;
