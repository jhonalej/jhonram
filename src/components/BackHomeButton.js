import React from "react";
import { Link } from "react-router-dom";

const BackHomeButton = ({ style = {} }) => {
  const ringStyle = {
    display: "inline-flex",
    padding: "2px",
    borderRadius: "999px",
    background: "transparent",
    transition: "transform 180ms ease",
  };

  const pillStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "14px",
    background: "rgba(18, 24, 34, 0.92)",
    color: "#e6f7ff",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    textDecoration: "none",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
    overflow: "hidden",
  };

  const iconWrap = {
    width: "34px",
    height: "34px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(10, 14, 23, 0.95)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    border: "none",
  };

  return (
    <Link
      to="/"
      aria-label="Go to home page"
      style={{ textDecoration: "none", display: "inline-block", ...style }}
    >
      <span
        style={ringStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span style={pillStyle}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
            }}
          />
          <span style={iconWrap} aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 10.5V21h5v-6h4v6h5V10.5" />
            </svg>
          </span>
        </span>
      </span>
    </Link>
  );
};

export default BackHomeButton;
