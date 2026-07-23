import { motion } from "framer-motion";
import profileImage from "../assets/bader-profile.jpg";

function Hero() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY + 75;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <main id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="profile-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="profile-glow" />

          <img
            src={profileImage}
            alt="Bader Altalhi"
            className="profile-image"
          />
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          MULTIDISCIPLINARY ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Bader Altalhi
        </motion.h1>

        <motion.h2
          className="hero-headline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
        >
          Transforming data into insights.
          <span> Engineering solutions that drive better decisions.</span>
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.45 }}
        >
          Cost Engineer • Software Engineer • AI Engineer
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.45 }}
        >
          <a
            href="#projects"
            className="button button-primary"
            onClick={(event) => scrollToSection(event, "projects")}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="button button-secondary"
            onClick={(event) => scrollToSection(event, "contact")}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;