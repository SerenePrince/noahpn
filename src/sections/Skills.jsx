// src/sections/Skills.jsx
import { useEffect } from "react";
import { motion, usePresence, useReducedMotion } from "motion/react";
import { FiCode, FiShare2, FiZap, FiGitBranch } from "react-icons/fi";

const GROUPS = [
  {
    title: "Frontend",
    Icon: FiCode,
    items: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    Icon: FiShare2,
    items: ["Java", "REST APIs", "Maven"],
  },
  {
    title: "Power Platform",
    Icon: FiZap,
    items: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "SharePoint (Lists)",
      "Microsoft 365 (SharePoint, Teams)",
    ],
  },
  {
    title: "Workflow",
    Icon: FiGitBranch,
    items: [
      "Git",
      "Azure DevOps",
      "Linux (Ubuntu / WSL)",
      "Automation Workflows",
      "Testing Practices",
      "Scrum",
    ],
  },
];

function Skills({ mode = "nav" }) {
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

  const hiddenFromRight = "120%";
  const hiddenFromTop = "-120%";

  const totalExitTime = reduce ? 0 : exitLineDelay + durLine + 0.05;

  useEffect(() => {
    if (isPresent) return;
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, totalExitTime]);

  return (
    <motion.section
      id="skills"
      aria-labelledby="skills-title"
      className="h-full min-h-0"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col px-4 py-[clamp(1.5rem,4vh,4rem)] sm:px-6">
        {/* Single scroll owner (scrollbars hidden on mobile via global rule + class) */}
        <div className="desktop-scroll min-h-0 flex-1">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <div className="overflow-hidden">
              <motion.h2
                id="skills-title"
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
                Skills
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
                Tools I've used in work, school, and side projects.
              </motion.p>
            </div>
          </div>
          {/* Content row */}
          <div className="min-h-0">
            <div className="flex min-h-0 min-w-0 flex-col lg:flex-row">
              {/* CONTENT COLUMN (LEFT on lg+) */}
              <div className="relative min-w-0 flex-1 overflow-hidden pr-px pb-px">
                {/* <lg: top line + drop-in grid */}
                <div className="pt-[clamp(1.25rem,3vh,2rem)] lg:hidden">
                  <div
                    aria-hidden="true"
                    className="relative h-px w-full overflow-hidden"
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

                  <div className="mt-[clamp(1.25rem,3vh,2rem)] overflow-hidden pb-px">
                    <motion.div
                      className="will-change-transform"
                      initial={reduce ? { y: 0 } : { y: hiddenFromTop }}
                      animate={isPresent ? { y: 0 } : { y: hiddenFromTop }}
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
                      <SkillGrid />
                    </motion.div>
                  </div>
                </div>

                {/* lg+: slide in from right */}
                <div className="hidden lg:block">
                  <div className="overflow-hidden pb-px">
                    <motion.div
                      className="will-change-transform"
                      initial={reduce ? { x: 0 } : { x: hiddenFromRight }}
                      animate={isPresent ? { x: 0 } : { x: hiddenFromRight }}
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
                      <div className="pr-10">
                        <SkillGrid />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* LINE COLUMN (RIGHT on lg+) */}
              <div className="shrink-0">
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
            </div>
          </div>
          <div className="h-[clamp(0.75rem,2vh,1.25rem)]" aria-hidden="true" />
        </div>
      </div>
    </motion.section>
  );
}

function SkillGrid() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-[clamp(1rem,2.5vh,2rem)] md:grid-cols-2">
      {GROUPS.map((group) => {
        const Icon = group.Icon;
        const id = `skills-${slug(group.title)}`;

        return (
          <section
            key={group.title}
            aria-labelledby={id}
            className="min-w-0 rounded-xl border border-current p-5"
          >
            <div className="flex items-center gap-3">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
              <h3
                id={id}
                className="text-sm font-semibold tracking-widest uppercase"
              >
                {group.title}
              </h3>
            </div>

            <ul className="mt-5 grid min-w-0 grid-cols-1 gap-3" role="list">
              {group.items.map((label) => (
                <li key={label} className="min-w-0">
                  <span className="wrap-break-words min-w-0 text-sm tracking-wide opacity-80">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function slug(s) {
  return s.toLowerCase().replace(/\s+/g, "-");
}

export default Skills;
