import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

import scrumCertificate from "../assets/certifications/scrum-master.jpg";
import googleCertificate from "../assets/certifications/google-project-management.jpg";
import microsoftCertificate from "../assets/certifications/microsoft-project-management.jpg";
import metaFrontEndCertificate from "../assets/certifications/meta-front-end.jpg";
import metaBackEndCertificate from "../assets/certifications/meta-back-end.jpg";
import metaFullStackCertificate from "../assets/certifications/meta-full-stack.jpg";

const certifications = [
  {
    number: "01",
    title: "Professional Scrum Master™ I",
    issuer: "Scrum.org",
    category: "Project Management & Agile",
    image: scrumCertificate,
  },
  {
    number: "02",
    title: "Google Project Management Professional Certification",
    issuer: "Google",
    category: "Project Management & Agile",
    image: googleCertificate,
  },
  {
    number: "03",
    title: "Microsoft Project Management Professional Certification",
    issuer: "Microsoft",
    category: "Project Management & Agile",
    image: microsoftCertificate,
  },
  {
    number: "04",
    title: "Meta Front-End Developer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
    image: metaFrontEndCertificate,
  },
  {
    number: "05",
    title: "Meta Back-End Developer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
    image: metaBackEndCertificate,
  },
  {
    number: "06",
    title: "Meta Full-Stack Engineer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
    image: metaFullStackCertificate,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Certifications() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedCertificate =
    selectedIndex !== null ? certifications[selectedIndex] : null;

  const openCertificate = (index) => {
    setSelectedIndex(index);
  };

  const closeCertificate = () => {
    setSelectedIndex(null);
  };

  const showPreviousCertificate = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1,
    );
  };

  const showNextCertificate = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCertificate();
      }

      if (event.key === "ArrowLeft") {
        showPreviousCertificate();
      }

      if (event.key === "ArrowRight") {
        showNextCertificate();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <Reveal>
        <section className="certifications" id="certifications">
          <div className="certifications-container">
            <motion.div
              className="certifications-heading"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="section-tag">CERTIFICATIONS</span>

              <h2 className="certifications-title">
                Continuous learning.
                <span> Proven knowledge.</span>
              </h2>

              <p className="certifications-intro">
                Professional certifications in Scrum, project management,
                front-end development, back-end development, and full-stack
                software engineering.
              </p>
            </motion.div>

            <div className="certifications-grid">
              {certifications.map((certificate, index) => (
                <motion.article
                  className="certificate-card"
                  key={certificate.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="certificate-top">
                    <span className="certificate-number">
                      {certificate.number}
                    </span>
                  </div>

                  <div className="certificate-content">
                    <span className="certificate-category">
                      {certificate.category}
                    </span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>

                    <button
                      className="certificate-view-button"
                      type="button"
                      onClick={() => openCertificate(index)}
                      aria-label={`View ${certificate.title}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 5c-5.5 0-9.5 5.2-9.7 5.4a1 1 0 0 0 0 1.2C2.5 11.8 6.5 17 12 17s9.5-5.2 9.7-5.4a1 1 0 0 0 0-1.2C21.5 10.2 17.5 5 12 5Zm0 10c-3.7 0-6.8-3.1-7.6-4 .8-.9 3.9-4 7.6-4s6.8 3.1 7.6 4c-.8.9-3.9 4-7.6 4Zm0-6.5A2.5 2.5 0 1 0 12 13a2.5 2.5 0 0 0 0-5Z" />
                      </svg>

                      <span>View Certificate</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="certifications-summary certifications-stat-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="certifications-stat-number">6</div>

              <div className="certifications-stat-content">
                <span className="certifications-stat-label">
                  PROFESSIONAL DEVELOPMENT
                </span>

                <h3>Professional Certifications</h3>

                <div className="certifications-stat-items">
                  <span>Scrum</span>
                  <span>Project Management</span>
                  <span>Full-Stack Development</span>
                </div>

                <p>
                  Continuous professional development across agile project
                  management and software engineering.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={closeCertificate}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
          >
            <motion.div
              className="certificate-modal-content"
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                className="certificate-modal-close"
                type="button"
                onClick={closeCertificate}
                aria-label="Close certificate"
              >
                ×
              </button>

              <button
                className="certificate-modal-navigation certificate-modal-previous"
                type="button"
                onClick={showPreviousCertificate}
                aria-label="Previous certificate"
              >
                ‹
              </button>

              <div className="certificate-modal-image-wrapper">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedCertificate.image}
                    className="certificate-modal-image"
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              </div>

              <button
                className="certificate-modal-navigation certificate-modal-next"
                type="button"
                onClick={showNextCertificate}
                aria-label="Next certificate"
              >
                ›
              </button>

              <div className="certificate-modal-details">
                <div>
                  <span>{selectedCertificate.issuer}</span>
                  <h3>{selectedCertificate.title}</h3>
                </div>

                <p>
                  {selectedIndex + 1} / {certifications.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certifications;