import Container from "./Container";

const workExperience = [
  {
    company: "Department of National Defence",
    role: "Application Developer",
    period: "Feb 2025 – Dec 2025",
    description:
      "Learned what it means to own a feature end-to-end — demos, feedback, and shipped tools still in use today.",
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
          <h2 id="experience-heading" className="sr-only">
            Experience
          </h2>
          {/* Work */}
          <section
            aria-labelledby="work-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="work-heading">Work</h3>
            <ul>
              {workExperience.map((job) => (
                <li
                  key={job.company + job.period}
                  className="border-foreground space-y-2 border-t py-6 last:border-b"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="title">{job.company}</p>
                    <p className="shrink-0 text-sm">{job.period}</p>
                  </div>
                  <p className="tagline">{job.role}</p>
                  <p className="text-sm">{job.description}</p>
                </li>
              ))}
            </ul>
          </section>
          {/* Education */}
          <section
            aria-labelledby="education-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="education-heading">Education</h3>
            <ul>
              {education.map((entry) => (
                <li
                  key={entry.institution + entry.period}
                  className="border-foreground space-y-2 border-t py-6 last:border-b"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="title">{entry.institution}</p>
                    <p className="shrink-0 text-sm">{entry.period}</p>
                  </div>
                  <p className="tagline">{entry.credential}</p>
                  <p className="text-sm">{entry.detail}</p>
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
