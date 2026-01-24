// src/sections/Contact.jsx
import { useEffect } from "react";
import { motion, usePresence, useReducedMotion } from "motion/react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

function Contact({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const [isPresent, safeToRemove] = usePresence();

  const isInitial = mode === "load";
  const easeIntro = [0.16, 1, 0.3, 1];
  const easeFast = [0.25, 0.9, 0.25, 1];

  const ease = isInitial ? easeIntro : easeFast;

  // Keep the big hero pause only on the very first website load (enter only)
  const pause = reduce ? 0 : isInitial ? 0.3 : 0;
  const durLine = reduce ? 0 : (isInitial ? 0.6 : 0.45);
  const durContent = reduce ? 0 : (isInitial ? 0.6 : 0.45);
  const gap = reduce ? 0 : (isInitial ? 0.3 : 0);

  // Enter: sequential only on initial load; simultaneous on nav
  const lineRevealStart = pause;
  const contentRevealStart = reduce
    ? 0
    : isInitial
      ? lineRevealStart + durLine + gap
      : lineRevealStart;

  // Exit: always simultaneous
  const exitContentDelay = 0;
  const exitLineDelay = 0;

  // Ensure exit animations finish before unmount
  useEffect(() => {
    if (isPresent) return;
    const totalExitTime = reduce ? 0 : Math.max(durLine, durContent) + 0.05;
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, reduce, durLine, durContent]);

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      className="h-full min-h-0"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl flex-col px-4 py-[clamp(1.5rem,4vh,4rem)] sm:px-6">
        {/* Single scroll owner (scrollbars hidden on mobile via global rule + class) */}
        <div className="desktop-scroll flex min-h-0 flex-1 items-start lg:items-center">
          <div className="flex min-h-0 w-full flex-col justify-center">
            {/* MAIN ROW */}
            <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
              {/* LEFT (Resume / CTA) */}
              <div className="min-w-0 overflow-hidden lg:flex-1">
                <motion.div
                  className="min-w-0 py-4 text-center lg:pr-16 lg:text-right"
                  initial={reduce ? { x: 0 } : { x: "110%" }}
                  animate={isPresent ? { x: 0 } : { x: "110%" }}
                  transition={{
                    duration: durContent,
                    ease,
                    delay: isPresent ? contentRevealStart : exitContentDelay,
                  }}
                  style={{ willChange: "transform" }}
                >
                  <h2
                    id="contact-title"
                    className="font-semibold tracking-wide"
                  >
                    Resume
                  </h2>

                  <p className="mt-4 text-base leading-relaxed opacity-80 lg:text-lg">
                    A concise summary of my experience and work history.
                  </p>

                  <div className="mt-6 flex justify-center lg:justify-end">
                    <a
                      href="/noahpn/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 underline underline-offset-4"
                      aria-label="Open resume PDF"
                    >
                      <span>Open resume (PDF)</span>
                      <FiArrowUpRight aria-hidden="true" className="h-5 w-5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>

                  <p className="mt-6 text-sm tracking-wide opacity-70">
                    Open to full-time, internship, or contract opportunities.
                  </p>
                </motion.div>
              </div>

              {/* CENTER DIVIDER */}
              <div aria-hidden="true" className="shrink-0">
                <div className="relative hidden h-[min(22rem,45vh)] w-px overflow-hidden lg:block">
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

                <div className="relative my-10 h-px w-full overflow-hidden lg:hidden">
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
              </div>

              {/* RIGHT (Contact links) */}
              <div className="min-w-0 overflow-hidden lg:flex-1">
                <motion.div
                  className="min-w-0 py-4 text-center lg:pl-16 lg:text-left"
                  initial={reduce ? { x: 0 } : { x: "-110%" }}
                  animate={isPresent ? { x: 0 } : { x: "-110%" }}
                  transition={{
                    duration: durContent,
                    ease,
                    delay: isPresent ? contentRevealStart : exitContentDelay,
                  }}
                  style={{ willChange: "transform" }}
                >
                  <h3 className="font-semibold tracking-wide">Contact</h3>

                  <p className="mt-4 text-base leading-relaxed opacity-80 lg:text-lg">
                    Email is the best way to reach me.
                  </p>

                  <address className="mt-8 not-italic">
                    <ul className="space-y-5 text-center text-base tracking-wide lg:text-left">
                      <li>
                        <a
                          href="mailto:noahparknguyen@gmail.com"
                          className="inline-flex items-center justify-center gap-3 underline underline-offset-4 lg:justify-start"
                          aria-label="Email Noah at noahparknguyen@gmail.com"
                        >
                          <SiGmail aria-hidden="true" className="h-5 w-5" />
                          <span className="wrap-break-words">
                            noahparknguyen@gmail.com
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://linkedin.com/in/nparknguyen"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 underline underline-offset-4 lg:justify-start"
                          aria-label="Open LinkedIn profile: linkedin.com/in/nparknguyen"
                        >
                          <SiLinkedin aria-hidden="true" className="h-5 w-5" />
                          <span className="wrap-break-words">
                            linkedin.com/in/nparknguyen
                          </span>
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://github.com/SerenePrince"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 underline underline-offset-4 lg:justify-start"
                          aria-label="Open GitHub profile: github.com/SerenePrince"
                        >
                          <SiGithub aria-hidden="true" className="h-5 w-5" />
                          <span className="wrap-break-words">
                            github.com/SerenePrince
                          </span>
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </li>
                    </ul>
                  </address>
                </motion.div>
              </div>
            </div>

            {/* BOTTOM META */}
            <div className="mt-[clamp(2rem,5vh,3.5rem)]">
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
                  className="pt-8 text-center"
                  initial={reduce ? { y: 0 } : { y: "-110%" }}
                  animate={isPresent ? { y: 0 } : { y: "-110%" }}
                  transition={{
                    duration: durContent,
                    ease,
                    delay: isPresent ? contentRevealStart : exitContentDelay,
                  }}
                  style={{ willChange: "transform" }}
                >
                  <p className="mx-auto max-w-4xl text-sm tracking-wide opacity-70">
                    Most of my work is internal, so the case studies focus on
                    approach, trade-offs, and impact rather than public demos.
                  </p>
                </motion.div>
              </div>
            </div>

            <div
              className="h-[clamp(0.75rem,2vh,1.25rem)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
