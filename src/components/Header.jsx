// src/components/Header.jsx
import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import whiteLogo from "../assets/icons/logo-mark.light.svg";
import blackLogo from "../assets/icons/logo-mark.dark.svg";

function Header({ active, onNavigate, mode = "load" }) {
  const reduce = useReducedMotion();
  const isInitial = mode === "load";
  const ease = [0.16, 1, 0.3, 1];

  const items = [
    { key: "home", label: "Home" },
    { key: "projects", label: "Projects" },
    { key: "experience", label: "Experience" },
    { key: "about", label: "About" },
    { key: "skills", label: "Skills" },
    { key: "contact", label: "Contact" },
  ];

  // Always slow (no fast mode)
  const initialPause = reduce ? 0 : isInitial ? 1 : 0;
  const durLine = reduce ? 0 : 0.75;
  const durNav = reduce ? 0 : 0.75;

  // Enter: sequential only on initial load; simultaneous on nav
  const lineRevealStart = initialPause;
  const navRevealStart = reduce
    ? 0
    : isInitial
      ? lineRevealStart + durLine + 0.12
      : lineRevealStart;

  // Exit: always simultaneous (matches your updated system)
  const exitNavDelay = 0;
  const exitLineDelay = 0;

  // Mobile menu state
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuTitleId = useId();
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);

  function closeMenu() {
    setOpen(false);
  }

  function handleNavigate(key) {
    onNavigate(key);
    closeMenu();
  }

  function trapTab(e) {
    if (e.key !== "Tab") return;

    const root = menuPanelRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );

    const list = Array.from(focusables).filter(
      (el) => el && el.getAttribute("aria-hidden") !== "true",
    );

    if (list.length === 0) return;

    const first = list[0];
    const last = list[list.length - 1];
    const current = document.activeElement;

    if (e.shiftKey) {
      if (current === first || current === root) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (current === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  // Close on Esc, lock page scroll, and manage focus
  useEffect(() => {
    if (!open) return;

    const prevOverflowHtml = document.documentElement.style.overflow;
    const prevOverflowBody = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      const first =
        menuPanelRef.current?.querySelector('button[data-menuitem="true"]') ??
        menuPanelRef.current;
      first?.focus?.();
    }, 0);

    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);

      document.documentElement.style.overflow = prevOverflowHtml;
      document.body.style.overflow = prevOverflowBody;

      menuButtonRef.current?.focus?.();
    };
  }, [open]);

  // If route changes while menu is open, close it
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <header className="z-50 h-16 bg-bg">
      <div className="relative">
        <div className="overflow-x-visible overflow-y-hidden">
          <motion.nav
            aria-label="Primary"
            className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6"
            initial={reduce ? { y: 0 } : { y: "100%" }}
            animate={{ y: 0 }}
            exit={{
              y: reduce ? 0 : "100%",
              transition: { duration: durNav, ease, delay: exitNavDelay },
            }}
            transition={{ duration: durNav, ease, delay: navRevealStart }}
          >
            {/* Logo (left) */}
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="flex h-10 w-10 items-center justify-center"
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

            {/* Desktop nav */}
            <ul className="ml-auto hidden items-center gap-8 sm:flex">
              {items.map((item) => {
                const isActive = item.key === active;

                return (
                  <li key={item.key} className="group">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.key)}
                      aria-current={isActive ? "page" : undefined}
                      aria-controls="main"
                      className="relative h-10 px-1 leading-none tracking-wide underline-offset-4 hover:underline"
                    >
                      <span className="sr-only">{item.label}</span>

                      <span
                        aria-hidden="true"
                        className="invisible font-semibold"
                      >
                        {item.label}
                      </span>

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

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="ml-auto inline-flex h-10 items-center gap-2 px-2 sm:hidden"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={open ? menuId : undefined}
            >
              <span className="text-base tracking-wide opacity-80">
                {open ? "Close" : "Menu"}
              </span>

              <span aria-hidden="true" className="grid gap-1">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </button>
          </motion.nav>
        </div>

        {/* Divider line */}
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

        {/* Mobile menu overlay + panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              className="fixed inset-0 z-50 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: reduce ? 0 : 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: reduce ? 0 : 0.12 },
              }}
            >
              <button
                type="button"
                className="absolute inset-0 cursor-default bg-bg/80"
                onClick={closeMenu}
                aria-label="Close menu"
                tabIndex={-1}
              />

              <motion.div
                id={menuId}
                ref={menuPanelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={menuTitleId}
                className="absolute top-4 right-4 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-current bg-bg p-4"
                initial={reduce ? { y: 0, opacity: 1 } : { y: -8, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: reduce ? 0 : 0.18, ease },
                }}
                exit={{
                  y: reduce ? 0 : -6,
                  opacity: 0,
                  transition: { duration: reduce ? 0 : 0.14, ease },
                }}
                onKeyDown={trapTab}
                tabIndex={-1}
              >
                <p
                  id={menuTitleId}
                  className="text-sm tracking-wide opacity-70"
                >
                  Navigation
                </p>

                <ul className="mt-3 divide-y divide-current">
                  {items.map((item) => {
                    const isActive = item.key === active;

                    return (
                      <li key={item.key}>
                        <button
                          type="button"
                          data-menuitem="true"
                          onClick={() => handleNavigate(item.key)}
                          aria-current={isActive ? "page" : undefined}
                          className={[
                            "flex w-full items-center justify-between py-3 text-left tracking-wide",
                            isActive
                              ? "font-semibold"
                              : "opacity-80 hover:opacity-100",
                          ].join(" ")}
                        >
                          <span>{item.label}</span>
                          {isActive ? (
                            <span className="text-sm opacity-70">Current</span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;