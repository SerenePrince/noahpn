import Container from "./Container";
import { Fragment } from "react";

const socials = [
  { label: "Email", href: "mailto:noahparknguyen@gmail.com", external: true },
  { label: "GitHub", href: "https://github.com/SerenePrince", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nparknguyen/",
    external: true,
  },
];

const resumes = [
  {
    label: "Fullstack",
    badge: "badge-blue",
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_fullstack_resume.pdf`,
  },
  {
    label: "Power Platform",
    badge: "badge-purple",
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_powerplatform_resume.pdf`,
  },
];

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full">
      <Container>
        <div className="flex flex-col space-y-8 pt-24 pb-32">
          {/* Heading */}
          <h2 id="contact-heading">Get In Touch</h2>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Socials */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="eyebrow">Contact</p>
              <p className="secondary">Email is the best way to reach me.</p>
            </div>
            <nav aria-label="Contact links">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {socials.map((link, i) => (
                  <Fragment key={link.href}>
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
                    {i < socials.length - 1 && (
                      <li
                        aria-hidden="true"
                        className="eyebrow px-1 select-none"
                      >
                        ·
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </nav>
          </div>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Resumes */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="eyebrow">Resume</p>
              <p className="secondary">
                Take a look at my resumes. I have experience in both traditional
                fullstack and the Power Platform, so feel free to pick the one
                that fits best.
              </p>
            </div>
            <ul
              aria-label="Resume downloads"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {resumes.map((resume) => (
                <li
                  key={resume.href}
                  className="card flex items-center justify-between gap-4 p-4"
                >
                  <h3 className="sr-only">{resume.label} Resume</h3>
                  <span className={`badge ${resume.badge}`} aria-hidden="true">
                    {resume.label}
                  </span>
                  <a
                    href={resume.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-sm"
                  >
                    View PDF
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only">
                      {" "}
                      — {resume.label} resume (opens in new tab)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Closing note */}
          <p className="secondary">
            If something here resonated, let's talk. The best way to reach me is
            through email — if you try to scam me, I can guarantee that I will
            fall for it.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
