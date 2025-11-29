import React from "react";
import { motion } from "framer-motion";
import BackHomeButton from "../components/BackHomeButton";
import StaggeredMenu from "../components/StaggeredMenu";

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

function FutureProjects() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1d1e22, #2d2e32)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "60px 20px 80px",
      }}
    >
      <BackHomeButton style={{ position: "absolute", top: 20, left: 20 }} />
      <StaggeredMenu
        items={navItems}
        socialItems={socialItems}
        position="right"
        displaySocials
        displayItemNumbering
      />
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: "#61dafb" }}
      >
        Future Projects
      </motion.h1>
      <p>Ideas or plans for your upcoming work can be shown here.</p>
    </div>
  );
}

export default FutureProjects;
