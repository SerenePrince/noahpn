// src/sections/Projects.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  usePresence,
  useReducedMotion,
} from "motion/react";

const CASE_STUDIES = [
  {
    id: "dnd-tracker",
    title: "Initiative Tracker + Automated Workflows",
    org: "DND",
    subtitle: "Power Apps • Power Automate • SharePoint",
    cardSummary:
      "Replaced scattered spreadsheet tracking with an internal app that keeps initiative status accurate automatically.",
    details: {
      summary:
        "An internal application built to replace fragmented spreadsheet and note-based tracking with a single system for managing initiatives, their lifecycle, and team involvement.",
      tools: [
        "Power Apps",
        "Power Automate",
        "SharePoint Lists",
        "Agile / Scrum",
      ],
      myRole: [
        "Built the core Power App used to create, view, and manage initiatives, implementing designs provided by a teammate and translating them into working screens and logic.",
        "Designed the SharePoint data structure used to store initiative details such as status, client information, funding, team assignments, and lifecycle flags.",
        "Developed Power Automate workflows to handle approvals, status changes, notifications, and maintenance states, reducing manual follow-ups.",
        "Implemented automation for operational tasks such as creating Teams channels when initiatives are created and notifying developers when they are assigned.",
        "Owned the main management page where users update initiative state and trigger automation flows, forming the foundation of day-to-day usage.",
        "Worked within a small Agile team, collaborating with designers and stakeholders and running demos to explain implementation decisions and tradeoffs.",
      ],
      impact: [
        "Replaced fragmented spreadsheet tracking with a single, reliable internal application.",
        "Reduced manual coordination by automating status updates, approvals, and team notifications.",
        "Improved visibility into initiative progress and ownership for team leads and stakeholders.",
        "The application remains in production and is used for ongoing initiative management.",
      ],
      constraints: [
        "Internal tooling — no public links or screenshots.",
        "Built within government security and process constraints.",
      ],
    },
  },
  {
    id: "dnd-dashboard",
    title: "Training Completion Reporting Dashboard",
    org: "DND",
    subtitle: "Power BI • Reporting • Data Cleanup",
    cardSummary:
      "Cleaned up fragmented training data and turned it into clear, repeatable reporting leaders could rely on.",
    details: {
      summary:
        "A Power BI dashboard built to transform fragmented training completion data into clear, repeatable reporting for leadership and stakeholders.",
      tools: ["Power BI", "Power Query", "DAX", "Data modeling"],
      myRole: [
        "Cleaned and prepared exported training data from multiple Excel files so it could be reliably used in Power BI.",
        "Built a data model that consolidates training records across fiscal years and supports ongoing refreshes as new data is added.",
        "Created DAX calculations to aggregate course completions by language, demographic group, fiscal year, and quarter.",
        "Linked English and French course records using shared course codes to produce accurate combined totals.",
        "Derived demographic groupings (military, civilian, contractor) by interpreting encoded completion data.",
        "Designed dashboard pages with clear charts, tables, and filters to make trends and totals easy to understand for non-technical users.",
        "Documented the refresh and troubleshooting process to support long-term maintenance and handoff.",
      ],
      impact: [
        "Replaced manual spreadsheet summaries with a single, repeatable reporting dashboard.",
        "Provided leadership with clear visibility into training completion totals and trends.",
        "Improved confidence in training data by standardizing how records are cleaned, grouped, and reported.",
        "Enabled easier year-over-year reporting through documented refresh processes.",
      ],
      constraints: [
        "Internal data — no shareable visuals or datasets.",
        "Source data required significant cleanup and interpretation before analysis.",
        "Dashboard designed for non-technical users.",
      ],
    },
  },
  {
    id: "fintrac-openapi",
    title: "API Documentation Sync Automation",
    org: "FINTRAC",
    subtitle: "Java • Internal Automation • Documentation",
    cardSummary:
      "Built a Java automation to keep internal API documentation aligned with live system data.",
    details: {
      summary:
        "A Java-based automation that compares internal API documentation with live endpoint responses and safely updates documented values when they drift out of sync.",
      tools: [
        "Java",
        "Maven",
        "Internal API consumption",
        "YAML parsing and file generation",
      ],
      myRole: [
        "Built a Java-based automation to replace a manual process of validating internal API documentation against live endpoint data.",
        "Consumed internal API endpoints to retrieve authoritative values used to populate form fields such as dropdown options.",
        "Parsed existing YAML documentation files and compared documented values with live system responses.",
        "Implemented logic to safely update documentation when discrepancies were detected, ensuring fields stayed aligned with real system behaviour.",
        "Designed a configuration-driven approach allowing endpoints, fields, exceptions, and notes to be defined without changing code.",
        "Handled edge cases such as missing values, removals, and manual overrides to reflect real-world documentation needs.",
      ],
      impact: [
        "Reduced a documentation validation task from hours of manual work to seconds of automated verification.",
        "Improved the accuracy and reliability of internal API documentation used by developers.",
        "Made documentation updates safer and more repeatable by centralizing logic and configuration.",
      ],
      constraints: [
        "Internal system — no public source code, endpoints, or documentation.",
        "Focus on correctness and safety rather than UI or API design.",
      ],
    },
  },
];

function Projects({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const [isPresent, safeToRemove] = usePresence();

  const isInitial = mode === "load";
  const easeIntro = [0.16, 1, 0.3, 1];
  const easeFast = [0.25, 0.9, 0.25, 1];

  const ease = isInitial ? easeIntro : easeFast;

  // Keep the big hero pause only on the very first website load (enter only)
  const pause = reduce ? 0 : isInitial ? 0.3 : 0;
  const durLine = reduce ? 0 : isInitial ? 0.6 : 0.45;
  const durContent = reduce ? 0 : isInitial ? 0.6 : 0.45;
  const gap = reduce ? 0 : isInitial ? 0.3 : 0;

  // Enter: sequential only on initial load; simultaneous on nav
  const lineRevealStart = pause;
  const contentRevealStart = reduce
    ? 0
    : isInitial
      ? lineRevealStart + durLine + gap
      : lineRevealStart;

  const panelDur = reduce ? 0 : 0.25; // match fast content transitions
  const panelEase = easeFast; // fast easing for UI interactions

  // Exit: ALWAYS simultaneous
  const exitContentDelay = 0;
  const exitLineDelay = 0;

  const hiddenX = "-115%";

  // Used only to delay safeToRemove; since exit is simultaneous now,
  // this is basically "max animation duration"
  const totalExitTime = reduce ? 0 : Math.max(durLine, durContent) + 0.05;

  const items = useMemo(() => CASE_STUDIES, []);
  const [activeId, setActiveId] = useState(null);

  const lastTriggerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  const activeItem = useMemo(
    () => items.find((x) => x.id === activeId) ?? null,
    [items, activeId],
  );

  const dialogId = activeItem ? `${activeItem.id}-dialog` : null;
  const descId = activeItem ? `${activeItem.id}-dialog-desc` : null;

  useEffect(() => {
    if (isPresent) return;
    setActiveId(null);

    // allow AnimatePresence to wait for exit
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, totalExitTime]);

  useEffect(() => {
    if (!activeId) return;

    const prevOverflowHtml = document.documentElement.style.overflow;
    const prevOverflowBody = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => closeBtnRef.current?.focus?.(), 0);

    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDetails();
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = prevOverflowHtml;
      document.body.style.overflow = prevOverflowBody;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  function openDetails(id, triggerEl) {
    lastTriggerRef.current = triggerEl ?? null;
    setActiveId(id);
  }

  function closeDetails() {
    setActiveId(null);
  }

  function trapTab(e) {
    if (e.key !== "Tab") return;

    const root = dialogRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
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

  function onDialogKeyDown(e) {
    trapTab(e);
  }

  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-title"
      className="h-full min-h-0"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col px-4 py-[clamp(1.5rem,4vh,4rem)] sm:px-6">
        <div className="desktop-scroll flex min-h-0 flex-1 flex-col">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="overflow-hidden">
              <motion.h2
                id="projects-title"
                className="font-semibold tracking-wide"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={isPresent ? { y: 0 } : { y: "100%" }}
                transition={
                  isPresent
                    ? { duration: durContent, ease, delay: contentRevealStart }
                    : { duration: durContent, ease, delay: exitContentDelay }
                }
                style={{ willChange: "transform" }}
              >
                Projects
              </motion.h2>
            </div>

            <div className="mt-2 overflow-hidden">
              <motion.p
                className="text-sm tracking-wide opacity-70"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={isPresent ? { y: 0 } : { y: "100%" }}
                transition={
                  isPresent
                    ? {
                        duration: durContent,
                        ease,
                        delay: reduce ? 0 : contentRevealStart + 0.06,
                      }
                    : { duration: durContent, ease, delay: exitContentDelay }
                }
                style={{ willChange: "transform" }}
              >
                Selected case studies from internal applications, automation,
                and reporting work.
              </motion.p>
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            <div className="flex h-full min-h-0 min-w-0 flex-col lg:flex-row">
              {/* LINE COLUMN */}
              <div className="shrink-0">
                <div
                  aria-hidden="true"
                  className="relative h-px w-full overflow-hidden lg:hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-current opacity-30 will-change-transform"
                    initial={reduce ? { x: 0 } : { x: "-100%" }}
                    animate={isPresent ? { x: 0 } : { x: "-100%" }}
                    transition={
                      isPresent
                        ? { duration: durLine, ease, delay: lineRevealStart }
                        : { duration: durLine, ease, delay: exitLineDelay }
                    }
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="relative hidden h-full w-px overflow-hidden lg:block"
                >
                  <motion.div
                    className="absolute inset-0 bg-current opacity-30 will-change-transform"
                    initial={reduce ? { y: 0 } : { y: "-100%" }}
                    animate={isPresent ? { y: 0 } : { y: "-100%" }}
                    transition={
                      isPresent
                        ? { duration: durLine, ease, delay: lineRevealStart }
                        : { duration: durLine, ease, delay: exitLineDelay }
                    }
                  />
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="relative min-h-0 min-w-0 flex-1 overflow-visible pr-px pb-px lg:overflow-hidden">
                <div className="pt-[clamp(1rem,2.2vh,1.5rem)] lg:pt-0 lg:pl-10">
                  <motion.div
                    className="will-change-transform"
                    initial={reduce ? { x: 0 } : { x: hiddenX }}
                    animate={isPresent ? { x: 0 } : { x: hiddenX }}
                    transition={
                      isPresent
                        ? {
                            duration: durContent,
                            ease,
                            delay: contentRevealStart,
                          }
                        : {
                            duration: durContent,
                            ease,
                            delay: exitContentDelay,
                          }
                    }
                  >
                    <div className="grid min-w-0 grid-cols-1 gap-[clamp(0.85rem,2vh,1.5rem)] md:grid-cols-2 lg:grid-cols-3">
                      {items.map((cs) => (
                        <CaseStudyCard
                          key={cs.id}
                          item={cs}
                          isOpen={activeId === cs.id}
                          dialogId={`${cs.id}-dialog`}
                          onOpen={(triggerEl) => openDetails(cs.id, triggerEl)}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Overlay / Dialog */}
                <AnimatePresence
                  onExitComplete={() => {
                    lastTriggerRef.current?.focus?.();
                  }}
                >
                  {activeItem ? (
                    <div className="fixed inset-0 z-50 lg:absolute lg:inset-0 lg:z-10">
                      <motion.div
                        id={dialogId}
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${activeItem.id}-panel-title`}
                        aria-describedby={descId}
                        tabIndex={-1}
                        onKeyDown={onDialogKeyDown}
                        style={{ willChange: "transform" }}
                        initial={reduce ? { x: 0 } : { x: hiddenX }}
                        animate={{ x: 0 }}
                        exit={{ x: hiddenX }}
                        transition={{ duration: panelDur, ease: panelEase }}
                        className={[
                          "absolute inset-0 flex min-h-0 flex-col border border-current bg-bg p-4 sm:p-6",
                          "lg:top-0 lg:right-px lg:bottom-0 lg:left-10 lg:rounded-xl lg:p-6",
                        ].join(" ")}
                      >
                        {/* Sticky header keeps close available while scrolling */}
                        <div className="sticky top-0 z-10 bg-bg pb-4 lg:static lg:pb-6">
                          <div className="flex items-start justify-between gap-6 border-b border-current pb-4 lg:pb-6">
                            <div className="min-w-0">
                              <h3
                                id={`${activeItem.id}-panel-title`}
                                className="wrap-break-words text-[clamp(1.25rem,1.8vw,1.5rem)] font-semibold tracking-wide"
                              >
                                {activeItem.title}
                              </h3>
                              <p className="mt-2 text-sm tracking-wide opacity-70">
                                {activeItem.org} • {activeItem.subtitle}
                              </p>
                              <p id={descId} className="sr-only">
                                Case study details. Press Escape to close.
                              </p>
                            </div>

                            <button
                              ref={closeBtnRef}
                              type="button"
                              onClick={closeDetails}
                              className="text-sm tracking-wide underline underline-offset-4 opacity-80 hover:opacity-100"
                              aria-label="Back to projects"
                            >
                              ← Back to projects
                            </button>
                          </div>
                        </div>

                        <div className="min-h-0 flex-1 overflow-auto pr-0 lg:pr-2">
                          <div className="space-y-10 pt-4 lg:pt-8">
                            <section
                              aria-labelledby={`${activeItem.id}-summary`}
                            >
                              <h4
                                id={`${activeItem.id}-summary`}
                                className="text-xs font-semibold tracking-widest uppercase opacity-70"
                              >
                                Summary
                              </h4>
                              <p className="wrap-break-words mt-3 text-sm leading-relaxed opacity-80">
                                {activeItem.details.summary}
                              </p>
                            </section>

                            <section aria-labelledby={`${activeItem.id}-tools`}>
                              <h4
                                id={`${activeItem.id}-tools`}
                                className="text-xs font-semibold tracking-widest uppercase opacity-70"
                              >
                                Tools
                              </h4>
                              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-80">
                                {activeItem.details.tools.map((t) => (
                                  <li key={t} className="wrap-break-words">
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section aria-labelledby={`${activeItem.id}-role`}>
                              <h4
                                id={`${activeItem.id}-role`}
                                className="text-xs font-semibold tracking-widest uppercase opacity-70"
                              >
                                My Role
                              </h4>
                              <ul className="mt-3 space-y-3 text-sm leading-relaxed opacity-80">
                                {activeItem.details.myRole.map((b) => (
                                  <li key={b} className="wrap-break-words">
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section
                              aria-labelledby={`${activeItem.id}-impact`}
                            >
                              <h4
                                id={`${activeItem.id}-impact`}
                                className="text-xs font-semibold tracking-widest uppercase opacity-70"
                              >
                                Impact
                              </h4>
                              <ul className="mt-3 space-y-3 text-sm leading-relaxed opacity-80">
                                {activeItem.details.impact.map((b) => (
                                  <li key={b} className="wrap-break-words">
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </section>

                            {activeItem.details.constraints?.length ? (
                              <section
                                aria-labelledby={`${activeItem.id}-constraints`}
                              >
                                <h4
                                  id={`${activeItem.id}-constraints`}
                                  className="text-xs font-semibold tracking-widest uppercase opacity-70"
                                >
                                  Constraints
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm leading-relaxed opacity-70">
                                  {activeItem.details.constraints.map((b) => (
                                    <li key={b} className="wrap-break-words">
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              </section>
                            ) : null}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CaseStudyCard({ item, onOpen, isOpen, dialogId }) {
  const btnRef = useRef(null);

  return (
    <article
      className="relative flex min-h-[clamp(14.25rem,24vh,16.5rem)] min-w-0 flex-col rounded-xl border border-current p-5"
      aria-labelledby={`${item.id}-title`}
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="min-w-0">
          <div className="flex min-w-0 items-baseline justify-between gap-4">
            <h3
              id={`${item.id}-title`}
              className="wrap-break-words min-w-0 text-base font-semibold tracking-wide"
            >
              {item.title}
            </h3>
            <p className="text-xs tracking-wide opacity-70">{item.org}</p>
          </div>

          <p className="wrap-break-words mt-2 text-sm tracking-wide opacity-70">
            {item.subtitle}
          </p>
        </div>

        <p className="wrap-break-words mt-3 min-h-0 flex-1 text-sm leading-relaxed opacity-80">
          {item.cardSummary}
        </p>

        <div className="mt-3 flex items-center justify-between gap-4 pt-2">
          <button
            ref={btnRef}
            type="button"
            onClick={() => onOpen(btnRef.current)}
            className="text-sm tracking-wide underline underline-offset-4 opacity-80 hover:opacity-100"
            aria-haspopup="dialog"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={dialogId}
          >
            Read case study →
          </button>

          <span aria-hidden="true" className="text-xs tracking-wide opacity-70">
            +
          </span>
        </div>
      </div>
    </article>
  );
}

export default Projects;
