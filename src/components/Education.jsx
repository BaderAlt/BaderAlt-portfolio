import { motion } from "framer-motion";
import Reveal from "./Reveal";

const education = [
  {
    number: "01",
    degree: "Master’s Degree",
    specialization: "Artificial Intelligence",
    university: "University of Jeddah",
    location: "Jeddah, Saudi Arabia",
    period: "In Progress",
    status: "CURRENT STUDY",
  },
  {
    number: "02",
    degree: "Bachelor’s Degree",
    specialization: "Software Engineering",
    university: "University of Jeddah",
    location: "Jeddah, Saudi Arabia",
    period: "01/2024",
    status: "COMPLETED",
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

function Education() {
  return (
    <Reveal>
      <section className="education" id="education">
        <div className="education-container">
          <motion.div
            className="education-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-tag">EDUCATION</span>

            <h2 className="education-title">
              Academic foundation.
              <span> Built for the future.</span>
            </h2>

            <p className="education-intro">
              Academic qualifications in software engineering and artificial
              intelligence from the University of Jeddah.
            </p>
          </motion.div>

          <div className="education-grid">
            {education.map((item, index) => (
              <motion.article
                className="education-card"
                key={`${item.degree}-${item.specialization}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="education-card-top">
                  <span className="education-number">{item.number}</span>

                  <span className="education-status">{item.status}</span>
                </div>

                <div className="education-content">
                  <span className="education-period">{item.period}</span>

                  <h3>{item.degree}</h3>

                  <h4>{item.specialization}</h4>

                  <div className="education-details">
                    <p>{item.university}</p>
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Education;