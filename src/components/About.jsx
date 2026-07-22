import { motion } from "framer-motion";
import Reveal from "./Reveal";

const highlights = [
  "Cost Engineering & Commercial Management",
  "Software Engineering & Full-Stack Development",
  "Artificial Intelligence & Natural Language Processing",
  "Digital Transformation & Financial Reporting",
  "Project Controls & Data Analytics",
];

const stats = [
  { value: "1B+", label: "Data Cells in National Project" },
  { value: "15+", label: "Core Responsibilities" },
  { value: "7", label: "Areas of Expertise" },
  { value: "6", label: "Professional Certifications" },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <Reveal>
      <section className="about" id="about">
        <motion.div
          className="about-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          transition={{ staggerChildren: 0.04 }}
        >
          <div className="about-glow about-glow-one" />
          <div className="about-glow about-glow-two" />

          <motion.div className="about-copy" variants={fadeUp}>
            <span className="section-tag">ABOUT ME</span>

            <h2 className="section-title">
              Engineering clarity
              <span> from complexity.</span>
            </h2>

            <p className="about-text">
              I’m Bader Altalhi, a multidisciplinary engineer with expertise in
              software engineering, artificial intelligence, cost engineering,
              project controls, and data analytics across infrastructure,
              government, and technology sectors. I specialize in transforming
              operational, technical, and financial data into actionable
              insights that support informed strategic and operational
              decision-making through commercial analysis, software solutions,
              and intelligent technologies.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <motion.div
                  className="highlight"
                  key={item}
                  variants={fadeUp}
                >
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-stats" variants={fadeUp}>
            {stats.map((stat, index) => (
              <article
                className={`about-card about-card-${index + 1}`}
                key={stat.label}
              >
                <div className="about-card-line" />
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Reveal>
  );
}

export default About;