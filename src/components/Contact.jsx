import { motion } from "framer-motion";
import Reveal from "./Reveal";

const GmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.2-.5L12 10.2 18.8 5H5.2Zm13.8 2.1-6.4 4.9a1 1 0 0 1-1.2 0L5 7.1v11.4c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V7.1Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 .8A11.2 11.2 0 0 0 .8 12c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3.1 1.2a10.8 10.8 0 0 1 5.6 0C17 5.1 18 5.4 18 5.4c.6 1.5.2 2.6.1 2.9.7.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.2 11.2 0 0 0 23.2 12 11.2 11.2 0 0 0 12 .8Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1.2 8h4v13h-4V8Zm6.5 0h3.8v1.8h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.3V21h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21h-4V8Z" />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BaderAlt",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bader-altalhi-273a84276",
    icon: LinkedInIcon,
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
                <GmailIcon />
                <span>Send an Email</span>
              </a>

              <a
                className="contact-secondary"
                href="https://github.com/BaderAlt"
                target="_blank"
                rel="noopener noreferrer"
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
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                  <span>{link.label}</span>
                </a>
              );
            })}
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