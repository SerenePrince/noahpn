// src/sections/About.jsx
import { useEffect } from "react";
import { motion, usePresence, useReducedMotion } from "motion/react";
import aboutProfileJpg from "../assets/images/about-profile.jpg";

function About({ mode = "nav" }) {
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
      id="about"
      aria-labelledby="about-title"
      className="h-full min-h-0 overflow-x-hidden"
      initial={false}
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl px-4 py-[clamp(1.5rem,4vh,4rem)] sm:px-6">
        {/* Scroll allowed on stacked layouts (<lg) via .desktop-scroll */}
        <div className="desktop-scroll flex min-h-0 w-full items-start lg:items-center">
          <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-0">
            {/* LEFT LINE (desktop) */}
            <div
              aria-hidden="true"
              className="relative hidden h-[min(35rem,60vh)] w-px shrink-0 overflow-hidden lg:block"
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

            {/* TOP LINE (mobile) */}
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

            {/* MASKED CONTENT */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex flex-col items-center gap-10 will-change-transform lg:flex-row lg:items-center lg:gap-16 lg:pl-10"
                initial={reduce ? { x: 0 } : { x: "-110%" }}
                animate={isPresent ? { x: 0 } : { x: "-110%" }}
                transition={{
                  duration: durContent,
                  ease,
                  delay: isPresent ? contentRevealStart : exitContentDelay,
                }}
              >
                {/* Image (desktop only) */}
                <figure className="hidden shrink-0 lg:block">
                  <img
                    src={aboutProfileJpg}
                    alt="Portrait of Noah Park-Nguyen"
                    width={500}
                    height={750}
                    draggable="false"
                    decoding="async"
                    loading="eager"
                    fetchpriority="high"
                    className="aspect-2/3 h-auto w-[min(22rem,40vw)] border border-current object-cover"
                  />
                </figure>

                {/* Text */}
                <div className="max-w-2xl min-w-0 text-center lg:text-left">
                  <h2 id="about-title" className="font-semibold tracking-wide">
                    Hey, I&apos;m Noah.
                  </h2>

                  <p className="mt-6 text-base leading-relaxed lg:text-lg">
                    I'm a developer and computer science student originally from
                    British Columbia, currently living in Ottawa for school.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I took my first programming class in my senior year of high
                    school and got hooked on building things that actually work.
                    I knew I wanted to pursue computer science, so I spent that
                    summer strengthening my math and science foundation to
                    prepare for college.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    What I enjoy most about development is the final stretch of
                    MVP work—when rough notes turn into something usable and the
                    big picture finally clicks. That's where I'm most engaged
                    and motivated.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I lean more toward implementation than visual design, but
                    I'm comfortable working across the stack and quick to pick
                    up new tools when timelines are tight.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I'm an introvert at heart, but I do my best work in
                    environments that value patience, accountability, and
                    thoughtful collaboration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
