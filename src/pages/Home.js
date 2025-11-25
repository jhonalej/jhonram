import React from "react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import DarkVeil from "../components/DarkVeil";
import ProfileCard from "../components/ProfileCard";

function Home() {
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
        }}
      >
        Jhon Ramirez
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

        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            maxWidth: "780px",
            textAlign: "center",
            color: "#e1e8f4",
            fontSize: "1.15rem",
            lineHeight: "1.8",
            padding: "0 12px",
          }}
        >

          <SplitText
            text="Welcome to my personal portfolio! Here, I want to showcase all 
              of the projects that I have done through my school career as well as 
              any future projects that I want to work on. The purpose of this
              porfolio is not just to showcase everything I have done but also 
              ensipre anyone and everyone to do a projects like these."
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
        </motion.div>

        {/* Buttons Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
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
              transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
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
    </div>
  );
}

export default Home;
