import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  {
    label: "Certifications",
    href: "#certifications",
    id: "certifications",
  },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const isNavScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavScrolling.current) return;

        if (window.scrollY < 100) {
          setActiveSection("home");
          return;
        }

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              Math.abs(firstEntry.boundingClientRect.top) -
              Math.abs(secondEntry.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100 && !isNavScrolling.current) {
        setActiveSection("home");
      }

      if (isNavScrolling.current) {
        setHidden(false);
        lastScroll = currentScroll;
        return;
      }

      if (currentScroll <= 20) {
        setHidden(false);
      } else if (currentScroll > lastScroll) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const keepNavbarVisibleDuringScroll = () => {
    isNavScrolling.current = true;
    setHidden(false);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isNavScrolling.current = false;
      scrollTimeout.current = null;
    }, 3000);
  };

  const handleNavClick = (event, sectionId) => {
  event.preventDefault();

  const section = document.getElementById(sectionId);

  if (!section) return;

  closeMenu();
  setActiveSection(sectionId);
  keepNavbarVisibleDuringScroll();

  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  const sectionPosition =
  section.getBoundingClientRect().top +
  window.scrollY -
  navbarHeight +75;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
};

  const handleHomeClick = (event) => {
    event.preventDefault();

    closeMenu();
    setActiveSection("home");
    keepNavbarVisibleDuringScroll();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <a
        className={`navbar-logo ${activeSection === "home" ? "active" : ""}`}
        href="#home"
        onClick={handleHomeClick}
      >
        BaderAlt.
      </a>

      <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(event) => handleNavClick(event, link.id)}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="navbar-contact"
        href="#contact"
        onClick={(event) => handleNavClick(event, "contact")}
      >
        Let’s Talk
      </a>

      <button
        type="button"
        className={menuOpen ? "menu-button open" : "menu-button"}
        onClick={() => setMenuOpen((currentValue) => !currentValue)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export default Navbar;