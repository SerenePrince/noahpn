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
                  <li aria-hidden="true" className="eyebrow select-none px-3">
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
              Enterprise team experience. Ottawa-based, open to remote or
              relocation within BC and ON.
            </p>
            <p className="secondary">
              Why chase trends when you can just walk at your own pace?
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
