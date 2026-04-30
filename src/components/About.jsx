import Container from "./Container";

const skills = [
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "PostgreSQL",
      "Node.js",
      "Express",
      "JUnit",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Git",
      "Maven",
      "Docker",
      "Linux (WSL / Ubuntu)",
      "Azure DevOps",
      "Agile / Scrum",
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
          <h2 id="about-heading">Hey, I'm Noah.</h2>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Bio */}
          <div className="space-y-6">
            <p>
              A developer, Java fanatic, and Balatro addict, looking for my next
              opportunity to show off my fullstack skills.
            </p>
            <p>
              I'm comfortable across the stack with backend as my preference,
              but I'm always down for a new challenge.
            </p>
            <p>
              I may be an introvert at heart, but I know how to be a Good
              Samaritan — as long as the team values patience, accountability,
              and learning from mistakes.
            </p>
            <p>
              I got into coding when I was 17 during my last semester of high
              school. I signed up for a beginner programming class on a whim and
              immediately knew what I wanted to do for a living. Over the summer
              I worked full-time while taking online courses to meet the math
              prerequisites for college.
            </p>
            <p>
              When I'm not at my computer, you can find me probably taking a
              walk, playing volleyball, or just meandering along enjoying life.
            </p>
            <p className="tagline">
              "Even if you're a genius, if you don't have the drive, you're
              just a regular person."
            </p>
            <p className="text-sm">— Ping Pong the Animation</p>
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Skills */}
          <section
            aria-labelledby="skills-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="skills-heading">Skills</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {skills.map((group) => (
                <div key={group.label}>
                  <p className="title mb-2">{group.label}</p>
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
