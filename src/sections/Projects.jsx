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
      "A Power App backed by SharePoint to centralize initiative tracking, ownership, and progress — replacing a desktop full of notes, Word documents, and Excel sheets.",
    details: {
      summary:
        "Our DevOps Manager had every ongoing initiative living somewhere different — desktop notes, Word documents, scattered Excel sheets. Nothing connected, and getting a clear picture of who owned what meant digging. I worked closely with them to understand how the team actually tracked work, then built something that fit those workflows rather than forcing new ones.",
      tools: [
        "Power Apps",
        "Power Automate",
        "SharePoint Lists",
        "Azure DevOps",
        "Microsoft Teams",
      ],
      myRole: [
        "Implemented Power App screens and forms from design handoff, working from Figma mockups created by a teammate.",
        "Designed the SharePoint List structure to hold the details that mattered: client and org info, team roles, status flags, and initiative progress.",
        "Built Power Automate flows to handle the coordination work — team notifications on assignment, automatic channel creation for new initiatives, and other workflow helpers.",
        "Connected the tracker to Azure DevOps so sprint and iteration data stayed current without manual updates.",
        "Demoed completed features to our supervisor weekly, taking feedback directly into the next sprint.",
      ],
      impact: [
        "Gave the team one place to track every initiative — ownership, status, and progress all visible without digging through files.",
        "Reduced coordination overhead by automating the setup and notification work that would otherwise fall on individuals.",
        "Made it easier for leads and stakeholders to see what was active and where things stood.",
        "Fit the way the team already worked, rather than asking them to change their habits to match the tool.",
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
    subtitle: "Power BI • Data Cleanup",
    cardSummary:
      "A Power BI dashboard that turned flat course completion records into fiscal-year trends, demographic breakdowns, and summary numbers leadership could read at a glance.",
    details: {
      summary:
        "The source data was a query result — one row per course completion, no grouping, no context, and several fields either missing or buried in encoded values. Before anything could be reported on, the data needed to be interpreted. I worked through what was there, filled in what was missing, and built a dashboard that gave leadership a clear picture of training progress on their own terms.",
      tools: ["Power BI", "Excel"],
      myRole: [
        "Received a flat query result — one row per course completion — and worked through what was missing or unreadable before any reporting could begin.",
        "Decoded encoded completion fields to extract useful attributes like demographics, language, and course details that weren't visible in the raw export.",
        "Identified that English and French versions of the same course were being counted separately, inflating totals and making cross-language reporting unreliable.",
        "Went back to the client for a full course list, discovered both versions shared a course code, and used that to unify completions under a single total — with language filters preserved.",
        "Added fiscal year and quarter columns using date logic so trends could be tracked over time.",
        "Built a dashboard with a high-level summary for leadership and deeper pages for trends, demographics, and the underlying data.",
      ],
      impact: [
        "Gave leadership a clear view of training completion across the organization — no spreadsheet work, no manual interpretation.",
        "Fixed a counting problem that had been splitting bilingual course completions into separate, misleading totals.",
        "Made fiscal-year and quarterly trends visible for the first time, giving the team a way to track progress over time.",
        "Delivered something non-technical stakeholders could open and understand on their own.",
      ],
      constraints: [
        "Internal data — no shareable visuals or datasets.",
        "Source data required cleanup and interpretation before it was usable.",
        "Dashboard had to be self-explanatory for a non-technical audience.",
      ],
    },
  },
  {
    id: "fintrac-openapi",
    title: "API Documentation Sync Automation",
    org: "FINTRAC",
    subtitle: "Java • Backend Automation",
    cardSummary:
      "A Java tool to automate API documentation checks — hitting live endpoints and flagging anywhere the documentation had drifted from actual responses.",
    details: {
      summary:
        "The team maintained OpenAPI documentation for their internal APIs, but keeping it accurate was a manual process — someone had to hit endpoints and verify whether responses still matched what was documented. I built a small Java tool to handle that comparison automatically. My first coop, first project, and largely independent work from implementation through to delivery.",
      tools: ["Java", "Maven", "REST APIs"],
      myRole: [
        "Built a Java application to hit REST endpoints, compare live responses against documented fields, and flag discrepancies.",
        "Implemented a JSON config file — suggested by my supervisor — so endpoints and fields could be managed without touching the underlying code.",
        "Added support for notes and overrides in the config so intentional exceptions could be recorded and preserved across runs.",
        "Delivered the project independently, with limited guidance and no existing codebase to work from.",
      ],
      impact: [
        "Replaced a slow, inconsistent process with something that could be run in minutes.",
        "Improved confidence in internal API documentation used daily by the development team.",
        "Left the tool easy to maintain — new endpoints and fields added through config alone.",
      ],
      constraints: [
        "Internal system — no public source code, endpoints, or documentation.",
        "Focused on correctness and reliability rather than building new APIs or interfaces.",
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
                Selected case studies from co-op work — no public code due to
                government security constraints.
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
