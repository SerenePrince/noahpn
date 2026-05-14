import Container from "./Container";

const workExperience = [
  {
    company: "Department of National Defence",
    role: "Application Developer",
    period: "Feb 2025 – Dec 2025",
    description:
      "Owned features end-to-end — ran demos, took feedback, and shipped tools still in use today.",
  },
  {
    company: "Algonquin College",
    role: "Software Tester",
    period: "Sep 2024 – Dec 2024",
    description:
      "Practiced the full testing lifecycle — writing tests, running them, and reporting what broke.",
  },
  {
    company: "FINTRAC",
    role: "Application Developer",
    period: "Jan 2024 – Apr 2024",
    description:
      "Delivered a complete project independently — on my very first professional placement.",
  },
];

const education = [
  {
    institution: "Algonquin College",
    credential: "Computer Engineering Technology – Computer Science",
    period: "Jan 2023 – Apr 2026",
    detail: "Advanced Diploma · GPA 3.78 · Dean's Honours List every term",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Section heading */}
          <h2 id="experience-heading">Experience</h2>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Work */}
          <section aria-label="Work" className="flex flex-col space-y-6">
            <p className="eyebrow">Work</p>

            <ul className="flex flex-col gap-4">
              {workExperience.map((job) => (
                <li
                  key={job.company + job.period}
                  className="card space-y-3 p-6"
                >
                  <div className="space-y-1">
                    <p className="eyebrow">{job.period}</p>
                    <div className="space-y-0.5">
                      <p className="title">{job.company}</p>
                      <p className="tagline">{job.role}</p>
                    </div>
                  </div>
                  <p className="secondary">{job.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Education */}
          <section aria-label="Education" className="flex flex-col space-y-6">
            <p className="eyebrow">Education</p>

            <ul className="flex flex-col gap-4">
              {education.map((entry) => (
                <li
                  key={entry.institution + entry.period}
                  className="card space-y-3 p-6"
                >
                  <div className="space-y-1">
                    <p className="eyebrow">{entry.period}</p>
                    <div className="space-y-0.5">
                      <p className="title">{entry.institution}</p>
                      <p className="tagline">{entry.credential}</p>
                    </div>
                  </div>
                  <p className="secondary">{entry.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
