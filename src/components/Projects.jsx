import { useState, useEffect, useRef } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";

// Importing project thumbnails
import tipoffThumbnail from "/tipoffThumbnail.png";
import linkloungeThumbnail from "/linkloungeThumbnail.png";
import wordleThumbnail from "/wordleThumbnail.png";
import flashcardsThumbnail from "/flashcardsThumbnail.png";
import vgdbThumbnail from "/vgdbThumbnail.png";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "TipOff",
      date: "Jan 2025",
      description:
        "A Wordle-inspired NBA guessing game built with React and Tailwind. Players try to guess the NBA player of the day based on hints provided after each attempt.",
      imgSrc: tipoffThumbnail,
      github: "https://github.com/SerenePrince/TipOff",
      liveDemo: "https://sereneprince.github.io/TipOff/",
      icons: ["react", "tailwind"],
    },
    {
      title: "LinkLounge",
      date: "Dec 2024 - Jan 2025",
      description:
        "A full-stack application built using MERN. Allows users to showcase their social media and personal links. Customize your page by adding icons, buttons, and links as needed.",
      imgSrc: linkloungeThumbnail,
      github: "https://github.com/SerenePrince/LinkLounge",
      liveDemo: "https://linklounge-2inr.onrender.com/",
      icons: ["mongo", "express", "nodejs", "react", "tailwind"],
    },
    {
      title: "Wordle Clone",
      date: "Dec 2024",
      description:
        "A clone of the popular word-guessing game Wordle, developed with React and Tailwind. Players have six attempts to guess the five-letter word, with hints offered after each guess.",
      imgSrc: wordleThumbnail,
      github: "https://github.com/SerenePrince/Wordle",
      liveDemo: "https://sereneprince.github.io/Wordle/",
      icons: ["react", "tailwind"],
    },
    {
      title: "Flashcards",
      date: "Dec 2024",
      description:
        "A browser-based flashcard app created with React and Tailwind, enabling users to create, manage, and save their study cards. Features include local browser storage and the option to download a JSON backup for safekeeping.",
      imgSrc: flashcardsThumbnail,
      github: "https://github.com/SerenePrince/Flashcards",
      liveDemo: "https://sereneprince.github.io/Flashcards/",
      icons: ["react", "tailwind"],
    },
    {
      title: "Video Game Database",
      date: "Nov 2024 - Dec 2024",
      description:
        "A video game version of IMDb, featuring a Spring backend and React frontend. Includes a search function, user-submitted reviews, and a responsive REST API.",
      imgSrc: vgdbThumbnail,
      github: "https://github.com/SerenePrince/VGDB",
      liveDemo: "https://github.com/SerenePrince/VGDB",
      icons: ["java", "maven", "spring", "nodejs", "react", "tailwind"],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`p-10 min-h-screen flex flex-col items-center justify-center gap-5 w-full tablet:w-3/4 mx-auto ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-center">Homemade Projects</h2>
      <h3 className="text-2xl text-center">
        All of these projects were either made for fun or to help me pick up
        something new.
      </h3>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5 w-full text-black">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <img
              src={project.imgSrc}
              alt={`${project.title} Thumbnail`}
              className="w-full h-60 object-cover rounded-lg shadow-md mb-5"
            />
            <p className="text-sm">{project.date}</p>
            <h4 className="text-2xl font-bold">{project.title}</h4>
            <p className="text-lg mb-3">{project.description}</p>
            <div className="flex gap-5 mb-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-xl hover:text-purple-600 transition"
              >
                <FaGithub size={30} />
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="text-xl hover:text-purple-600 transition"
              >
                <FaGlobe size={30} />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
              {project.icons.map((icon, i) => (
                <img
                  key={i}
                  src={`https://skillicons.dev/icons?i=${icon}`}
                  alt={`${icon} icon`}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
