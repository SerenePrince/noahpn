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
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

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

  const previousProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1,
    );
  };

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
        "Simplifies booking meeting rooms and improves team collaboration.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      github: "https://github.com/SerenePrince/MeetingMap",
      demo: "https://meetingmap.onrender.com",
    },
    {
      title: "LinkLounge",
      description:
        "Lets you create personal web pages to host links and social profiles.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      github: "https://github.com/SerenePrince/LinkLounge",
      demo: "https://linklounge-2inr.onrender.com",
    },
    {
      title: "Video Game Database",
      description: "A site for reading and writing video game reviews.",
      technologies: ["Java", "Spring Boot", "React", "Tailwind"],
      github: "https://github.com/SerenePrince/VGDB",
      demo: "",
    },
    {
      title: "Flashcards",
      description:
        "A simple tool for creating and reviewing flashcards to make studying easier.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/Flashcards",
      demo: "https://sereneprince.github.io/Flashcards/",
    },
    {
      title: "TipOff",
      description:
        "A game where you guess the secret NBA player in as few tries as possible.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/TipOff",
      demo: "https://sereneprince.github.io/TipOff/",
    },
    {
      title: "Wordle Clone",
      description: "A remake of the classic word-guessing game.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/SerenePrince/Wordle",
      demo: "https://sereneprince.github.io/Wordle/",
    },
  ];

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        Projects
      </h1>
      {/* Title */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Made with love... but mostly React.
      </h2>

      {/* Project Content */}
      <div className="w-full space-y-3 text-zinc-800">
        <div className="flex flex-col justify-center text-center">
          <div className="mt-1 flex items-center justify-center gap-1 text-black sm:mt-3 sm:gap-3">
            <p className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:text-base xl:text-xl">
              {projects[currentProjectIndex].title}
            </p>
            <a
              href={projects[currentProjectIndex].github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-lg xl:text-2xl"
            >
              <SiGithub />
            </a>
            {projects[currentProjectIndex].demo && (
              <a
                href={projects[currentProjectIndex].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-lg xl:text-2xl"
              >
                <FiExternalLink />
              </a>
            )}
          </div>

          <p className="mt-1 text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
            {projects[currentProjectIndex].description}
          </p>
          <div className="mt-1 flex flex-row justify-center gap-1 font-sans-serif text-lg text-zinc-700 sm:mt-3 sm:gap-3 xl:text-2xl">
            {projects[currentProjectIndex].technologies.map((tech) => (
              <a
                key={tech}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-base xl:text-xl"
                role="listitem"
                aria-label={tech}
                href={resources[tech]}
              >
                {icons[tech]}
                <span className="hidden sm:ml-3 sm:inline">{tech}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-center gap-2 text-base sm:mt-6 sm:gap-3 sm:text-2xl">
          <FaCaretLeft onClick={previousProject} className="cursor-pointer" />
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`h-2 w-2 cursor-pointer rounded-full font-sans-serif transition-all duration-300 sm:h-3 sm:w-3 ${
                currentProjectIndex === index
                  ? "bg-black"
                  : "bg-zinc-400 hover:bg-zinc-600"
              }`}
            ></span>
          ))}
          <FaCaretRight onClick={nextProject} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
