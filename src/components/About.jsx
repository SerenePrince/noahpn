import { useState } from "react";
import Container from "./Container";
import StackPanel from "./StackPanel";
import headshot from "../assets/images/noah-headshot-profile.png";

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

            {/* Bio — float layout: image anchors top-left, text wraps around */}
            <div className="space-y-6 overflow-hidden">
              <img
                src={headshot}
                alt=""
                aria-hidden="true"
                width={626}
                height={626}
                className="border-rule float-left mr-8 mb-4 hidden aspect-square w-50 rounded-(--radius) border object-cover object-top sm:block"
              />
              <p>
                A fullstack developer with experience building production-ready
                tools and apps. I'm currently based in Ottawa — hoping to land a
                role in frontend, backend, or anything in between.
              </p>
              <p>
                My primary stack includes Java and Spring Boot for the back,
                React and Tailwind for the front, and PostgreSQL for the data.
                Right now I'm trying to teach myself a little Python, some
                SQLite, and maybe some TypeScript here and there.
              </p>
              <p>
                I'd love to work for a team that holds the same values as me,
                mainly an understanding of the need for diversity, knowing that
                mistakes are necessary for improvement, and most importantly,
                patience. You can have the most talented people in the world on
                a team, but without it, what you ship can be rushed or
                unfinished.
              </p>
              <p>
                When I'm not at my computer, you can find me taking a walk on a
                sunny day, playing volleyball, or working through a game that
                came out a decade ago.
              </p>
              <blockquote className="card p-6">
                <div className="mx-auto w-fit max-w-full space-y-4">
                  <p className="tagline text-center">
                    "I am built of the things I do every day, and the results
                    are no more than a byproduct."
                  </p>
                  <p className="muted text-center">
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
