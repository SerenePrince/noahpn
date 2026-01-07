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
    id: "fintrac-openapi",
    title: "OpenAPI Sync Automation",
    org: "FINTRAC",
    subtitle: "Java • Maven • REST • OpenAPI",
    cardSummary:
      "Automated OpenAPI spec validation by comparing documentation against live API responses.",
    details: {
      overview:
        "Built an internal automation tool to keep OpenAPI (Swagger) YAML documentation accurate by synchronizing documented fields with live endpoint data.",
      tech: [
        "Java",
        "Maven",
        "REST APIs",
        "OpenAPI / Swagger (YAML)",
        "Config-driven automation",
      ],
      whatIDid: [
        "Designed a configuration format mapping endpoints to their YAML schema sections.",
        "Fetched live API responses, extracted the relevant arrays/fields, and compared them with documented values.",
        "Wrote a safe update pipeline that generates a new YAML file with updated fields, preserving structure.",
        "Added support for inline notes/comments, intentional removals, and manual additions via config.",
      ],
      impact: [
        "Reduced a recurring manual workflow from ~8 hours to seconds of runtime plus ~10 minutes of config upkeep.",
        "Improved reliability of internal developer documentation and lowered maintenance overhead.",
        "Tool is still used periodically by the team for ongoing documentation validation.",
      ],
      notes: [
        "Internal system — no source code or endpoints are publicly shareable.",
        "Focus was correctness, repeatability, and maintainability over flashy UI.",
      ],
    },
  },
  {
    id: "dnd-dashboard",
    title: "Training Completion Dashboard",
    org: "DND",
    subtitle: "Power BI • DAX • Data Modeling",
    cardSummary:
      "Consolidated messy training records into a clean Power BI dashboard with drilldowns and trend reporting.",
    details: {
      overview:
        "Designed a reporting dashboard for course completions and demographics, built on a data model structured for ongoing growth and refresh.",
      tech: [
        "Power BI",
        "Power Query",
        "DAX",
        "Data modeling",
        "Excel ingestion",
      ],
      whatIDid: [
        "Ingested and cleaned 10,000+ rows across multiple Excel sources.",
        "Derived fiscal year and fiscal quarter fields from completion dates for time-based reporting.",
        "Normalized bilingual course titles by grouping on course codes to avoid double-counting.",
        "Built measures for totals, language splits, delivery methods, and demographic breakdowns.",
        "Created interactive filters/search so selecting a course updates charts and tables across pages.",
        "Documented refresh/publish steps so stakeholders could maintain it independently.",
      ],
      impact: [
        "Delivered a clear, client-ready dashboard for leadership and stakeholder reporting.",
        "Reduced time spent manually summarizing completions and trends from spreadsheets.",
        "Enabled consistent reporting over time as new data sources are added.",
      ],
      notes: [
        "Internal data — visuals and dataset can’t be publicly shared.",
        "Work emphasized data quality, correctness, and stakeholder usability.",
      ],
    },
  },
  {
    id: "dnd-tracker",
    title: "Initiative Tracker + Automation",
    org: "DND",
    subtitle: "Power Apps • Power Automate • SharePoint",
    cardSummary:
      "Replaced spreadsheet tracking with a Power App and automated workflows for consistent project status updates.",
    details: {
      overview:
        "Built an internal initiative tracking application to centralize project data and automate status changes, improving visibility and reducing manual coordination.",
      tech: [
        "Power Apps",
        "Power Automate",
        "SharePoint Lists",
        "Microsoft 365",
        "Agile/Scrum",
      ],
      whatIDid: [
        "Designed and implemented the SharePoint List schema to support project, client, funding, and security info.",
        "Built the Power App’s core screens and forms for viewing and updating initiatives.",
        "Implemented Power Automate flows for approvals, holds, cancellations, and maintenance states.",
        "Added quality-of-life automation (e.g., notifications, collaboration setup actions) to reduce manual steps.",
        "Worked from design handoffs and integrated UI changes into the app.",
        "Participated in Agile ceremonies and delivered regular demos explaining feature value and tradeoffs.",
      ],
      impact: [
        "Replaced manual spreadsheet tracking with a structured, UX-focused application.",
        "Improved data consistency across SharePoint and downstream reporting.",
        "Application remains in production and used as part of ongoing initiative management.",
      ],
      notes: [
        "Internal tooling — no public links or screenshots.",
        "Role covered both delivery and cross-functional collaboration in a small team.",
      ],
    },
  },
];

function Projects({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const [isPresent, safeToRemove] = usePresence();

  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  const pause = reduce ? 0 : 0;
  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durContent = reduce ? 0 : isFast ? 0.55 : 0.9;
  const gap = reduce ? 0 : isFast ? 0.08 : 0.12;

  const lineRevealStart = pause;
  const contentRevealStart = reduce ? 0 : lineRevealStart + durLine + gap;

  const exitContentDelay = reduce ? 0 : 0;
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

  useEffect(() => {
    if (isPresent) return;
    setActiveId(null);
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, totalExitTime]);

  useEffect(() => {
    if (!activeId) return;

    closeBtnRef.current?.focus();

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [activeId]);

  function openDetails(id, triggerEl) {
    lastTriggerRef.current = triggerEl ?? null;
    setActiveId(id);
  }

  function closeDetails() {
    setActiveId(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus?.());
  }

  function trapTab(e) {
    if (e.key !== "Tab") return;

    const root = dialogRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    const list = Array.from(focusables).filter(
      (el) =>
        el &&
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true",
    );

    if (list.length === 0) return;

    const first = list[0];
    const last = list[list.length - 1];
    const active = document.activeElement;

    if (e.shiftKey) {
      if (active === first || active === root) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function onPanelKeyDown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDetails();
      return;
    }
    trapTab(e);
  }

  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-title"
      className="h-full min-h-0"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col px-6 py-[clamp(1.5rem,4vh,4rem)]">
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
                Selected case studies from internal tools and reporting work.
              </motion.p>
            </div>
          </div>

          {/* Row fills remaining height on lg+ */}
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
                          onOpen={(triggerEl) => openDetails(cs.id, triggerEl)}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeItem ? (
                    <motion.div
                      ref={dialogRef}
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby={`${activeItem.id}-panel-title`}
                      aria-describedby={`${activeItem.id}-panel-meta`}
                      tabIndex={-1}
                      onKeyDown={onPanelKeyDown}
                      className="absolute top-0 right-px bottom-0 left-0 z-10 flex min-h-0 flex-col rounded-xl border border-current bg-bg p-6 lg:left-10"
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
                    >
                      <div className="flex items-start justify-between gap-6 border-b border-current pb-6">
                        <div className="min-w-0">
                          <h3
                            id={`${activeItem.id}-panel-title`}
                            className="wrap-break-words text-[clamp(1.25rem,1.8vw,1.5rem)] font-semibold tracking-wide"
                          >
                            {activeItem.title}
                          </h3>
                          <p
                            id={`${activeItem.id}-panel-meta`}
                            className="mt-2 text-sm tracking-wide opacity-70"
                          >
                            {activeItem.org} • {activeItem.subtitle}
                          </p>
                        </div>

                        <button
                          ref={closeBtnRef}
                          type="button"
                          onClick={closeDetails}
                          className="shrink-0 underline underline-offset-4"
                          aria-label="Close case study details"
                        >
                          Close
                        </button>
                      </div>

                      <div className="mt-8 min-h-0 flex-1 overflow-auto pr-2">
                        <div className="space-y-10">
                          <section
                            aria-labelledby={`${activeItem.id}-overview`}
                          >
                            <h4
                              id={`${activeItem.id}-overview`}
                              className="text-xs font-semibold tracking-widest uppercase opacity-70"
                            >
                              Overview
                            </h4>
                            <p className="wrap-break-words mt-3 text-sm leading-relaxed opacity-80">
                              {activeItem.details.overview}
                            </p>
                          </section>

                          <section aria-labelledby={`${activeItem.id}-tech`}>
                            <h4
                              id={`${activeItem.id}-tech`}
                              className="text-xs font-semibold tracking-widest uppercase opacity-70"
                            >
                              Tech
                            </h4>
                            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-80">
                              {activeItem.details.tech.map((t) => (
                                <li key={t} className="wrap-break-words">
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section aria-labelledby={`${activeItem.id}-what`}>
                            <h4
                              id={`${activeItem.id}-what`}
                              className="text-xs font-semibold tracking-widest uppercase opacity-70"
                            >
                              What I did
                            </h4>
                            <ul className="mt-3 space-y-3 text-sm leading-relaxed opacity-80">
                              {activeItem.details.whatIDid.map((b) => (
                                <li key={b} className="wrap-break-words">
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section aria-labelledby={`${activeItem.id}-impact`}>
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

                          {activeItem.details.notes?.length ? (
                            <section aria-labelledby={`${activeItem.id}-notes`}>
                              <h4
                                id={`${activeItem.id}-notes`}
                                className="text-xs font-semibold tracking-widest uppercase opacity-70"
                              >
                                Notes
                              </h4>
                              <ul className="mt-3 space-y-2 text-sm leading-relaxed opacity-70">
                                {activeItem.details.notes.map((b) => (
                                  <li key={b} className="wrap-break-words">
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ) : null}

                          <p className="sr-only">
                            Press Escape to close. Use Tab to move through
                            controls.
                          </p>
                        </div>
                      </div>
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

function CaseStudyCard({ item, onOpen, isOpen }) {
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
            className="underline underline-offset-4"
            aria-haspopup="dialog"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={`${item.id}-panel-title`}
          >
            View details
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
