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
      className="flex min-h-svh w-full flex-col justify-center pt-16"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Name & Title */}
          <div className="space-y-1">
            <h1>Noah Park-Nguyen</h1>
            <p className="tagline">Fullstack Developer</p>
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Links */}
          <ul aria-label="Social links" className="flex flex-row gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="text-sm hover:underline hover:underline-offset-4"
                >
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                  {link.external && (
                    <span className="sr-only"> (opens in new tab)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Bio */}
          <div className="space-y-6">
            <p className="tagline">
              Enterprise team experience. Ottawa-based, open to remote or
              relocation.
            </p>
            <p>Why chase trends when you can just walk at your own pace?</p>
          </div>

          {/* CTA */}
          <a
            href="#projects"
            className="self-start text-sm hover:underline hover:underline-offset-4"
          >
            View my work ↓
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
