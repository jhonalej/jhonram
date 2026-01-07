import React from "react";
import BackHomeButton from "./../components/BackHomeButton";
import useViewportScale from "./../components/useViewportScale";

export default function ProjectSmartMagicMirror() {
  const { outerRef, contentRef, scale } = useViewportScale();
  return (
    <div
      ref={outerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0b1220, #111827)",
        color: "#e5e7eb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={contentRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BackHomeButton style={{ alignSelf: "flex-start" }} />
        <h1 style={{ color: "#61dafb", marginTop: 20 }}>Smart Magic Mirror</h1>
        <p style={{ maxWidth: 800, textAlign: "center", marginTop: 20 }}>
          Details about the Smart Magic Mirror project go here. Add description, media, and links as needed.
        </p>
      </div>
    </div>
  );
}
