import { useState } from "react";
import Container from "./Container";
import StackPanel from "./StackPanel";

const stackBadges = [
  { label: "Java", variant: "badge-green" },
  { label: "Spring Boot", variant: "badge-green" },
  { label: "React", variant: "badge-blue" },
  { label: "JavaScript", variant: "badge-blue" },
  { label: "Node.js", variant: "badge-blue" },
  { label: "Python", variant: "badge-amber" },
  { label: "PostgreSQL", variant: "badge-teal" },
  { label: "Docker", variant: "badge-purple" },
];

function About() {
  const [stackOpen, setStackOpen] = useState(false);

  return (
    <>
      <section id="about" aria-labelledby="about-heading" className="w-full">
        <Container>
          <div className="flex flex-col space-y-8 py-24">
            {/* Heading */}
            <h2 id="about-heading">Hey there, I'm Noah.</h2>

            {/* Divider */}
            <div className="bg-rule h-px w-full" aria-hidden="true" />

            {/* Bio */}
            <div className="space-y-6">
              <p>
                A fullstack developer with experience building production-ready
                tools and apps. I'm currently based in Ottawa — hoping to land a
                role in frontend, backend, or anything in between.
              </p>
              <p>
                My primary stack includes Java and Spring Boot for the back,
                React and Tailwind for the front, and PostgreSQL for the data.
                Right now I'm trying to teach myself a little Python, some
                TypeScript, and maybe some CI/CD practices here and there.
              </p>
              <p>
                I'd love to work for a team that holds the same values as me,
                mainly an understanding of the need for diversity, knowing that
                mistakes are necessary for improvement, and most importantly,
                patience. I tend to take my time, working at my own pace.
              </p>
              <p>
                So much, in fact, that it took me two years after graduating to
                figure out what I wanted to do in life. Once I realised I wanted
                to code for a living, I worked full-time through an entire
                summer just to prep for my first day of college. All that time
                planning and preparing is how I've gotten to where I am today,
                and it's how I'll continue to handle big life decisions from
                here on. Always measure twice, cut once.
              </p>
              <p>
                When I'm not at my computer, you can find me taking a walk on a
                sunny day, playing volleyball, or working through a game that
                came out a decade ago.
              </p>
              <blockquote className="card p-6">
                <div className="mx-auto w-fit max-w-full space-y-2">
                  <p className="tagline text-center">
                    "I am built of the things I do every day, and the results are
                    no more than a byproduct."
                  </p>
                  <p className="muted">
                    — <cite>Shinsuke Kita</cite>
                  </p>
                </div>
              </blockquote>
            </div>

            {/* Divider */}
            <div className="bg-rule h-px w-full" aria-hidden="true" />

            {/* Stack teaser */}
            <div className="space-y-6">
              <p className="eyebrow">Tech Stack</p>
              <ul
                aria-label="Core technologies"
                className="flex flex-wrap gap-2"
              >
                {stackBadges.map((badge) => (
                  <li key={badge.label}>
                    <span className={`badge ${badge.variant}`}>
                      {badge.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setStackOpen(true)}
                className="link text-sm"
              >
                Take a look at my full stack <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <StackPanel open={stackOpen} onClose={() => setStackOpen(false)} />
    </>
  );
}

export default About;
