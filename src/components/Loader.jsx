import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoaderCard from "../assets/BaderAlt-loader-card.png";

const networkPaths = [
  {
    id: "software",
    path: "M338 240 H310 L275 158 H198",
    delay: 1.42,
  },
  {
    id: "cost",
    path: "M500 226 V158",
    delay: 1.62,
  },
  {
    id: "ai",
    path: "M662 240 H690 L725 158 H802",
    delay: 1.82,
  },
  {
    id: "project",
    path: "M662 300 H690 L725 382 H802",
    delay: 2.02,
  },
  {
    id: "analytics",
    path: "M500 317 V382",
    delay: 2.22,
  },
  {
    id: "data",
    path: "M338 300 H310 L275 382 H198",
    delay: 2.42,
  },
];

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
        >
          <div className="loader-scene">
            <motion.div
              className="loader-card-container"
              initial={{
                y: -320,
                opacity: 1,
                scale: 0.96,
              }}
              animate={{
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={LoaderCard}
                alt="BaderAlt professional portfolio"
                className="loader-card-image"
              />

              <div className="loader-animation-layer">
                <svg
                  className="loader-network-overlay"
                  viewBox="0 0 1000 540"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter
                      id="loader-line-glow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <linearGradient
                      id="loader-line-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>

                  {networkPaths.map((item) => (
                    <motion.path
                      key={item.id}
                      d={item.path}
                      className="loader-network-path"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      animate={{
  pathLength: 1,
  opacity: [0, 1, 0.65],
}}

transition={{
  pathLength: {
    delay: item.delay,
    duration: 0.75,
    ease: "easeInOut",
  },
  opacity: {
    delay: item.delay,
    duration: 0.85,
  },
}}
                    />
                  ))}
                </svg>

              </div>
            </motion.div>

            <motion.div
              className="loader-impact-particles loader-impact-left"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 1.2],
              }}
              transition={{
                duration: 0.6,
                delay: 1.38,
              }}
            />

            <motion.div
              className="loader-impact-particles loader-impact-right"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 1.2],
              }}
              transition={{
                duration: 0.6,
                delay: 1.38,
              }}
            />

            <motion.div
              className="loader-ground-line"
              initial={{ opacity: 1, scaleX: 1 }}
              animate={{ opacity: 1, scaleX: 1 }}
            />

            <motion.div
              className="loader-details"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <div className="loader-title">BaderAlt Portfolio</div>

              <div className="loader-progress">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 3.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              <motion.div
                className="loader-text"
                initial={{ opacity: 0.45 }}
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
              
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;