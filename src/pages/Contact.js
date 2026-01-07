import React from "react";
import BackHomeButton from "../components/BackHomeButton";
import StaggeredMenu from "../components/StaggeredMenu";
import useViewportScale from "../components/useViewportScale";
import DarkVeil from "../components/DarkVeil";

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

function Contact() {
  const { outerRef, contentRef, scale } = useViewportScale();
  return (
    <div
      ref={outerRef}
      style={{
        textAlign: "center",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "40px 20px",
        color: "#e5e7eb",
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
      <BackHomeButton style={{ position: "absolute", top: 20, left: 20 }} />
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
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2>Contact Page</h2>
        <p>Feel free to reach out at contact@jhonram.com!</p>
      </div>
    </div>
  );
}

export default Contact;
