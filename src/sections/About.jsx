// src/sections/About.jsx
import { motion, useReducedMotion } from "motion/react";
import aboutProfileJpg from "../assets/images/about-profile.jpg";

function About({ mode = "nav" }) {
  const reduce = useReducedMotion();
  const isFast = mode === "nav";
  const ease = [0.16, 1, 0.3, 1];

  const pause = reduce ? 0 : 0;

  const durLine = reduce ? 0 : isFast ? 0.45 : 0.8;
  const durContent = reduce ? 0 : isFast ? 0.55 : 0.9;
  const gap = reduce ? 0 : isFast ? 0.08 : 0.12;

  const lineRevealStart = pause;
  const contentRevealStart = reduce ? 0 : lineRevealStart + durLine + gap;

  const exitContentDelay = 0;
  const exitLineDelay = reduce ? 0 : durContent + exitContentDelay + 0.05;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="h-full min-h-0"
    >
      <div className="mx-auto flex h-full min-h-0 max-w-6xl px-6 py-[clamp(1.5rem,4vh,4rem)]">
        {/* Scroll is allowed on stacked layouts (<lg) via .desktop-scroll utility.
            Top-align by default so scrolling never clips; center only on lg+. */}
        <div className="desktop-scroll flex min-h-0 w-full items-start lg:items-center">
          <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-0">
            {/* LEFT LINE */}
            <div
              aria-hidden="true"
              className="relative hidden h-[min(35rem,60vh)] w-px shrink-0 overflow-hidden lg:block"
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

            {/* MASKED UNIT */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex flex-col items-center gap-10 will-change-transform lg:flex-row lg:items-center lg:gap-16 lg:pl-10"
                initial={reduce ? { x: 0 } : { x: "-110%" }}
                animate={{ x: 0 }}
                exit={{
                  x: reduce ? 0 : "-110%",
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
              >
                {/* Image */}
                <figure className="hidden shrink-0 lg:block">
                  <img
                    src={aboutProfileJpg}
                    alt="Portrait of Noah Park-Nguyen"
                    width={500}
                    height={750}
                    draggable="false"
                    decoding="async"
                    loading="eager"
                    className="aspect-2/3 h-auto w-[min(22rem,40vw)] border border-current object-cover"
                  />
                </figure>

                {/* Text */}
                <div className="max-w-2xl min-w-0 text-center lg:text-left">
                  <h2 id="about-title" className="font-semibold tracking-wide">
                    Hey, I&apos;m Noah.
                  </h2>

                  <p className="mt-6 text-base leading-relaxed lg:text-lg">
                    I&apos;m an application developer who builds internal tools
                    and automation solutions for government and enterprise
                    teams.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I got into programming in high school and quickly fell in
                    love with the creative problem-solving side of it. What
                    keeps me engaged is taking messy, unstructured ideas —
                    notes, requirements, half-formed plans — and shaping them
                    into something clean, functional, and genuinely useful.
                  </p>

                  <p className="mt-4 text-base leading-relaxed lg:text-lg">
                    I gravitate toward front-end and application-focused work
                    because I enjoy seeing each change come together visually
                    and functionally. I work well independently, but I thrive in
                    teams that value patience, positive collaboration, and
                    learning through iteration.
                  </p>

                  <p className="mt-8 text-sm tracking-wide opacity-70">
                    Outside of development, you&apos;ll usually find me playing
                    volleyball — both recreationally and competitively — or
                    unwinding with strategy and roguelike games. Lately,
                    that&apos;s meant a lot of Balatro.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
