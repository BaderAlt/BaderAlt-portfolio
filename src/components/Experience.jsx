import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    period: "03/2026 — Present",
    role: "Cost Engineer",
    company: "SASEC",
    project: "Shoaiba RO6 Desalination Plant Project — SWCC / SWA",
    description:
      "Supporting consultant-side cost engineering, commercial management, and contract administration activities. Reviewing payment applications, invoices, purchase orders, price escalation submissions, variation and change orders, financial claims, and cash flow reports. Evaluating claimed costs, quantities, unit rates, contractual entitlements, assumptions, exclusions, supporting records, and calculation methodologies against project documents and contract requirements. Preparing commercial evaluation notes, financial claim assessment reports, cost analysis summaries, KPI reports, payment recommendations, and management review comments. Tracking cost commitments, approved changes, pending variations, invoiced amounts, and potential commercial exposure. Reviewing government contract provisions, payment conditions, variation procedures, commercial clauses, contractual obligations, and supporting documentation. Coordinating with contractors, consultants, project controls teams, engineers, procurement personnel, and stakeholders while maintaining organized records for audit readiness, document traceability, claim substantiation, and management decision-making.",
    tags: [
      "Cost Engineering",
      "Commercial Management",
      "Contract Administration",
      "Claims Assessment",
      "Payment Review",
      "Change Management",
      "Financial Reporting",
      "Cost Control",
    ],
  },
  {
    period: "06/2025 — 01/2026",
    role: "Administrative Analyst",
    company: "Basiera",
    project:
      "National Center for Meteorology — Historical Weather Records Digitization",
    description:
      "Contributed as an Administrative Analyst to a national-scale digitization and electronic archiving project for historical weather records covering cities across Saudi Arabia and reporting periods from 1950 to 2026, with project records comprising more than one billion data cells. Monitored project execution against approved phases, target timelines, baseline schedules, city-level work plans, and completion requirements. Analyzed completion rates, processed records, recorded days, missing files, damaged documents, data gaps, and city-level indicators to identify delays and operational issues. Prepared progress reports, KPI summaries, variance analyses, analytical observations, and management updates. Performed data validation, cleaning, entry verification, completeness checks, reconciliation, and quality assurance. Maintained document traceability and archive integrity by organizing records, verifying classifications, tracking exceptions, and ensuring compliance with approved standards and workflows. Coordinated operational follow-up and converted large volumes of data into clear status information by city, period, record condition, and completion level.",
    tags: [
      "Administrative Analysis",
      "Progress Monitoring",
      "Baseline Analysis",
      "Variance Analysis",
      "KPI Reporting",
      "Data Validation",
      "Quality Assurance",
      "Management Reporting",
    ],
  },
  {
    period: "06/2024 — 08/2024",
    role: "Software Engineer Intern",
    company: "Smart Methods",
    project: "420-Hour Software Engineer Internship",
    description:
      "Completed a structured 420-hour software engineering internship focused on web development, software implementation, and natural language processing. Supported requirements understanding, solution design, coding, testing, debugging, documentation, and implementation in a practical project-based environment. Developed and enhanced web components using front-end and back-end development concepts while following maintainable coding and user-interface practices. Applied natural language processing concepts in practical exercises and real project environments. Collaborated with technical teams, followed defined development tasks and timelines, and contributed to commercially applicable software implementations. Strengthened experience in problem-solving, version-controlled development, API integration, database-driven applications, and end-to-end software delivery.",
    tags: [
      "Web Development",
      "Software Implementation",
      "Natural Language Processing",
      "Front-End Development",
      "Back-End Development",
      "API Integration",
      "Database Applications",
      "Testing & Debugging",
    ],
  },
];

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function Experience() {
  return (
    <Reveal>
      <section className="experience" id="experience">
        <div className="experience-container">
          <motion.div
            className="experience-heading"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <span className="section-tag">EXPERIENCE</span>

            <h2 className="experience-title">
              Building across
              <span> engineering and technology.</span>
            </h2>

            <p className="experience-intro">
              A multidisciplinary career combining cost engineering, commercial
              management, project controls, data analytics, software
              development, and artificial intelligence.
            </p>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <motion.article
                className="experience-item"
                key={`${experience.company}-${experience.role}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.06 }}
              >
                <div className="experience-marker">
                  <span />
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <span className="experience-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{experience.role}</h3>

                  <div className="experience-company">
                    <strong>{experience.company}</strong>
                    <span>{experience.project}</span>
                  </div>

                  <p>{experience.description}</p>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
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

export default Experience;