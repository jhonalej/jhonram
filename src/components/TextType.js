import React, { useEffect, useMemo, useState } from "react";
import "./TextType.css";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function TextType({
  text = "",
  speed = 40,
  startDelay = 0,
  variableSpeedEnabled = false,
  cursorCharacter = "|",
  className = "",
  parentClassName = "",
  cursorClassName = "",
  style,
  ...props
}) {
  const safeText = useMemo(() => (text == null ? "" : String(text)), [text]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [safeText, speed, variableSpeedEnabled, startDelay]);

  useEffect(() => {
    if (index >= safeText.length) return undefined;

    const base = clamp(speed, 10, 200);
    const jitter = variableSpeedEnabled ? Math.floor(Math.random() * (base * 0.6)) : 0;
    const delay = index === 0 ? Math.max(startDelay, 0) + base + jitter : base + jitter;

    const timeoutId = setTimeout(() => {
      setIndex(prev => Math.min(prev + 1, safeText.length));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, safeText, speed, variableSpeedEnabled, startDelay]);

  const displayText = safeText.slice(0, index);
  const wrapperClass = ["text-type-wrapper", parentClassName].filter(Boolean).join(" ");
  const textClass = ["text-type-text", className].filter(Boolean).join(" ");
  const cursorClass = ["text-type-cursor", cursorClassName].filter(Boolean).join(" ");

  return (
    <span className={wrapperClass} style={style} {...props}>
      <span className="text-type-sr">{safeText}</span>
      <span className={textClass} aria-hidden="true">
        {displayText}
        {cursorCharacter ? <span className={cursorClass}>{cursorCharacter}</span> : null}
      </span>
    </span>
  );
}
