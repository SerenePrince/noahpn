import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Timer from "./components/Timer";

const slides = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
const slideComponents = { Home, About, Skills, Experience, Projects, Contact };

function App() {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const previousSlide = () => {
    const index = slides.indexOf(activeSlide);
    if (index > 0) setActiveSlide(slides[index - 1]);
  };

  const nextSlide = () => {
    const index = slides.indexOf(activeSlide);
    if (index < slides.length - 1) setActiveSlide(slides[index + 1]);
  };

  const ActiveSlideComponent = slideComponents[activeSlide];

  // Adding keyboard event listener
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <>
      {/* NAVIGATION */}
      <header className="border-b border-tertiary">
        <Navigation
          slides={slides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* LEFT COLUMN */}
        <main
          role="main"
          className="flex w-full flex-col border-b border-tertiary lg:w-2/3 lg:border-r lg:border-b-0"
        >
          <div className="flex flex-col gap-3 px-3 pt-3">
            <Timer />
            <ActiveSlideComponent />
          </div>

          {/* SOCIAL & SLIDE NAVIGATION */}
          <nav
            role="navigation"
            className="flex w-full justify-between p-3 text-3xl xl:text-5xl"
          >
            <section className="flex items-center gap-5">
              {[
                {
                  href: "https://www.linkedin.com/in/nparknguyen/",
                  icon: <FaLinkedinIn />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:noahparknguyen@gmail.com",
                  icon: <FaEnvelope />,
                  label: "Email",
                },
                {
                  href: "https://github.com/SerenePrince",
                  icon: <FaGithub />,
                  label: "GitHub",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center rounded-xl border border-primary p-2 transition hover:border-white hover:bg-tertiary hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </section>

            <section className="flex items-center gap-5">
              <button
                onClick={previousSlide}
                disabled={slides.indexOf(activeSlide) === 0}
                aria-label="Previous Slide"
                aria-disabled={slides.indexOf(activeSlide) === 0}
                className="inline-flex cursor-pointer items-center rounded-xl border border-primary p-2 transition hover:border-white hover:bg-tertiary hover:text-white disabled:pointer-events-none disabled:opacity-50"
              >
                <FaRegArrowAltCircleLeft />
              </button>
              {slides.indexOf(activeSlide) + 1} / {slides.length}
              <button
                onClick={nextSlide}
                disabled={slides.indexOf(activeSlide) === slides.length - 1}
                aria-label="Next Slide"
                aria-disabled={
                  slides.indexOf(activeSlide) === slides.length - 1
                }
                className="inline-flex cursor-pointer items-center rounded-xl border border-primary p-2 transition hover:border-white hover:bg-tertiary hover:text-white disabled:pointer-events-none disabled:opacity-50"
              >
                <FaRegArrowAltCircleRight />
              </button>
            </section>
          </nav>
        </main>

        {/* RIGHT COLUMN - NEXT SLIDE PREVIEW & NOTES */}
        <aside className="flex w-full flex-row gap-3 text-base lg:w-1/3 lg:flex-col xl:text-xl">
          <span className="flex w-1/3 flex-col gap-3 border-r border-tertiary p-3 lg:w-full">
            <p>
              {slides.indexOf(activeSlide) < slides.length - 1
                ? "Next slide"
                : "End of slide show"}
            </p>
            <div
              onClick={() => nextSlide()}
              className={`flex aspect-video w-full items-center justify-center ${slides.indexOf(activeSlide) < slides.length - 1 ? "bg-white" : "bg-black"}`}
            >
              {slides.indexOf(activeSlide) < slides.length - 1 && (
                <h1 className="text-3xl font-bold text-black xl:text-5xl">
                  {slides[slides.indexOf(activeSlide) + 1]}
                </h1>
              )}
            </div>
          </span>

          <span className="hidden border-b border-tertiary lg:flex" />
          <p
            className="mt-3 w-2/3 text-lg lg:mt-0 lg:w-full lg:px-3 xl:text-2xl"
            aria-live="assertive"
          >
            {getSlideNotes(activeSlide)}
          </p>
        </aside>
      </div>
    </>
  );
}

const getSlideNotes = (slide) =>
  ({
    Home: "A portfolio inspired by PowerPoint. Best experienced in full screen. Built with React and Tailwind. Mobile responsiveness is a work in progress.",
    About:
      "Outside of tech, you'll find me playing volleyball, hitting the gym, or playing video games. Recently, my favourite hobby has been going on walks while listening to an album I love.",
    Skills:
      "I've also been sharpening my Java skills, working with Spring Boot for back-end development. I'm also learning C, C++, and Python.",
    Experience:
      "As of February 2025, I've received an offer to join the Department of National Defence (DND). Exciting times ahead.",
    Projects:
      "All of these projects were created for learning and personal growth. I'll get to the startup one day.",
    Contact:
      "I'm not active on social media, so these are the best ways to get connected with me.",
  })[slide] || "";

export default App;
