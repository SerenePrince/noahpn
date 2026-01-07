// src/sections/Hero.jsx
import { motion, useReducedMotion } from "motion/react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import whiteLogo from "../assets/icons/logo-mark.light.svg";
import blackLogo from "../assets/icons/logo-mark.dark.svg";

function Hero({ mode = "load" }) {
  const reduce = useReducedMotion();
  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  // Timings (line completes before content reveals)
  const pause = reduce ? 0 : isFast ? 0.15 : 1.0;
  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durContent = reduce ? 0 : isFast ? 0.55 : 0.9;
  const gap = reduce ? 0 : isFast ? 0.08 : 0.12;

  const lineRevealStart = pause;
  const contentRevealStart = reduce ? 0 : lineRevealStart + durLine + gap;

  // Exit: content hides first, then line retracts
  const exitContentDelay = 0;
  const exitLineDelay = reduce ? 0 : durContent + exitContentDelay + 0.05;

  return (
    <section className="h-full min-h-0" aria-labelledby="hero-title">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-[clamp(1.5rem,4vh,4rem)]">
        {/* MAIN CONTENT */}
        <div className="flex flex-col items-center gap-[clamp(1.25rem,3vh,2.5rem)] lg:flex-row lg:gap-0">
          {/* Left side */}
          <div className="min-w-0 overflow-hidden lg:basis-[60%]">
            <motion.div
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{
                x: reduce ? 0 : "100%",
                transition: {
                  duration: durContent,
                  ease,
                  delay: exitContentDelay,
                },
              }}
              transition={{
                duration: durContent,
                ease,
                delay: contentRevealStart,
              }}
              className="flex flex-col gap-3 py-2 text-center will-change-transform lg:pr-20"
            >
              <picture>
                <source
                  media="(prefers-color-scheme: dark)"
                  srcSet={whiteLogo}
                />
                <img
                  src={blackLogo}
                  alt="Noah Park-Nguyen logo"
                  width={48}
                  height={48}
                  className="mx-auto h-12 w-12"
                  draggable="false"
                  decoding="async"
                />
              </picture>

              <div className="space-y-2">
                <h1
                  id="hero-title"
                  className="font-semibold tracking-wide uppercase"
                >
                  Noah Park-Nguyen
                </h1>
                <p className="tracking-wide opacity-70">
                  Application Developer
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider: horizontal on smaller desktop widths, vertical on large */}
          <div
            aria-hidden="true"
            className="relative h-px w-full overflow-hidden lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={{
                x: reduce ? 0 : "-100%",
                transition: { duration: durLine, ease, delay: exitLineDelay },
              }}
              transition={{ duration: durLine, ease, delay: lineRevealStart }}
            />
          </div>

          <div
            aria-hidden="true"
            className="relative hidden h-[min(18rem,40vh)] w-px shrink-0 overflow-hidden lg:block"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { y: 0 } : { y: "-100%" }}
              animate={{ y: 0 }}
              exit={{
                y: reduce ? 0 : "-100%",
                transition: { duration: durLine, ease, delay: exitLineDelay },
              }}
              transition={{ duration: durLine, ease, delay: lineRevealStart }}
            />
          </div>

          {/* Right side */}
          <div className="min-w-0 overflow-hidden lg:basis-[40%]">
            <motion.div
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={{
                x: reduce ? 0 : "-100%",
                transition: {
                  duration: durContent,
                  ease,
                  delay: exitContentDelay,
                },
              }}
              transition={{
                duration: durContent,
                ease,
                delay: contentRevealStart,
              }}
              className="py-2 will-change-transform lg:pl-20"
            >
              <address className="not-italic">
                <ul className="space-y-4 text-center text-base tracking-wide lg:text-left">
                  <li>
                    <a
                      href="mailto:noahparknguyen@gmail.com"
                      aria-label="Email Noah at noahparknguyen@gmail.com"
                      className="group inline-flex items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiGmail
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="underline-offset-4 group-hover:underline">
                        noahparknguyen@gmail.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://linkedin.com/in/nparknguyen"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open LinkedIn profile: linkedin.com/in/nparknguyen (opens in a new tab)"
                      className="group inline-flex items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiLinkedin
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="underline-offset-4 group-hover:underline">
                        linkedin.com/in/nparknguyen
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/SerenePrince"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub profile: github.com/SerenePrince (opens in a new tab)"
                      className="group inline-flex items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiGithub
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="underline-offset-4 group-hover:underline">
                        github.com/SerenePrince
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </address>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM META */}
        <div className="mt-[clamp(1.5rem,4vh,3rem)]">
          <div
            aria-hidden="true"
            className="relative h-px w-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={{
                x: reduce ? 0 : "-100%",
                transition: { duration: durLine, ease, delay: exitLineDelay },
              }}
              transition={{ duration: durLine, ease, delay: lineRevealStart }}
            />
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={reduce ? { y: 0 } : { y: "-100%" }}
              animate={{ y: 0 }}
              exit={{
                y: reduce ? 0 : "-100%",
                transition: {
                  duration: durContent,
                  ease,
                  delay: exitContentDelay,
                },
              }}
              transition={{
                duration: durContent,
                ease,
                delay: contentRevealStart,
              }}
              className="pt-[clamp(1rem,2.5vh,2rem)] text-center will-change-transform"
            >
              <p className="mx-auto max-w-3xl text-sm tracking-wide opacity-70">
                Internal apps and automation tools for government and enterprise
                teams.
              </p>
              <p className="mt-4 text-sm tracking-wide opacity-70">
                Coquitlam, BC • Open to remote work and relocation • Graduating
                April 2026
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
