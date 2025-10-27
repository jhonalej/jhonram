import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, delay = 0.05, ...rest }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <p style={{ display: "inline-block", ...rest.style }}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * delay, duration: 0.3 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

export default SplitText;
