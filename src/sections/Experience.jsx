// src/sections/Experience.jsx
import { motion, useReducedMotion } from "motion/react";

const WORK_ITEMS = [
  {
    id: "dnd-2025",
    title: "Application Developer",
    org: "Department of National Defence (DND)",
    type: "Hybrid",
    dates: "Feb 2025 – Dec 2025",
  },
  {
    id: "ac-tester-2024",
    title: "Software Tester",
    org: "Algonquin College",
    type: "Remote",
    dates: "Sep 2024 – Dec 2024",
  },
  {
    id: "fintrac-2024",
    title: "Application Developer",
    org: "FINTRAC",
    type: "Hybrid",
    dates: "Jan 2024 – Apr 2024",
  },
];

const EDU_ITEMS = [
  {
    id: "algonquin-2023-2026",
    school: "Algonquin College",
    program:
      "Advanced Diploma • Computer Engineering Technology – Computer Science",
    dates: "Jan 2023 – Apr 2026 (expected)",
  },
  {
    id: "activities",
    school: "Activities",
    program: "Intramural volleyball • Drop-in games and tournaments",
    dates: "",
  },
];

function Experience({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  const pause = reduce ? 0 : 0;
  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durContent = reduce ? 0 : isFast ? 0.45 : 0.65;
  const gap = reduce ? 0 : isFast ? 0.08 : 0.12;

  const lineRevealStart = pause;
  const contentRevealStart = reduce ? 0 : lineRevealStart + durLine + gap;

  const exitContentDelay = 0;
  const exitLineDelay = reduce ? 0 : durContent + exitContentDelay + 0.05;

  const headerEnterT = {
    duration: durContent,
    ease,
    delay: contentRevealStart,
  };
  const headerExitT = { duration: durContent, ease, delay: exitContentDelay };

  const lineEnterT = { duration: durLine, ease, delay: lineRevealStart };

  const stagger = reduce ? 0 : 0.06;

  return (
    <motion.section
      id="experience"
      aria-labelledby="experience-title"
      className="h-full min-h-0 overflow-x-hidden"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col px-6 py-[clamp(1.5rem,4vh,4rem)]">
        {/* One scroll wrapper for the whole section (only scrolls on <lg via .desktop-scroll utility) */}
        <div className="desktop-scroll min-h-0 flex-1">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="overflow-hidden">
              <motion.h2
                id="experience-title"
                className="font-semibold tracking-wide"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                exit={
                  reduce ? { y: 0 } : { y: "100%", transition: headerExitT }
                }
                transition={headerEnterT}
                style={{ willChange: "transform" }}
              >
                Experience
              </motion.h2>
            </div>

            <div className="mt-2 overflow-hidden">
              <motion.p
                className="text-sm tracking-wide opacity-70"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                exit={
                  reduce ? { y: 0 } : { y: "100%", transition: headerExitT }
                }
                transition={
                  reduce
                    ? headerEnterT
                    : { ...headerEnterT, delay: contentRevealStart + 0.06 }
                }
                style={{ willChange: "transform" }}
              >
                Professional and academic background
              </motion.p>
            </div>
          </div>

          {/* Column headers (lg+ only) */}
          <div className="mb-8 hidden grid-cols-2 lg:grid">
            <div className="overflow-hidden">
              <motion.h3
                className="mr-10 ml-auto max-w-104 text-center text-sm font-semibold tracking-widest uppercase"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                exit={
                  reduce ? { y: 0 } : { y: "100%", transition: headerExitT }
                }
                transition={headerEnterT}
                style={{ willChange: "transform" }}
              >
                Work
              </motion.h3>
            </div>

            <div className="overflow-hidden">
              <motion.h3
                className="mr-auto ml-10 max-w-104 text-center text-sm font-semibold tracking-widest uppercase"
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                exit={
                  reduce ? { y: 0 } : { y: "100%", transition: headerExitT }
                }
                transition={headerEnterT}
                style={{ willChange: "transform" }}
              >
                Education
              </motion.h3>
            </div>
          </div>

          {/* Content area (no inner scrolling; let the wrapper handle it on <lg) */}
          <div className="relative min-h-0 overflow-x-hidden">
            {/* Center spine (lg+ only) */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 lg:block">
              <div className="relative h-full w-px overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-current opacity-30 will-change-transform"
                  initial={reduce ? { y: 0 } : { y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={
                    reduce
                      ? { y: 0 }
                      : {
                          y: "-100%",
                          transition: {
                            duration: durLine,
                            ease,
                            delay: exitLineDelay,
                          },
                        }
                  }
                  transition={lineEnterT}
                />
              </div>
            </div>

            {/* Small desktop: stacked */}
            <div className="flex flex-col gap-10 lg:hidden">
              <StackedColumn
                title="Work"
                items={WORK_ITEMS}
                side="work"
                reduce={reduce}
                ease={ease}
                durContent={durContent}
                contentRevealStart={contentRevealStart}
                exitContentDelay={exitContentDelay}
                stagger={stagger}
              />
              <StackedColumn
                title="Education"
                items={EDU_ITEMS}
                side="edu"
                reduce={reduce}
                ease={ease}
                durContent={durContent}
                contentRevealStart={contentRevealStart}
                exitContentDelay={exitContentDelay}
                stagger={stagger}
              />
            </div>

            {/* Large desktop: two columns */}
            <div className="hidden min-h-0 grid-cols-2 items-stretch lg:grid">
              <div className="flex min-h-0 flex-col gap-[clamp(1.25rem,3vh,2.5rem)]">
                {WORK_ITEMS.map((item, idx) => (
                  <MaskedCard
                    key={item.id}
                    side="work"
                    idx={idx}
                    reduce={reduce}
                    ease={ease}
                    durContent={durContent}
                    enterBaseDelay={contentRevealStart}
                    exitDelay={exitContentDelay}
                    stagger={stagger}
                    className="mr-10 ml-auto max-w-104 rounded-xl border border-current p-5"
                  >
                    <WorkContent item={item} />
                  </MaskedCard>
                ))}
              </div>

              <div className="flex min-h-0 flex-col gap-[clamp(1.25rem,3vh,2.5rem)] pt-6">
                {EDU_ITEMS.map((item, idx) => (
                  <MaskedCard
                    key={item.id}
                    side="edu"
                    idx={idx}
                    reduce={reduce}
                    ease={ease}
                    durContent={durContent}
                    enterBaseDelay={contentRevealStart}
                    exitDelay={exitContentDelay}
                    stagger={stagger}
                    className="mr-auto ml-10 max-w-104 rounded-xl border border-current p-5"
                  >
                    <EduContent item={item} />
                  </MaskedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function StackedColumn({
  title,
  items,
  side,
  reduce,
  ease,
  durContent,
  contentRevealStart,
  exitContentDelay,
  stagger,
}) {
  const headerEnterT = {
    duration: durContent,
    ease,
    delay: contentRevealStart,
  };
  const headerExitT = { duration: durContent, ease, delay: exitContentDelay };

  return (
    <div>
      <div className="overflow-hidden">
        <motion.h3
          className="text-sm font-semibold tracking-widest uppercase"
          initial={reduce ? { y: 0 } : { y: "100%" }}
          animate={{ y: 0 }}
          exit={reduce ? { y: 0 } : { y: "100%", transition: headerExitT }}
          transition={headerEnterT}
          style={{ willChange: "transform" }}
        >
          {title}
        </motion.h3>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {items.map((item, idx) => (
          <MaskedCard
            key={item.id}
            side={side}
            idx={idx}
            reduce={reduce}
            ease={ease}
            durContent={durContent}
            enterBaseDelay={contentRevealStart}
            exitDelay={exitContentDelay}
            stagger={stagger}
            className="rounded-xl border border-current p-5"
          >
            {side === "work" ? (
              <WorkContent item={item} />
            ) : (
              <EduContent item={item} />
            )}
          </MaskedCard>
        ))}
      </div>
    </div>
  );
}

function MaskedCard({
  side,
  idx,
  reduce,
  ease,
  durContent,
  enterBaseDelay,
  exitDelay,
  stagger,
  className,
  children,
}) {
  const hiddenX = side === "work" ? "115%" : "-115%";
  const enterDelay =
    enterBaseDelay + (reduce ? 0 : Math.min(idx * stagger, 0.18));

  return (
    <div className="overflow-hidden">
      <motion.article
        className={`will-change-transform ${className}`}
        initial={reduce ? { x: 0 } : { x: hiddenX }}
        animate={{ x: 0 }}
        exit={{
          x: reduce ? 0 : hiddenX,
          transition: { duration: durContent, ease, delay: exitDelay },
        }}
        transition={{ duration: durContent, ease, delay: enterDelay }}
      >
        {children}
      </motion.article>
    </div>
  );
}

function WorkContent({ item }) {
  return (
    <div className="text-left lg:text-right">
      <h4 className="text-base font-semibold tracking-wide">{item.title}</h4>
      <p className="mt-1 text-sm tracking-wide opacity-70">
        {item.org} • {item.type}
      </p>
      <p className="mt-1 text-sm tracking-wide opacity-70">{item.dates}</p>
    </div>
  );
}

function EduContent({ item }) {
  return (
    <div className="text-left">
      <h4 className="text-base font-semibold tracking-wide">{item.school}</h4>
      <p className="mt-1 text-sm tracking-wide opacity-70">{item.program}</p>
      {item.dates ? (
        <p className="mt-1 text-sm tracking-wide opacity-70">{item.dates}</p>
      ) : null}
    </div>
  );
}

export default Experience;
