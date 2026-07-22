import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Cost Engineering & Commercial",
    skills: [
      "Cost Estimation & Cost Analysis",
      "Cost Control & Monitoring",
      "Payment Application Review",
      "Financial Claims Assessment",
      "Variation & Change Orders",
      "Price Escalation Review",
      "Cash Flow Review",
      "Quantity & Rate Verification",
      "Contract Administration",
      "Commercial Reporting",
    ],
  },
  {
    title: "Project Controls & Management",
    skills: [
      "Project Planning & Scheduling",
      "Progress Monitoring",
      "Baseline & Variance Analysis",
      "KPI Tracking & Reporting",
      "Risk & Issue Tracking",
      "Stakeholder Coordination",
      "Project Documentation",
      "Agile & Scrum",
      "Operational Follow-up",
    ],
  },
  {
    title: "Data Analytics & Reporting",
    skills: [
      "Data Analysis & Validation",
      "Data Cleaning & Quality Assurance",
      "Data Accuracy & Completeness",
      "Performance Analysis",
      "Analytical Reporting",
      "Dashboard Development",
      "Data Visualization",
      "Management Reporting",
      "KPI Development",
      "Forecasting & Predictive Analysis",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "Full-Stack Web Development",
      "Front-End Development",
      "Back-End Development",
      "REST API Integration",
      "Database Design",
      "Software Requirements",
      "UML Modeling",
      "Testing & Debugging",
      "Version Control",
      "Software Development Life Cycle",
    ],
  },
  {
    title: "AI & Technical Knowledge",
    skills: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Fundamentals",
      "Natural Language Processing",
      "Prompt Engineering",
      "Data-Driven Applications",
      "Role-Based Access Control",
      "System Architecture",
      "Python for AI",
      "OpenAI API Integration",
      "Anthropic API Integration",
      "Gemini API Integration",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Microsoft Excel",
      "Microsoft Power BI",
      "JavaScript",
      "Node.js",
      "Next.js",
      "MongoDB",
      "HTML & CSS",
      "Git & GitHub",
      "DrugBank API",
      "Google Maps API",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Analytical Thinking",
      "Attention to Detail",
      "Problem Solving",
      "Communication",
      "Time Management",
      "Cross-Functional Collaboration",
      "Ability to Work Under Pressure",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <Reveal>
      <section className="skills" id="skills">
        <div className="skills-container">
          <motion.div
            className="skills-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="section-tag">SKILLS</span>

            <h2 className="skills-title">
              A toolkit built for
              <span> complex problems.</span>
            </h2>

            <p className="skills-intro">
              Combining cost engineering, project controls, data analytics,
              software engineering, artificial intelligence, and professional
              skills to support informed decisions and practical solutions.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-card"
                key={group.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="skill-card-number">0{index + 1}</div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Skills;