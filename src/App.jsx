// src/App.jsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const PAGE_TITLES = {
  home: "Home",
  projects: "Projects",
  experience: "Experience",
  about: "About",
  skills: "Skills",
  contact: "Contact",
};

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const key = window.location.hash.replace("#", "");
    if (key && PAGE_TITLES[key]) setActive(key);
  }, []);

  const visitedRef = useRef(new Set());
  const mainRef = useRef(null);
  const didMountRef = useRef(false);

  const mode = visitedRef.current.has(active) ? "nav" : "load";

  useEffect(() => {
    visitedRef.current.add(active);
  }, [active]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    mainRef.current?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });

    // Announce view change
    mainRef.current?.focus();
  }, [active]);

  function navigate(next) {
    if (next === active) return;
    setActive(next);
    window.history.replaceState(null, "", `#${next}`);
  }

  const pageTitle = PAGE_TITLES[active] ?? "Section";

  return (
    <div className="min-h-dvh overflow-hidden bg-bg text-fg">
      <a
        href="#main"
        className="sr-only z-60 border border-current bg-bg px-3 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-6"
      >
        Skip to content
      </a>

      <Header active={active} onNavigate={navigate} mode={mode} />

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pageTitle} section
      </p>

      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        role="main"
        aria-label="Main content"
        className="h-[calc(100dvh-4rem)] overflow-hidden overflow-y-auto outline-none lg:overflow-hidden lg:overflow-y-hidden"
      >
        <AnimatePresence mode="wait">
          {active === "home" && <Hero key="home" mode={mode} />}
          {active === "projects" && <Projects key="projects" mode={mode} />}
          {active === "experience" && (
            <Experience key="experience" mode={mode} />
          )}
          {active === "about" && <About key="about" mode={mode} />}
          {active === "skills" && <Skills key="skills" mode={mode} />}
          {active === "contact" && <Contact key="contact" mode={mode} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
