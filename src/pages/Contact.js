import React from "react";
import BackHomeButton from "../components/BackHomeButton";
import StaggeredMenu from "../components/StaggeredMenu";
import useViewportScale from "../components/useViewportScale";
import DarkVeil from "../components/DarkVeil";
import ProfileCard from "../components/ProfileCard";
import { motion } from "framer-motion";

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

const contactIconItems = [
  {
    label: "GitHub",
    href: "https://github.com/jhonalej",
    icon: (
      <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jhon-ramirez2003",
    icon: (
      <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:Jhonramirez2010@outlook.com",
    icon: (
      <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M3.75 4.5A2.25 2.25 0 0 0 1.5 6.75v10.5A2.25 2.25 0 0 0 3.75 19.5h16.5A2.25 2.25 0 0 0 22.5 17.25V6.75A2.25 2.25 0 0 0 20.25 4.5H3.75Zm0 1.5h16.5a.75.75 0 0 1 .75.75v.15l-8.62 5.172a.75.75 0 0 1-.76 0L3 6.9v-.15a.75.75 0 0 1 .75-.75Z"
        />
      </svg>
    ),
  },
];

function Contact() {
  const { outerRef, contentRef, scale } = useViewportScale();
  return (
    <div
      ref={outerRef}
      style={{
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
      <BackHomeButton style={{ position: "fixed", bottom: 20, left: 20, zIndex: 999 }} />
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
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 320px",
              maxWidth: "360px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                margin: 0,
                fontSize: "clamp(2rem, 4vw, 2.6rem)",
                color: "#61dafb",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Contact Me!
            </motion.h2>
            <div
              aria-hidden
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 96px)",
                gap: "32px",
                marginTop: "45px",
                justifyContent: "center",
              }}
            >
              {contactIconItems.map((item, index) => (
                <a
                  key={`${item.label}-${index}`}
                  href={item.href}
                  aria-label={`${item.label} link`}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    width: 96,
                    height: 96,
                    gridColumn: index === contactIconItems.length - 1 ? "1 / -1" : undefined,
                    justifySelf: index === contactIconItems.length - 1 ? "center" : undefined,
                    borderRadius: "14px",
                    background: "rgba(255, 200, 140, 0.18)",
                    border: "1px solid rgba(255, 214, 170, 0.28)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    display: "grid",
                    placeItems: "center",
                    color: "rgba(255, 229, 200, 0.95)",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div
            style={{
              flex: "0 0 auto",
              width: "min(380px, 100%)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ProfileCard
              name="Jhon Ramirez"
              title="Electrical Engineer, B.S."
              location="New York"
              image="/profile.jpg"
              tags={["Circuit Desing", "C/C++", "PCB Desing", "Power Electronics"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
