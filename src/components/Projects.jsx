import { useState } from "react";

import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // For demo links

const icons = {
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  React: <SiReact />,
  "Node.js": <SiNodedotjs />,
  Tailwind: <SiTailwindcss />,
  Java: <FaJava />,
  "Spring Boot": <SiSpringboot />,
};

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const resources = {
    MongoDB: "https://www.mongodb.com/",
    Express: "https://expressjs.com/",
    React: "https://react.dev/",
    "Node.js": "https://nodejs.org/en",
    Tailwind: "https://tailwindcss.com",
    Java: "https://docs.oracle.com/en/java/",
    "Spring Boot": "https://docs.spring.io/spring-boot/index.html",
  };
  const projects = [
    {
      title: "Meeting Map",
      description:
        "A web app I created to simplify booking meeting rooms and improve team collaboration.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      github: "https://github.com/SerenePrince/MeetingMap",
      demo: "https://meetingmap.onrender.com",
    },
    {
      title: "LinkLounge",
      description:
        "A platform I built to easily create personal webpages for hosting links and social profiles.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      github: "https://github.com/SerenePrince/LinkLounge",
      demo: "https://linklounge-2inr.onrender.com",
    },
    {
      title: "Video Game Database",
      description:
        "A website to discover and explore video games. Read or submit reviews, like IMDb, but for gaming.",
      technologies: ["Java", "Spring Boot", "React", "Tailwind"],
      github: "https://github.com/SerenePrince/VGDB",
      demo: "",
    },
    {
      title: "Flashcards",
      description:
        "A simple tool I made for creating and reviewing flashcards to make studying easier.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/Flashcards",
      demo: "https://sereneprince.github.io/Flashcards/",
    },
    {
      title: "TipOff",
      description:
        "A Wordle-inspired game where players guess NBA players with as few guesses as possible.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/TipOff",
      demo: "https://sereneprince.github.io/TipOff/",
    },
    {
      title: "Wordle Clone",
      description:
        "A clone of the popular word-guessing game where you try to guess the word with as few guesses as possible.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/Wordle",
      demo: "https://sereneprince.github.io/Wordle/",
    },
  ];

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      <h1 className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        Projects
      </h1>
      {/* Title */}
      <h2 className="ont-medium mt-3 text-xl text-zinc-700 xl:text-3xl">
        Made with love... and a little stress.
      </h2>

      {/* Project Content */}
      <div className="w-full space-y-3 text-zinc-800">
        <div className="flex flex-col justify-center text-center">
          <div className="mt-3 flex items-center justify-center gap-3 text-black">
            <p className="text-lg font-medium text-zinc-700 xl:text-2xl">
              {projects[currentProjectIndex].title}
            </p>
            <a
              href={projects[currentProjectIndex].github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 font-sans-serif text-lg font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl xl:text-2xl"
            >
              <SiGithub />
            </a>
            {projects[currentProjectIndex].demo && (
              <a
                href={projects[currentProjectIndex].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 font-sans-serif text-lg font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl xl:text-2xl"
              >
                <FiExternalLink />
              </a>
            )}
          </div>

          <p className="mt-3 font-sans-serif text-base text-zinc-700 xl:text-xl">
            {projects[currentProjectIndex].description}
          </p>
          <div className="mt-3 flex flex-row justify-center gap-3 font-sans-serif text-lg text-zinc-700 xl:text-2xl">
            {projects[currentProjectIndex].technologies.map((tech) => (
              <a
                key={tech}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 font-sans-serif text-base font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl xl:text-xl"
                role="listitem"
                aria-label={tech}
                href={resources[tech]}
              >
                {icons[tech]}
                <span className="hidden sm:inline">{tech}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-6 flex justify-center gap-3 font-sans-serif">
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`h-3 w-3 cursor-pointer rounded-full font-sans-serif transition-all duration-300 ${
                currentProjectIndex === index
                  ? "bg-black"
                  : "bg-zinc-400 hover:bg-zinc-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
