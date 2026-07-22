import { motion } from "framer-motion";
import Reveal from "./Reveal";

const certifications = [
  {
    number: "01",
    title: "Professional Scrum Master™ I",
    issuer: "Scrum.org",
    category: "Project Management & Agile",
  },
  {
    number: "02",
    title: "Google Project Management Professional Certification",
    issuer: "Google",
    category: "Project Management & Agile",
  },
  {
    number: "03",
    title: "Microsoft Project Management Professional Certification",
    issuer: "Microsoft",
    category: "Project Management & Agile",
  },
  {
    number: "04",
    title: "Meta Front-End Developer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
  },
  {
    number: "05",
    title: "Meta Back-End Developer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
  },
  {
    number: "06",
    title: "Meta Full-Stack Engineer Professional Certification",
    issuer: "Meta",
    category: "Software Development",
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
  return (
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
                key={`${certificate.title}-${index}`}
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

                  <span className="certificate-icon">↗</span>
                </div>

                <div className="certificate-content">
                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p>{certificate.issuer}</p>
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
  );
}

export default Certifications;