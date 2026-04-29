import Container from "./Container";

const workExperience = [
  {
    company: "Department of National Defence",
    role: "Application Developer",
    period: "Feb 2025 – Dec 2025",
    description:
      "Worked as part of a Power Platform team building internal tools for government — specializing in Power Apps and Power Automate.",
  },
  {
    company: "Algonquin College",
    role: "Software Tester",
    period: "Sep 2024 – Dec 2024",
    description:
      "Tested features for R3, Algonquin's upcoming student information system built to replace the existing one.",
  },
  {
    company: "FINTRAC",
    role: "Application Developer",
    period: "Jan 2024 – Apr 2024",
    description:
      "Delivered a complete project independently from start to finish — on my very first professional placement.",
  },
];

const education = [
  {
    institution: "Algonquin College",
    credential: "Computer Engineering Technology – Computer Science",
    period: "Jan 2023 – Apr 2026",
    detail: "Advanced Diploma · GPA 3.79 · Dean's Honours List every term",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full pt-16"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Work */}
          <section
            aria-labelledby="work-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="work-heading" className="font-bold not-italic">
              Work
            </h3>
            <ul>
              {workExperience.map((job) => (
                <li
                  key={job.company + job.period}
                  className="border-foreground space-y-1 border-t py-4 last:border-b"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-semibold">{job.company}</p>
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
            <h3 id="education-heading" className="font-bold not-italic">
              Education
            </h3>
            <ul>
              {education.map((entry) => (
                <li
                  key={entry.institution + entry.period}
                  className="border-foreground space-y-1 border-t py-4 last:border-b"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-semibold">{entry.institution}</p>
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
