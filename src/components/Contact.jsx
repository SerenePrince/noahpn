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
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_fullstack_resume.pdf`,
  },
  {
    label: "Power Platform",
    href: `${import.meta.env.BASE_URL}resumes/noahpark-nguyen_powerplatform_resume.pdf`,
  },
];

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full">
      <Container>
        <div className="flex flex-col space-y-8 py-24">
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
              className="card grid grid-cols-2 overflow-hidden"
            >
              {resumes.map((resume, i) => (
                <li
                  key={resume.href}
                  className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between${i > 0 ? " border-rule border-l" : ""}`}
                >
                  <p className="title">{resume.label}</p>
                  <div>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Closing note */}
          <p className="secondary">
            Thanks for checking out my portfolio! If anything here made an
            impression, feel free to reach out for a chat.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
