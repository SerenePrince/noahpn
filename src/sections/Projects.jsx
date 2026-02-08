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
    subtitle: "Internal App • Workflow Automation",
    cardSummary:
      "Replaced spreadsheet-based tracking with a single internal tool that keeps initiative status, ownership, and approvals up to date automatically.",
    details: {
      summary:
        "A production internal tool that replaced scattered spreadsheets and notes with one reliable place to track initiatives—what they are, who owns them, what stage they’re in, and what needs approval. The focus was on making status trustworthy and reducing manual follow-ups.",
      tools: [
        "Internal web app development",
        "Workflow automation",
        "Configuration-driven logic",
        "Agile / Scrum",
      ],
      myRole: [
        "Built the core application experience—screens, form logic, and the main management page—based on teammate-provided designs and stakeholder needs.",
        "Designed the underlying data structure to store initiative details such as status, ownership, funding info, and lifecycle flags.",
        "Implemented automated workflows for approvals, status changes, notifications, and maintenance states so the system stayed consistent without manual follow-ups.",
        "Added small quality-of-life automations (for example: creating collaboration spaces and notifying developers when they were assigned) to reduce repetitive coordination work.",
        "Built an automated check that reflected real development progress in the tracker, reducing manual status updates and edge-case errors.",
        "Worked in a small Scrum team: clarified changing requirements, handled edge cases early, and ran demos that explained implementation trade-offs in plain language.",
      ],
      impact: [
        "Replaced fragmented tracking with a single source of truth used for day-to-day initiative management.",
        "Reduced manual coordination by automating approvals, status updates, and team notifications.",
        "Improved visibility into progress and ownership for team leads and stakeholders.",
        "Delivered a tool people actually used by prioritizing reliability and low-maintenance workflows.",
      ],
      constraints: [
        "Internal tooling — no public links, screenshots, or code.",
        "Built under government security and process constraints.",
      ],
    },
  },
  {
    id: "dnd-dashboard",
    title: "Training Completion Reporting Dashboard",
    org: "DND",
    subtitle: "Reporting • Data Cleanup",
    cardSummary:
      "Turned messy training spreadsheets into clear, repeatable reporting that non-technical leaders could trust and use.",
    details: {
      summary:
        "A reporting dashboard built to help leadership understand training completion totals and trends without manual spreadsheet work. The main challenge was making fragmented data consistent and reliable enough to be refreshed over time.",
      tools: [
        "Data cleanup and preparation",
        "Reporting dashboards",
        "Basic data modeling",
        "Documentation for handoff",
      ],
      myRole: [
        "Learned the reporting toolset quickly to meet a deadline, focusing on shipping a working MVP first and refining based on feedback.",
        "Cleaned and standardized exported training data from multiple spreadsheet sources so it could be used reliably.",
        "Structured the data so reporting stayed consistent across fiscal years and could be refreshed over time.",
        "Built summaries that showed totals and trends in plain language for non-technical users.",
        "Worked with stakeholders to understand what decisions they needed to make and adjusted the dashboard to support those needs.",
        "Documented the refresh and troubleshooting process to make the dashboard easier to maintain and hand off.",
      ],
      impact: [
        "Replaced manual spreadsheet summaries with a single, repeatable reporting tool.",
        "Gave leadership a clearer view of totals and trends without needing technical help to interpret the data.",
        "Improved confidence in reporting by standardizing cleanup rules and making the process repeatable.",
        "Enabled easier year-over-year reporting through a structure designed for ongoing refreshes.",
      ],
      constraints: [
        "Internal data — no shareable visuals or datasets.",
        "Source data required significant cleanup and interpretation before analysis.",
        "Dashboard needed to be understandable for non-technical users.",
      ],
    },
  },
  {
    id: "fintrac-openapi",
    title: "API Documentation Sync Automation",
    org: "FINTRAC",
    subtitle: "Java • Backend Automation",
    cardSummary:
      "Built a Java automation that checks internal API documentation against live system data and updates it safely when it drifts.",
    details: {
      summary:
        "A backend automation that kept internal API documentation accurate by comparing documented values against live system responses. When documentation drifted out of sync, the tool could update values safely without breaking intentional exceptions or notes.",
      tools: [
        "Java",
        "Maven",
        "REST API consumption",
        "Configuration-driven automation",
      ],
      myRole: [
        "Replaced a manual documentation validation process with a repeatable Java automation that ran quickly and consistently.",
        "Consumed internal API endpoints to retrieve authoritative values used by real forms and workflows.",
        "Compared existing documentation files against live system responses to detect when documented values drifted from real behaviour.",
        "Implemented safe update logic that handled additions, removals, and missing values without overwriting intentional exceptions.",
        "Designed a configuration-driven approach so endpoints, fields, and overrides could be changed without modifying code.",
        "Built in guardrails and edge-case handling to keep updates predictable and safe for the team.",
      ],
      impact: [
        "Reduced a task that took hours of manual effort to seconds of automated verification.",
        "Improved the accuracy and reliability of internal documentation used by developers.",
        "Made documentation maintenance safer by centralizing logic and supporting exceptions without fragile one-off edits.",
      ],
      constraints: [
        "Internal system — no public source code, endpoints, or documentation.",
        "Focus was on correctness and safety rather than building new APIs or user interfaces.",
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
                className="text-base tracking-wide opacity-70"
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
                              <p className="mt-2 text-base tracking-wide opacity-70">
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
                              className="text-base tracking-wide underline underline-offset-4 opacity-80 hover:opacity-100"
                              aria-label="Back to projects"
                            >
                              ← Back to projects
                            </button>
                          </div>
                        </div>

                        <div className="min-h-0 flex-1 overflow-auto pr-0 lg:pr-2">
                          <div className="space-y-10">
                            <section
                              aria-labelledby={`${activeItem.id}-summary`}
                            >
                              <h4
                                id={`${activeItem.id}-summary`}
                                className="text-base font-semibold tracking-widest uppercase opacity-70"
                              >
                                Summary
                              </h4>
                              <p className="wrap-break-words mt-3 text-base leading-relaxed opacity-80">
                                {activeItem.details.summary}
                              </p>
                            </section>

                            <section aria-labelledby={`${activeItem.id}-tools`}>
                              <h4
                                id={`${activeItem.id}-tools`}
                                className="text-base font-semibold tracking-widest uppercase opacity-70"
                              >
                                Tools
                              </h4>
                              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-base opacity-80">
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
                                className="text-base font-semibold tracking-widest uppercase opacity-70"
                              >
                                My Role
                              </h4>
                              <ul className="mt-3 space-y-3 text-base leading-relaxed opacity-80">
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
                                className="text-base font-semibold tracking-widest uppercase opacity-70"
                              >
                                Impact
                              </h4>
                              <ul className="mt-3 space-y-3 text-base leading-relaxed opacity-80">
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
                                  className="text-base font-semibold tracking-widest uppercase opacity-70"
                                >
                                  Constraints
                                </h4>
                                <ul className="mt-3 space-y-2 text-base leading-relaxed opacity-70">
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
            <p className="text-sm tracking-wide opacity-70">{item.org}</p>
          </div>

          <p className="wrap-break-words mt-2 text-base tracking-wide opacity-70">
            {item.subtitle}
          </p>
        </div>

        <p className="wrap-break-words mt-3 min-h-0 flex-1 text-base leading-relaxed opacity-80">
          {item.cardSummary}
        </p>

        <div className="mt-3 flex items-center justify-between gap-4 pt-2">
          <button
            ref={btnRef}
            type="button"
            onClick={() => onOpen(btnRef.current)}
            className="text-base tracking-wide underline underline-offset-4 opacity-80 hover:opacity-100"
            aria-haspopup="dialog"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={dialogId}
          >
            Read case study →
          </button>

          <span aria-hidden="true" className="text-sm tracking-wide opacity-70">
            +
          </span>
        </div>
      </div>
    </article>
  );
}

export default Projects;
