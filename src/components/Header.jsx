// src/components/Header.jsx
import { motion, useReducedMotion } from "motion/react";
import whiteLogo from "../assets/icons/logo-mark.light.svg";
import blackLogo from "../assets/icons/logo-mark.dark.svg";

function Header({ active, onNavigate, mode = "load" }) {
  const reduce = useReducedMotion();
  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  const items = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "contact", label: "Contact" },
  ];

  const initialPause = reduce ? 0 : isFast ? 0.12 : 0.5;

  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durNav = reduce ? 0 : isFast ? 0.55 : 0.8;

  const lineRevealStart = initialPause;

  const navRevealStart = reduce
    ? 0
    : lineRevealStart + durLine + (isFast ? 0.08 : 0.12);

  const exitNavDelay = reduce ? 0 : 0;
  const exitLineDelay = reduce ? 0 : durNav + exitNavDelay + 0.05;

  return (
    <header className="z-50 h-16 bg-bg">
      <div className="relative">
        <div className="overflow-hidden">
          <motion.nav
            aria-label="Primary"
            className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
            initial={reduce ? { y: 0 } : { y: "100%" }}
            animate={{ y: 0 }}
            exit={{
              y: reduce ? 0 : "100%",
              transition: { duration: durNav, ease, delay: exitNavDelay },
            }}
            transition={{ duration: durNav, ease, delay: navRevealStart }}
          >
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="flex items-center"
              aria-label="Go to Home"
              aria-controls="main"
            >
              <picture>
                <source
                  media="(prefers-color-scheme: dark)"
                  srcSet={whiteLogo}
                />
                <img
                  src={blackLogo}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                  draggable="false"
                  decoding="async"
                />
              </picture>
            </button>

            <ul className="flex items-center gap-8">
              {items.map((item) => {
                const isActive = item.key === active;

                return (
                  <li key={item.key} className="group">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.key)}
                      aria-current={isActive ? "page" : undefined}
                      aria-controls="main"
                      className="relative leading-none tracking-wide underline-offset-4 hover:underline focus-visible:outline-offset-4"
                    >
                      {/* Single accessible label */}
                      <span className="sr-only">{item.label}</span>

                      {/* Width anchor (layout only) */}
                      <span
                        aria-hidden="true"
                        className="invisible font-semibold"
                      >
                        {item.label}
                      </span>

                      {/* Visible label (inactive) */}
                      <span
                        aria-hidden="true"
                        className={[
                          "pointer-events-none absolute inset-0 flex items-center justify-center",
                          "font-normal",
                          isActive
                            ? "opacity-0"
                            : "opacity-70 group-hover:opacity-100",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>

                      {/* Visible label (active) */}
                      <span
                        aria-hidden="true"
                        className={[
                          "pointer-events-none absolute inset-0 flex items-center justify-center",
                          "font-semibold",
                          isActive ? "underline opacity-100" : "opacity-0",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </div>

        <div
          aria-hidden="true"
          className="relative h-px w-full overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-current"
            initial={reduce ? { x: 0 } : { x: "-100%" }}
            animate={{ x: 0 }}
            exit={{
              x: reduce ? 0 : "-100%",
              transition: { duration: durLine, ease, delay: exitLineDelay },
            }}
            transition={{ duration: durLine, ease, delay: lineRevealStart }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
