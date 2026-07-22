import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

function MouseGlow() {
  const [isVisible, setIsVisible] = useState(false);

  const x = useSpring(0, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  const y = useSpring(0, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX - 60)
      y.set(event.clientY - 60)
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [x, y]);

  return (
    <motion.div
      className="mouse-glow"
      style={{ x, y }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      aria-hidden="true"
    />
  );
}

export default MouseGlow;