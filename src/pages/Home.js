import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1d1e22, #2d2e32)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        }}
      >
        Jhon Ramirez Portfolio
      </header>

      {/* Main Section */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
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
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
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
  );
}

export default Home;
