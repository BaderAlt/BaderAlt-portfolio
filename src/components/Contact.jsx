import { motion } from "framer-motion";
import Reveal from "./Reveal";


const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BaderAlt",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bader-altalhi-273a84276",
  },
];

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Reveal>
      <section className="contact" id="contact">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="contact-glow" />

          <span className="section-tag">CONTACT</span>

          <h2 className="contact-title">
            Let’s build something
            <span> meaningful together.</span>
          </h2>

          <p className="contact-description">
            Available for opportunities and collaborations in cost engineering,
            project controls, software development, data analytics, and
            artificial intelligence.
          </p>

          <div className="contact-actions">
            <a
              className="contact-primary"
              href="mailto:1baderalhothli@gmail.com"
            >
              Send an Email
              <span>↗</span>
            </a>

            <a
              className="contact-secondary"
              href="https://github.com/BaderAlt"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="contact-bottom">
            <div>
              <span>LOCATION</span>
              <p>Saudi Arabia</p>
            </div>

            <div>
              <span>AVAILABILITY</span>
              <p>Open to opportunities</p>
            </div>
          </div>
        </motion.div>
      </section>
      </Reveal>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home">BaderAlt</a>
            <p>Engineer, developer and problem solver.</p>
          </div>

          <div className="footer-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <span>↗</span>
              </a>
            ))}
          </div>

          <p className="footer-copyright">
            © {currentYear} Bader Altalhi. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Contact;