import React from "react";
import BackHomeButton from "../components/BackHomeButton";

function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #111827, #0b1324)",
        color: "#e5e7eb",
      }}
    >
      <BackHomeButton style={{ position: "absolute", top: 20, left: 20 }} />
      <h2>Contact Page</h2>
      <p>Feel free to reach out at contact@jhonram.com!</p>
    </div>
  );
}

export default Contact;
