import { useLayoutEffect, useRef, useState } from "react";

const useViewportScale = () => {
  const outerRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const updateScale = () => {
      if (!outerRef.current || !contentRef.current) return;
      const availableHeight = outerRef.current.clientHeight;
      const availableWidth = outerRef.current.clientWidth;
      const contentHeight = contentRef.current.offsetHeight;
      const contentWidth = contentRef.current.offsetWidth;
      if (!contentHeight || !contentWidth) return;
      const nextScale = Math.min(
        1,
        availableHeight / contentHeight,
        availableWidth / contentWidth
      );
      setScale(Number.isFinite(nextScale) ? nextScale : 1);
    };

    updateScale();

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateScale);
      if (outerRef.current) resizeObserver.observe(outerRef.current);
      if (contentRef.current) resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", updateScale);
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return { outerRef, contentRef, scale };
};

export default useViewportScale;
