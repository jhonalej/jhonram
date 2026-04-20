import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const resumeUrl = `${process.env.PUBLIC_URL || ""}/resume.pdf`;
const resumePreviewUrl = `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

function ResumeViewer() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "JhonFolio | Resume";

    return () => {
      document.title = previousTitle || "JhonFolio";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(97, 218, 251, 0.18), transparent 32%), #050811",
        color: "#f8fafc",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          width: "min(1200px, 100%)",
          height: "calc(100vh - 48px)",
          margin: "0 auto",
          borderRadius: "28px",
          overflow: "hidden",
          border: "1px solid rgba(97, 218, 251, 0.24)",
          background: "rgba(7, 11, 18, 0.96)",
          boxShadow: "0 32px 80px rgba(0, 0, 0, 0.42)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "18px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            flexWrap: "wrap",
            background: "rgba(10, 16, 26, 0.96)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255, 214, 170, 0.85)",
              }}
            >
              JhonFolio
            </span>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
              }}
            >
              Resume Viewer
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              style={{
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#e5e7eb",
                fontWeight: 700,
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              Back to Contact
            </Link>
            <a
              href={resumeUrl}
              download="Jhon-Ramirez-Resume.pdf"
              style={{
                padding: "10px 16px",
                borderRadius: "999px",
                background: "#61dafb",
                color: "#04111c",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 12px 24px rgba(97, 218, 251, 0.18)",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            minHeight: 0,
            background: "rgba(2, 6, 12, 0.9)",
          }}
        >
          <object
            data={resumePreviewUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="Resume PDF preview"
          >
            <div
              style={{
                height: "100%",
                display: "grid",
                placeItems: "center",
                padding: "24px",
                boxSizing: "border-box",
                textAlign: "center",
                color: "rgba(226, 232, 240, 0.82)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  maxWidth: "460px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  The browser could not render the embedded PDF preview.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={resumeUrl}
                    download="Jhon-Ramirez-Resume.pdf"
                    style={{
                      padding: "10px 16px",
                      borderRadius: "999px",
                      background: "#61dafb",
                      color: "#04111c",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Download Resume
                  </a>
                  <Link
                    to="/contact"
                    style={{
                      padding: "10px 16px",
                      borderRadius: "999px",
                      background: "transparent",
                      color: "#fffaf2",
                      fontWeight: 700,
                      textDecoration: "none",
                      border: "1px solid rgba(255, 214, 170, 0.6)",
                    }}
                  >
                    Back to Contact
                  </Link>
                </div>
              </div>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  );
}

export default ResumeViewer;
