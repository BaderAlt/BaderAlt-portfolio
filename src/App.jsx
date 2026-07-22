import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import AmbientBackground from "./components/AmbientBackground";


function App() {
  return (
    <>
      <Loader />
      <AmbientBackground />
      <ScrollProgress />
      <MouseGlow />
      <BackToTop />

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;