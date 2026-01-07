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
  about: "About",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
};

function App() {
  const [active, setActive] = useState("home");

  // Tracks which sections have been shown at least once
  const visitedRef = useRef(new Set());

  // Focus target for skip link + view changes
  const mainRef = useRef(null);

  // Prevent focus steal on initial mount
  const didMountRef = useRef(false);

  // Determine mode BEFORE we mark it visited
  const mode = visitedRef.current.has(active) ? "nav" : "load";

  useEffect(() => {
    visitedRef.current.add(active);
  }, [active]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return; // do not move focus on initial paint
    }

    // Reset any internal scroll containers (if a section uses one)
    if (mainRef.current) mainRef.current.scrollTop = 0;

    // Move focus to main so the new content is announced
    mainRef.current?.focus();
  }, [active]);

  function navigate(next) {
    if (next === active) return;
    setActive(next);
  }

  const pageTitle = PAGE_TITLES[active] ?? "Section";

  return (
    <div className="text- min-h-dvh overflow-hidden bg-bg">
      <a
        href="#main"
        className="bg-bg] sr-only z-60 border border-current px-3 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-6"
      >
        Skip to content
      </a>

      <Header active={active} onNavigate={navigate} mode={mode} />

      {/* Announces view changes for screen readers (no visual impact). */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pageTitle} section
      </p>

      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        role="main"
        aria-label="Main content"
        className="h-[calc(100dvh-4rem)] overflow-hidden outline-none"
      >
        <AnimatePresence mode="wait">
          {active === "home" && <Hero key="home" mode={mode} />}
          {active === "about" && <About key="about" mode={mode} />}
          {active === "experience" && (
            <Experience key="experience" mode={mode} />
          )}
          {active === "projects" && <Projects key="projects" mode={mode} />}
          {active === "skills" && <Skills key="skills" mode={mode} />}
          {active === "contact" && <Contact key="contact" mode={mode} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
