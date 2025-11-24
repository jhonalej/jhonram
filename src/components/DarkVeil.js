import React from "react";
import { motion } from "framer-motion";

const DarkVeil = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background:
          "radial-gradient(140% 140% at 25% 25%, #0f2b52 0%, #0b162a 30%, #050913 55%, #02040c 80%, #010308 100%)",
      }}
    >
      {/* Moving color veils */}
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0% 30%", "100% 70%", "0% 30%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: "-18%",
          backgroundImage: `
            radial-gradient(760px circle at 18% 30%, rgba(97,218,251,0.32), transparent 55%),
            radial-gradient(940px circle at 82% 20%, rgba(139,92,246,0.3), transparent 58%),
            radial-gradient(1100px circle at 48% 86%, rgba(59,130,246,0.34), transparent 60%)
          `,
          backgroundSize: "190% 190%",
          filter: "blur(22px)",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Soft vignette + top/bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(140% 120% at 50% 50%, transparent 60%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      />

      {/* Subtle texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          opacity: 0.4,
          mixBlendMode: "screen",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default DarkVeil;
