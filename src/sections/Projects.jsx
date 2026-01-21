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
      "Replaced spreadsheet tracking with an internal app that keeps initiative status up to date automatically.",
    details: {
      summary:
        "An internal application that replaced spreadsheet-based tracking with a single place to manage initiatives, reduce manual updates, and keep status information consistent.",
      tools: [
        "Power Apps",
        "Power Automate",
        "SharePoint Lists",
        "Agile / Scrum",
      ],
      myRole: [
        "Designed the data structure and built the main app screens used to view and update initiative information.",
        "Created automated workflows for approvals, status changes, notifications, and maintenance states to reduce manual follow-ups.",
        "Worked within an Agile team, collaborating with designers and stakeholders and running demos to explain decisions and tradeoffs.",
      ],
      impact: [
        "Replaced spreadsheet-based tracking with a clearer, more reliable internal application.",
        "Made it easier for teams to keep initiative status accurate without constant manual coordination.",
        "The application remains in production and is used for ongoing initiative management.",
      ],
      constraints: [
        "Internal tooling — no public links or screenshots.",
        "Work balanced hands-on development with stakeholder collaboration.",
      ],
    },
  },
  {
    id: "dnd-dashboard",
    title: "Training Completion Reporting Dashboard",
    org: "DND",
    subtitle: "Power BI • Reporting • Data Cleanup",
    cardSummary:
      "Cleaned up scattered training data and turned it into clear reporting leaders could rely on.",
    details: {
      summary:
        "A reporting dashboard built to clean up fragmented training records and provide leadership with clear, repeatable reporting.",
      tools: ["Power BI", "Power Query", "DAX", "Data modeling"],
      myRole: [
        "Cleaned and combined 10,000+ training records from multiple Excel files to create a reliable data foundation.",
        "Built a data model that supports regular refreshes and future growth as new data is added.",
        "Created filters and key metrics for totals, trends, language splits, and demographics, and documented the refresh process for handoff.",
      ],
      impact: [
        "Delivered a dashboard used for leadership and stakeholder reporting.",
        "Replaced manual spreadsheet summaries with repeatable, reliable reporting.",
        "Improved trust in the accuracy and usability of training data.",
      ],
      constraints: [
        "Internal data — no shareable visuals or datasets.",
        "Focus on data quality and usability for non-technical users.",
      ],
    },
  },
  {
    id: "fintrac-openapi",
    title: "API Documentation Sync Automation",
    org: "FINTRAC",
    subtitle: "Java • Internal Automation • Documentation",
    cardSummary:
      "Built a small automation to keep internal API documentation aligned with real system behaviour.",
    details: {
      summary:
        "A small Java-based automation that compares internal documentation with live system responses and updates documentation safely when they drift out of sync.",
      tools: [
        "Java",
        "Maven",
        "REST API consumption",
        "Configuration-driven automation",
      ],
      myRole: [
        "Built the automation from scratch to replace a slow, manual documentation review process.",
        "Used a configuration file to control which endpoints and fields were checked, keeping the logic simple and flexible.",
        "Added support for exceptions, notes, and manual overrides so the tool could handle real-world edge cases safely.",
      ],
      impact: [
        "Reduced a documentation review task from hours of manual work to seconds.",
        "Made internal API documentation more reliable for developers using the systems.",
        "The tool became part of the team's regular documentation maintenance workflow.",
      ],
      constraints: [
        "Internal system — no public source code, endpoints, or screenshots.",
        "Focus was on correctness and safety rather than UI or API design.",
      ],
    },
  },
];

function Projects({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const [isPresent, safeToRemove] = usePresence();

  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  const pause = 0;
  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durContent = reduce ? 0 : isFast ? 0.55 : 0.9;
  const gap = reduce ? 0 : isFast ? 0.08 : 0.12;

  const lineRevealStart = pause;
  const contentRevealStart = reduce ? 0 : lineRevealStart + durLine + gap;

  const exitContentDelay = 0;
  const exitLineDelay = reduce ? 0 : durContent + exitContentDelay + 0.05;

  const hiddenX = "-115%";
  const totalExitTime = reduce ? 0 : exitLineDelay + durLine + 0.05;

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
                    <motion.div
                      className="fixed inset-0 z-50 lg:absolute lg:inset-0 lg:z-10"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: reduce ? 0 : 0.12 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: reduce ? 0 : 0.1 },
                      }}
                    >
                      {/* Backdrop only on mobile */}
                      <button
                        type="button"
                        aria-label="Close case study"
                        onClick={closeDetails}
                        className="absolute inset-0 bg-bg/80 lg:hidden"
                        tabIndex={-1}
                      />

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
                        exit={{
                          x: hiddenX,
                          transition: {
                            duration: durContent,
                            ease,
                            delay: exitContentDelay,
                          },
                        }}
                        transition={{ duration: durContent, ease }}
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

                            {/* More button-like Back button */}
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

                        {/* Scroll area (scrollbar hidden on mobile) */}
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
                    </motion.div>
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
      className="relative h-[clamp(14.25rem,24vh,16.5rem)] min-h-0 rounded-xl border border-current p-5"
      aria-labelledby={`${item.id}-title`}
    >
      <div className="flex h-full min-h-0 min-w-0 flex-col">
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

        <div className="mt-3 flex items-center justify-between gap-4">
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
