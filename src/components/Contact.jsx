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
  { label: "Power Platform", href: "/noahpn/resumes/noahpark-nguyen_powerplatform_resume.pdf" },
  { label: "Fullstack", href: "/noahpn/resumes/noahpark-nguyen_fullstack_resume.pdf" },
];

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full pt-16"
    >
      <Container>
        <div className="flex flex-col space-y-8 pt-24 pb-32">
          {/* Heading */}
          <h2 id="contact-heading" className="font-bold not-italic">
            Get In Touch
          </h2>

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
              Two resumes — one for Power Platform work, one for general
              fullstack.
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
            here focus on approach and outcome rather than public code. Personal
            projects have full source on GitHub.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
