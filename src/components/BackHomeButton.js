import React from "react";
import { Link } from "react-router-dom";

const BackHomeButton = ({ style = {} }) => {
  const ringStyle = {
    display: "inline-flex",
    padding: "2px",
    borderRadius: "999px",
    background:
      "linear-gradient(120deg, rgba(97,218,251,0.9), rgba(139,92,246,0.7), rgba(59,130,246,0.8))",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35), 0 0 28px rgba(97,218,251,0.35)",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  };

  const pillStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 22px",
    minWidth: "160px",
    borderRadius: "999px",
    background: "rgba(10, 14, 23, 0.92)",
    color: "#e6f7ff",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.02em",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
    overflow: "hidden",
  };

  const iconWrap = {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(145deg, rgba(97,218,251,0.9), rgba(59,130,246,0.95))",
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
  };

  return (
    <Link to="/" style={{ textDecoration: "none", display: "inline-block", ...style }}>
      <span
        style={ringStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px) scale(1.01)";
          e.currentTarget.style.boxShadow = "0 16px 34px rgba(0,0,0,0.4), 0 0 34px rgba(97,218,251,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.35), 0 0 28px rgba(97,218,251,0.35)";
        }}
      >
        <span style={pillStyle}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                "radial-gradient(120% 120% at 20% 50%, rgba(97,218,251,0.18), transparent 40%), radial-gradient(120% 120% at 80% 50%, rgba(59,130,246,0.18), transparent 40%)",
              pointerEvents: "none",
            }}
          />
          <span style={iconWrap} aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0b1220"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </span>
          <span style={{ position: "relative", zIndex: 1 }}>Back to Home</span>
        </span>
      </span>
    </Link>
  );
};

export default BackHomeButton;
