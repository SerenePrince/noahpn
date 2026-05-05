import Container from "./Container";

const skills = [
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Node.js"],
  },
  {
    label: "Tooling",
    items: ["Git", "Maven", "Docker", "Linux (WSL / Ubuntu)", "Azure DevOps"],
  },
  {
    label: "Power Platform",
    items: ["Power Apps", "Power Automate", "Power BI", "SharePoint Lists"],
  },
];

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="w-full">
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Section heading */}
          <h2 id="about-heading">Hey, I'm Noah.</h2>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Bio */}
          <div className="space-y-6">
            <p>
              A fullstack developer with experience building production-ready
              tools and apps. Looking for roles in frontend, backend, or
              anything in between. Open to remote or relocation within BC and
              ON.
            </p>
            <p>
              I got into coding at 17 in my last semester of high school —
              signed up for a beginner class on a whim and immediately knew it
              was what I wanted to do for a living. I spent that summer working
              full-time while taking online courses to meet the math
              prerequisites for college.
            </p>
            <p>
              My regular toolkit includes Java, Spring Boot, React, and
              Tailwind. I have my go-to setup, but I'm always excited to pick up
              something new.
            </p>
            <p>
              I work best independently, but I know how to show up for a team —
              one that values patience, accountability, and learning from
              mistakes over blame.
            </p>
            <p>
              When I'm not at my computer, you can probably find me taking a
              walk, playing volleyball, or working through a game that came out
              a decade ago.
            </p>
            <p className="tagline">
              "I am built of the things I do every day, and the results are no
              more than a byproduct."
            </p>
            <p className="text-sm">— Shinsuke Kita</p>
          </div>

          {/* Divider */}
          <div className="bg-foreground h-px w-full" aria-hidden="true" />

          {/* Skills */}
          <section
            aria-labelledby="skills-heading"
            className="flex flex-col space-y-6"
          >
            <h3 id="skills-heading">Skills</h3>
            {/* Divider */}
            <div className="bg-foreground h-px w-full" aria-hidden="true" />
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
