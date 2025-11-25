import React from "react";
import BackHomeButton from "./../components/BackHomeButton";

export default function ProjectKineticSandTable() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b1220, #111827)",
        color: "#e5e7eb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <BackHomeButton style={{ alignSelf: "flex-start" }} />
      <h1 style={{ color: "#61dafb", marginTop: 20 }}>Kinetic Sand Table</h1>
      <p style={{ maxWidth: 800, textAlign: "center", marginTop: 20 }}>
        Details about the Kinetic Sand Table project go here. Add description, media, and links as needed.
      </p>
    </div>
  );
}
