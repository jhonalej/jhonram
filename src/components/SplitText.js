import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, delay = 0.05, ...rest }) => {
  // Split into words while keeping the spaces as separate tokens
  const tokens = text.split(/(\s+)/);

  return (
    <p
      style={{
        display: "block",
        whiteSpace: "normal",
        wordBreak: "break-word",
        ...rest.style,
      }}
    >
      {tokens.map((token, index) => {
        // Render spaces as-is to keep natural wrapping
        if (/^\s+$/.test(token)) {
          return token;
        }

        return (
          <motion.span
            key={`${token}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * delay, duration: 0.3 }}
            style={{ display: "inline-block" }}
          >
            {token}
          </motion.span>
        );
      })}
    </p>
  );
};

export default SplitText;
