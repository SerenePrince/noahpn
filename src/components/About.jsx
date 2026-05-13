import { useState } from "react";
import Container from "./Container";
import StackPanel from "./StackPanel";

const stackBadges = [
  { label: "Java",        variant: "badge-green"   },
  { label: "Spring Boot", variant: "badge-green"   },
  { label: "React",       variant: "badge-blue"    },
  { label: "JavaScript",  variant: "badge-blue"    },
  { label: "Node.js",     variant: "badge-blue"    },
  { label: "Python",      variant: "badge-amber"   },
  { label: "PostgreSQL",  variant: "badge-teal"    },
  { label: "Docker",      variant: "badge-purple"  },
];

function About() {
  const [stackOpen, setStackOpen] = useState(false);

  return (
    <>
      <section id="about" aria-labelledby="about-heading" className="w-full">
        <Container>
          <div className="flex flex-col space-y-8 py-24">

            {/* Heading */}
            <h2 id="about-heading">Hey, I'm Noah.</h2>

            {/* Divider */}
            <div className="bg-rule h-px w-full" aria-hidden="true" />

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
                Tailwind. I have my go-to setup, but I'm always excited to pick
                up something new.
              </p>
              <p>
                I work best independently, but I know how to show up for a team
                — one that values patience, accountability, and learning from
                mistakes over blame.
              </p>
              <p>
                When I'm not at my computer, you can probably find me taking a
                walk, playing volleyball, or working through a game that came out
                a decade ago.
              </p>
              <blockquote className="card p-6 space-y-2">
                <p className="tagline">
                  "I am built of the things I do every day, and the results are no
                  more than a byproduct."
                </p>
                <p className="muted">— Shinsuke Kita</p>
              </blockquote>
            </div>

            {/* Divider */}
            <div className="bg-rule h-px w-full" aria-hidden="true" />

            {/* Stack teaser */}
            <div className="space-y-6">
              <p className="eyebrow">Tech Stack</p>
              <ul aria-label="Core technologies" className="flex flex-wrap gap-2">
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
