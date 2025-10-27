import React from "react";
import { motion } from "framer-motion";

const DarkVeil = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        zIndex: 0,
      }}
    >
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.05), transparent 40%),
            radial-gradient(800px circle at 100% 100%, rgba(255,255,255,0.05), transparent 40%)
          `,
          backgroundSize: "200% 200%",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default DarkVeil;
