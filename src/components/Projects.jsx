import { useState } from "react";
import {
  LayoutDashboard,
  Zap,
  BarChart3,
  Code,
  Compass,
  RefreshCcw,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Monochrome icons consistent with original styling
const iconClass = "h-4 w-4 sm:h-5 sm:w-5 text-black";

const icons = {
  "Power Apps": <LayoutDashboard className={iconClass} />,
  "Power Automate": <Zap className={iconClass} />,
  "Power BI": <BarChart3 className={iconClass} />,
  React: <Code className={iconClass} />,
  "Tailwind CSS": <Compass className={iconClass} />,
  Java: <RefreshCcw className={iconClass} />,
  "Azure DevOps": <Lock className={iconClass} />,
};

const projects = [
  {
    title: "Client Onboarding Automation (DND)",
    description:
      "A Power Platform workflow automating initiative overview to reduce administrative workload.",
    technologies: ["Power Apps", "Power Automate", "Azure DevOps"],
  },
  {
    title: "AI Chatbot Web Interface (DND)",
    description:
      "A lightweight web UI for internal policy document lookup using NLP, built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Executive Data Dashboard (DND)",
    description:
      "Interactive Power BI dashboard visualizing federal learning operations for strategic reporting.",
    technologies: ["Power BI"],
  },
  {
    title: "API Documentation Automation (FINTRAC)",
    description:
      "Java utility to validate OpenAPI documentation and eliminate repetitive manual updates.",
    technologies: ["Java", "Azure DevOps"],
  },
];

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

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Section Title */}
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        Projects
      </h1>

      {/* Subtitle */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        How many story points is a nap worth?
      </h2>

      {/* Project Content */}
      <div className="w-full space-y-3 text-zinc-800">
        <div className="flex flex-col justify-center text-center">
          {/* Project Title */}
          <p className="mt-1 text-center font-sans-serif text-xs font-normal text-zinc-700 sm:text-base xl:text-xl">
            {currentProject.title}
          </p>

          {/* Description */}
          <p className="mt-1 text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
            {currentProject.description}
          </p>

          {/* Technology Tags */}
          <div className="mt-1 flex flex-row justify-center gap-1 font-sans-serif text-lg text-zinc-700 sm:mt-3 sm:gap-3 xl:text-2xl">
            {currentProject.technologies.map((tech) => (
              <span
                key={tech}
                className="mt-1 flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-base xl:text-xl"
              >
                {icons[tech]}
                <span className="hidden sm:ml-3 sm:inline">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Project Navigation */}
        <nav
          aria-label="Project Navigation"
          className="flex items-center justify-center gap-2 text-base sm:mt-6 sm:gap-3 sm:text-2xl"
        >
          <ChevronLeft
            onClick={previousProject}
            className="cursor-pointer"
            aria-label="Previous Project"
          />
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`h-2 w-2 cursor-pointer rounded-full font-sans-serif transition-all duration-300 sm:h-3 sm:w-3 ${
                currentProjectIndex === index
                  ? "bg-black"
                  : "bg-zinc-400 hover:bg-zinc-600"
              }`}
              aria-label={`Project ${index + 1}`}
            ></span>
          ))}
          <ChevronRight
            onClick={nextProject}
            className="cursor-pointer"
            aria-label="Next Project"
          />
        </nav>
      </div>
    </div>
  );
}

export default Projects;
