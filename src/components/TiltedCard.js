import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TiltedCard = ({
  image,
  width,
  height,
  borderRadius = 25,
  children,
  style = {},
  innerStyle = {},
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width,
        height,
        borderRadius,
        perspective: 1000,
        cursor: "pointer",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius,
          rotateX,
          rotateY,
          ...(image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                border: "3px solid #61dafb",
              }
            : {}),
          ...innerStyle,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.9 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TiltedCard;
