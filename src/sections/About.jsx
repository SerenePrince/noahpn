import { useEffect } from "react";
import { motion, usePresence, useReducedMotion } from "motion/react";
import aboutProfileJpg from "../assets/images/about-profile.jpg";

function About({ mode = "nav" }) {
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

  const totalExitTime = reduce ? 0 : exitLineDelay + durLine + 0.05;

  // Ensure exit animations finish before unmount
  useEffect(() => {
    if (isPresent) return;
    const t = window.setTimeout(() => safeToRemove(), totalExitTime * 1000);
    return () => window.clearTimeout(t);
  }, [isPresent, safeToRemove, totalExitTime]);

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
                    loading="lazy"
                    className="aspect-2/3 h-auto w-[min(22rem,40vw)] border border-current object-cover"
                  />
                </figure>

                {/* Text */}
                <div className="max-w-2xl min-w-0 text-center lg:text-left">
                  <h2 id="about-title" className="font-semibold tracking-wide">
                    Hey, I&apos;m Noah.
                  </h2>

                  <p className="mt-6 text-base leading-relaxed lg:text-lg">
                    I'm a developer, student, and Balatro addict based in
                    Coquitlam, in the Lower Mainland of British Columbia.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I took my first programming class in my senior year of high
                    school and was instantly inspired. I knew I wanted to study
                    computer science, so I spent that summer taking online
                    courses to strengthen my math and science background and
                    prepare for college.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    What I enjoy most about development is the final stretch of
                    MVP work—when a project moves from rough notes and plans
                    into a fully realized, working product. Seeing that
                    transformation is when the big picture clicks for me, and
                    it's the most satisfying part of the work.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I lean more toward implementation than design, but I’m
                    comfortable working across the stack and quick to pick up
                    new tools and patterns.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I'm an introvert at heart, but I thrive in environments that
                    value patience, positive reinforcement, diversity, and
                    accountability.
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
