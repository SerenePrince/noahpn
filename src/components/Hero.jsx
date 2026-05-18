import { Fragment } from "react";
import Container from "./Container";
import candidPhoto from "../assets/images/noah-candid-profile.png";

const links = [
  {
    label: "Email",
    href: "mailto:noahparknguyen@gmail.com",
    external: true,
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
      aria-labelledby="hero-heading"
      className="flex min-h-svh w-full flex-col justify-center"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Photo + Eyebrow + Name */}
          <div className="flex items-center gap-8">
            <img
              src={candidPhoto}
              alt="Noah Park-Nguyen"
              width={540}
              height={810}
              className="border-rule hidden aspect-2/3 w-48 shrink-0 rounded-(--radius) border object-cover object-top sm:block"
            />
            <div className="space-y-3">
              <span className="badge badge-green">Actively looking</span>
              <p className="eyebrow">Fullstack Developer</p>
              <h1 id="hero-heading">
                Noah <span className="whitespace-nowrap">Park-Nguyen</span>
              </h1>
            </div>
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
                    {link.external && (
                      <>
                        <span aria-hidden="true"> ↗</span>
                        <span className="sr-only"> (opens in new tab)</span>
                      </>
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
