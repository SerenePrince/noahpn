import Container from "./Container";

const tagVariant = {
  // Green — Java ecosystem
  Java: "badge-green",
  Maven: "badge-green",
  // Blue — JS ecosystem and web platforms
  JavaScript: "badge-blue",
  React: "badge-blue",
  "HTML & CSS": "badge-blue",
  "Power Apps": "badge-blue",
  SharePoint: "badge-blue",
  // Teal — data and databases
  "Power BI": "badge-teal",
  SQL: "badge-teal",
  // Purple — infrastructure and automation
  "Power Automate": "badge-purple",
  "Azure DevOps": "badge-purple",
  "Linux / Ubuntu": "badge-purple",
  // Amber — protocols and tooling
  "REST APIs": "badge-amber",
};

const workExperience = [
  {
    company: "Department of National Defence",
    role: "Application Developer",
    period: "Feb 2025 – Dec 2025",
    description:
      "Owned features end-to-end — ran demos, took feedback, and shipped tools still in use today.",
    tags: ["Power Apps", "Power Automate", "SharePoint", "React", "Power BI"],
    caseStudy: true,
  },
  {
    company: "Algonquin College",
    role: "Software Tester",
    period: "Sep 2024 – Dec 2024",
    description:
      "Practiced the full testing lifecycle — writing tests, running them, and reporting what broke.",
    tags: ["Azure DevOps"],
    caseStudy: false,
  },
  {
    company: "FINTRAC",
    role: "Application Developer",
    period: "Jan 2024 – Apr 2024",
    description:
      "Delivered a complete project independently — on my very first professional placement.",
    tags: ["Java", "Maven", "REST APIs"],
    caseStudy: true,
  },
];

const education = [
  {
    institution: "Algonquin College",
    credential: "Computer Engineering Technology – Computer Science",
    period: "Jan 2023 – Apr 2026",
    detail: "Advanced Diploma · GPA 3.78 · Dean's Honours List every term",
    tags: [
      "Java",
      "JavaScript",
      "React",
      "HTML & CSS",
      "SQL",
      "Linux / Ubuntu",
    ],
    courses: [
      "OOP",
      "Data Structures",
      "Web Enterprise Applications",
      "Software Design & Testing",
    ],
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
          <section
            aria-labelledby="work-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="work-heading" className="eyebrow">
              Work
            </h3>

            <ul className="flex flex-col gap-4">
              {workExperience.map((job) => (
                <li
                  key={job.company + job.period}
                  className="card space-y-4 p-6"
                >
                  <div className="space-y-1">
                    <p className="eyebrow">{job.period}</p>
                    <div className="space-y-0.5">
                      <p className="title">{job.company}</p>
                      <p className="tagline">{job.role}</p>
                    </div>
                  </div>
                  <ul
                    aria-label="Technologies used"
                    className="flex flex-wrap gap-2"
                  >
                    {job.tags.map((tag) => (
                      <li key={tag}>
                        <span
                          className={`badge ${tagVariant[tag] ?? "badge-neutral"}`}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="secondary">{job.description}</p>
                  {job.caseStudy && (
                    <a href="#projects" className="link self-start text-sm">
                      View case studies <span aria-hidden="true">→</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Education */}
          <section
            aria-labelledby="education-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="education-heading" className="eyebrow">
              Education
            </h3>

            <ul className="flex flex-col gap-4">
              {education.map((entry) => (
                <li
                  key={entry.institution + entry.period}
                  className="card space-y-4 p-6"
                >
                  <div className="space-y-1">
                    <p className="eyebrow">{entry.period}</p>
                    <div className="space-y-0.5">
                      <p className="title">{entry.institution}</p>
                      <p className="tagline">{entry.credential}</p>
                    </div>
                  </div>
                  <ul
                    aria-label="Technologies learned"
                    className="flex flex-wrap gap-2"
                  >
                    {entry.tags.map((tag) => (
                      <li key={tag}>
                        <span
                          className={`badge ${tagVariant[tag] ?? "badge-neutral"}`}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul
                    aria-label="Relevant coursework"
                    className="flex flex-wrap gap-2"
                  >
                    {entry.courses.map((course) => (
                      <li key={course}>
                        <span className="tag">{course}</span>
                      </li>
                    ))}
                  </ul>
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
