import { motion } from "framer-motion";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    number: "01",
    title: "Medicine Finder",
    category: "Full-Stack Healthcare Information Platform",
    description:
      "A scalable web-based healthcare information platform that centralizes medicine search, pharmacy product lookup, price and location comparison, and drug interaction analysis. The platform uses a layered architecture that separates presentation, application, data, and external service components to improve maintainability and scalability. It includes secure authentication, role-based access control, structured API communication, and subscription-based access to professional drug interaction features. System requirements, user journeys, and backend interactions were modeled using UML Use Case, Sequence, and Class diagrams.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Next.js",
      "HTML",
      "CSS",
      "MongoDB",
      "DrugBank API",
      "Google Maps API",
      "Authentication",
      "Role-Based Access Control",
      "UML Modeling",
      "Database Design",
      "API Integration",
      "Backend Routing",
      "Technical Documentation",
    ],
    github: "https://github.com/BaderAlt/Medicine-Finder",
    featured: true,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Projects() {
  return (
    <Reveal>
      <section className="projects" id="projects">
        <div className="projects-container">
          <motion.div
            className="projects-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-tag">PROJECTS</span>

            <h2 className="projects-title">
              Ideas transformed into
              <span> practical solutions.</span>
            </h2>

            <p className="projects-intro">
              A full-stack healthcare platform combining software engineering,
              database design, secure access control, API integration, system
              architecture, and technical documentation.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
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
              >
                <TiltCard
                  className={`project-card ${
                    project.featured ? "project-card-featured" : ""
                  }`}
                >
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        View Project
                        <span>↗</span>
                      </a>
                    ) : (
                      <span className="project-status">
                        Concept Project
                      </span>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Projects;