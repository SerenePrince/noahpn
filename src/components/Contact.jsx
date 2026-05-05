import Container from "./Container";

const socials = [
  { label: "Email", href: "mailto:noahparknguyen@gmail.com" },
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

const resumes = [
  {
    label: "Fullstack",
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_fullstack_resume.pdf`,
  },
  {
    label: "Power Platform",
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_powerplatform_resume.pdf`,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Heading */}
          <h2 id="contact-heading">Get In Touch</h2>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Socials */}
          <div className="space-y-2">
            <p className="tagline">Email is the best way to reach me.</p>
            <ul aria-label="Contact links" className="flex flex-row gap-6">
              {socials.map((link) => (
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
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Resumes */}
          <div className="space-y-2">
            <p className="tagline">
              Currently looking for frontend, backend, or fullstack roles — Power Platform resume available too.
            </p>
            <ul aria-label="Resume downloads" className="flex flex-row gap-6">
              {resumes.map((resume) => (
                <li key={resume.href}>
                  <a
                    href={resume.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:underline hover:underline-offset-4"
                  >
                    {resume.label}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> resume (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Closing note */}
          <p className="text-sm">
            My professional work was built for internal teams — the case studies
            cover approach and outcome rather than public code. Personal
            projects have full source on GitHub.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
