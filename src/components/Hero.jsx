import { Fragment } from "react";
import Container from "./Container";

const links = [
  {
    label: "Email",
    href: "mailto:noahparknguyen@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/SerenePrince",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nparknguyen/",
    external: true,
  },
];

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="flex min-h-svh w-full flex-col justify-center"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Eyebrow + Name */}
          <div className="space-y-3">
            <p className="eyebrow">Fullstack Developer</p>
            <h1>Noah Park-Nguyen</h1>
          </div>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Links — meta strip */}
          <ul
            aria-label="Social links"
            className="flex flex-row flex-wrap items-center gap-y-2"
          >
            {links.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 && (
                  <li aria-hidden="true" className="eyebrow px-3 select-none">
                    ·
                  </li>
                )}
                <li>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="link text-sm"
                  >
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                    {link.external && (
                      <span className="sr-only"> (opens in new tab)</span>
                    )}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Bio */}
          <div className="space-y-4">
            <p className="tagline">
              A recent CS grad with enterprise experience shipping real tools
              for real teams. Currently based in Ottawa. Open to remote roles or
              relocation within BC and ON.
            </p>
            <p className="secondary">
              Every day I like to kick off my morning with some daily
              affirmations, "No blockers on my end, thanks!"
            </p>
          </div>

          {/* CTA */}
          <a href="#projects" className="link self-start text-sm">
            View my work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
