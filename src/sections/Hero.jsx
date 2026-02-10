// src/sections/Hero.jsx
import { useEffect } from "react";
import { motion, useReducedMotion, usePresence } from "motion/react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import whiteLogo from "../assets/icons/logo-mark.light.svg";
import blackLogo from "../assets/icons/logo-mark.dark.svg";

function Hero({ mode = "load" }) {
  const reduce = useReducedMotion();

  // Manual presence: MUST call safeToRemove() when exiting
  const [isPresent, safeToRemove] = usePresence();
  const isInitial = mode === "load";
  const isExiting = !isPresent;

  const easeIntro = [0.16, 1, 0.3, 1];
  const easeFast = [0.25, 0.9, 0.25, 1];

  const ease = isInitial ? easeIntro : easeFast;

  // Keep the big hero pause only on the very first website load (enter only)
  const pause = reduce ? 0 : isInitial ? 1.0 : 0;
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

  // Exit: ALWAYS simultaneous (what you wanted when leaving Home)
  const exitContentDelay = 0;
  const exitLineDelay = 0;

  // Tell AnimatePresence when it's safe to remove this view
  const totalExitTime = reduce ? 0 : Math.max(durLine, durContent) + 0.05;

  useEffect(() => {
    if (isPresent) return;
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, totalExitTime]);

  return (
    <section className="h-full min-h-0" aria-labelledby="hero-title">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-start px-4 py-[clamp(1.5rem,4vh,4rem)] sm:px-6 lg:justify-center">
        <div className="flex flex-col items-center gap-[clamp(1.25rem,3vh,2.5rem)] lg:flex-row lg:gap-0">
          <div className="min-w-0 overflow-hidden lg:basis-[60%]">
            <motion.div
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={isPresent ? { x: 0 } : { x: "100%" }}
              transition={{
                duration: durContent,
                ease,
                delay: isPresent ? contentRevealStart : exitContentDelay,
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
                <p className="text-xl tracking-wide opacity-70">
                  Software & Application Developer
                </p>
              </div>
            </motion.div>
          </div>

          <div
            aria-hidden="true"
            className="relative h-px w-full overflow-hidden lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={isPresent ? { x: 0 } : { x: "-100%" }}
              transition={{
                duration: durLine,
                ease,
                delay: isPresent ? lineRevealStart : exitLineDelay,
              }}
            />
          </div>

          <div
            aria-hidden="true"
            className="relative hidden h-[min(18rem,40vh)] w-px shrink-0 overflow-hidden lg:block"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { y: 0 } : { y: "-100%" }}
              animate={isPresent ? { y: 0 } : { y: "-100%" }}
              transition={{
                duration: durLine,
                ease,
                delay: isPresent ? lineRevealStart : exitLineDelay,
              }}
            />
          </div>

          <div className="min-w-0 overflow-hidden lg:basis-[40%]">
            <motion.div
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={isPresent ? { x: 0 } : { x: "-100%" }}
              transition={{
                duration: durContent,
                ease,
                delay: isPresent ? contentRevealStart : exitContentDelay,
              }}
              className="py-2 will-change-transform lg:pl-20"
            >
              <address className="not-italic">
                <ul className="space-y-4 text-center text-base tracking-wide lg:text-left">
                  <li className="min-w-0">
                    <a
                      href="mailto:noahparknguyen@gmail.com"
                      className="group inline-flex min-w-0 items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiGmail
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="wrap-break-words min-w-0 underline-offset-4 group-hover:underline">
                        noahparknguyen@gmail.com
                      </span>
                    </a>
                  </li>

                  <li className="min-w-0">
                    <a
                      href="https://linkedin.com/in/nparknguyen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-w-0 items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiLinkedin
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="wrap-break-words min-w-0 underline-offset-4 group-hover:underline">
                        linkedin.com/in/nparknguyen
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>

                  <li className="min-w-0">
                    <a
                      href="https://github.com/SerenePrince"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-w-0 items-center justify-center gap-3 lg:justify-start"
                    >
                      <SiGithub
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="wrap-break-words min-w-0 underline-offset-4 group-hover:underline">
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

        <div className="mt-[clamp(1.5rem,4vh,3rem)]">
          <div
            aria-hidden="true"
            className="relative h-px w-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-current opacity-30 will-change-transform"
              initial={reduce ? { x: 0 } : { x: "-100%" }}
              animate={isPresent ? { x: 0 } : { x: "-100%" }}
              transition={{
                duration: durLine,
                ease,
                delay: isPresent ? lineRevealStart : exitLineDelay,
              }}
            />
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={reduce ? { y: 0 } : { y: "-100%" }}
              animate={isPresent ? { y: 0 } : { y: "-100%" }}
              transition={{
                duration: durContent,
                ease,
                delay: isPresent ? contentRevealStart : exitContentDelay,
              }}
              className="pt-[clamp(1rem,2.5vh,2rem)] text-center will-change-transform"
            >
              <p className="mx-auto max-w-6xl text-base tracking-wide opacity-70">
                I build internal tools and automation, taking rough ideas and
                turning them into reliable systems teams can depend on.
              </p>
              <p className="mt-4 text-base tracking-wide opacity-70">
                Based in Ottawa (originally from BC) • Open to remote roles or
                relocation • Graduating April 2026
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
