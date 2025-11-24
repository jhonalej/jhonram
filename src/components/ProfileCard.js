import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "rgba(5, 12, 22, 0.65)",
  color: "#dbeafe",
  fontSize: "0.9rem",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
};

const ProfileCard = ({ name, title, location, image, tags = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -4 }}
      style={{ width: "100%", maxWidth: "420px" }}
    >
      <TiltedCard
        borderRadius={26}
        style={{ width: "100%", height: "560px" }}
        innerStyle={{
          borderRadius: 26,
          backgroundImage: `
            linear-gradient(180deg, rgba(4,8,15,0.55) 0%, rgba(4,8,15,0.25) 45%, rgba(3,6,12,0.8) 100%),
            radial-gradient(120% 120% at 15% 20%, rgba(97,218,251,0.18), transparent 55%),
            radial-gradient(120% 120% at 85% 10%, rgba(139,92,246,0.18), transparent 55%),
            url(${image})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 55px rgba(0,0,0,0.48)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Ambient overlay for depth */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(140% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
            mixBlendMode: "soft-light",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            padding: "28px 26px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ color: "#eaf3ff", fontSize: "1.9rem", fontWeight: 800 }}>{name}</div>
            <div style={{ color: "#c7d3ea", marginTop: 8, fontSize: "1.05rem", fontWeight: 600 }}>
              {title}
            </div>
            {location ? (
              <div style={{ color: "#9fb3ce", marginTop: 6, fontSize: "0.95rem" }}>{location}</div>
            ) : null}
          </div>

          {/* Bottom area */}
          <div style={{ marginTop: 16 }}>
            {tags.length ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                {tags.map((tag) => (
                  <span key={tag} style={pillStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div
              aria-hidden
              style={{
                alignSelf: "stretch",
                height: 64,
                borderRadius: 18,
                background: "linear-gradient(135deg, rgba(5,10,18,0.85), rgba(5,10,18,0.65))",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 18px 32px rgba(0,0,0,0.38)",
              }}
            />
          </div>
        </div>
      </TiltedCard>
    </motion.div>
  );
};

export default ProfileCard;
