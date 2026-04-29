import Container from "./Container";

const skills = [
  {
    label: "Frontend",
    items: ["Tailwind CSS", "Vite", "React", "JavaScript", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Spring Data JPA",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Git",
      "Maven",
      "SQL",
      "Linux (WSL / Ubuntu)",
      "Agile / Scrum",
      "Azure DevOps",
    ],
  },
  {
    label: "Power Platform",
    items: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "SharePoint Lists",
      "Microsoft 365",
    ],
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full pt-16"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Section heading */}
          <h2 id="about-heading" className="font-bold not-italic">
            Hey, I'm Noah.
          </h2>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Bio */}
          <div className="space-y-6">
            <p>
              I'm a developer born and raised in BC, currently based in Ottawa.
              I got into coding at 17 — took a beginner programming class on a
              whim during my last semester of high school and immediately knew
              that this is what I wanted to do for a living. After graduating I
              worked full-time to save up and get my math prerequisites sorted
              before starting college.
            </p>
            <p>
              What I enjoy most is when a project you intended to be simple
              quietly grows into something much bigger than you planned.
            </p>
            <p>
              I'm comfortable working across the full stack, lean more toward
              implementation than design, and pick up new tools quickly when the
              job calls for it. I'm an introvert at heart, but I do my best work
              in environments where people are patient, accountable, and treat
              mistakes as part of the process.
            </p>
            <p className="tagline">
              Currently based in Ottawa, open to remote work or relocation — and
              actively looking for my next opportunity.
            </p>
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Skills */}
          <section
            aria-labelledby="skills-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="skills-heading" className="font-bold not-italic">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {skills.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-2 text-xs tracking-widest uppercase">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}

export default About;
