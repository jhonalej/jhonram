import React from "react";
import { AnimatedText, FadeIn, SlideIn } from "react-bits";

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
      {/* Animated Hero Text */}
      <AnimatedText
        text="Welcome to the Jhon Ramirez Portfolio"
        animation="wave"
        speed={0.5}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#61dafb",
        }}
      />

      {/* Tagline Fade-in */}
      <FadeIn delay={0.5}>
        <p style={{ fontSize: "1.3rem", maxWidth: "600px", lineHeight: "1.5" }}>
          Crafting creative digital experiences using React, animations, and
          passion for clean design.
        </p>
      </FadeIn>

      {/* Button Animation */}
      <SlideIn direction="up" delay={1}>
        <a
          href="#/about"
          style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "12px 30px",
            background: "#61dafb",
            color: "#1d1e22",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#4ec0f7")}
          onMouseOut={(e) => (e.target.style.background = "#61dafb")}
        >
          Learn More
        </a>
      </SlideIn>
    </div>
  );
}

export default Home;
