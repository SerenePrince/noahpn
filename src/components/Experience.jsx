import { useEffect, useRef, useState } from "react";
import algonquinLogo from "/algonquinLogo.png";
import fintracLogo from "/fintracLogo.png";

function Experience() {
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`p-10 min-h-screen flex flex-col items-stretch justify-center gap-5 w-full tablet:w-3/4 mx-auto ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl tracking-wider font-bold text-center">
        My Professional Experience
      </h2>
      <h3 className="text-2xl text-center">
        The highlights of my journey so far!
      </h3>

      {/* Toggle Buttons */}
      <div className="w-full flex items-center justify-evenly">
        <button
          className={`flex-1 border-2 text-xl p-3 rounded-lg ${
            isActive ? "bg-space-gradient text-white" : "bg-white text-black"
          }`}
          onClick={toggleActive}
          disabled={isActive}
          aria-pressed={isActive}
        >
          Work
        </button>
        <button
          className={`flex-1 border-2 text-xl p-3 rounded-lg ${
            !isActive ? "bg-space-gradient text-white" : "bg-white text-black"
          }`}
          onClick={toggleActive}
          disabled={!isActive}
          aria-pressed={!isActive}
        >
          Education
        </button>
      </div>

      {/* Work or Education Section */}
      {isActive ? (
        <article
          key="work"
          className="flex-grow flex flex-col w-full p-5 border-2 rounded-lg shadow-lg"
        >
          <div className="inline-flex items-center gap-5 animate-fade-in-up opacity-0">
            <img
              src={algonquinLogo}
              alt="Algonquin College Logo"
              className="border-2 rounded-full w-[75px] h-[75px] object-cover bg-white"
            />
            <div className="flex flex-col">
              <p className="text-lg">Sep 2024 - Dec 2024</p>
              <p className="text-2xl font-bold">Algonquin College</p>
              <p className="text-xl">Student Tester</p>
            </div>
          </div>
          <ul
            className="list-disc pl-5 animate-fade-in-up text-lg opacity-0"
            style={{ animationDelay: "0.25s" }}
          >
            <li>
              Contributed to the R3 project, a next-generation student
              information system designed to replace the existing platform.
            </li>
            <li>
              Designed and executed test cases for new features using Azure
              DevOps, facilitating efficient bug reporting and resolution.
            </li>
          </ul>

          <div
            className="inline-flex items-center gap-5 mt-5 mb-1 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={fintracLogo}
              alt="FINTRAC Logo"
              className="border-2 rounded-full w-[75px] h-[75px] object-cover bg-white"
            />
            <div className="flex flex-col">
              <p className="text-lg">Jan 2024 - Apr 2024</p>
              <p className="text-2xl font-bold">FINTRAC</p>
              <p className="text-xl">Application Developer</p>
            </div>
          </div>
          <ul
            className="list-disc pl-5 animate-fade-in-up text-lg opacity-0"
            style={{ animationDelay: "0.75s" }}
          >
            <li>
              Developed a Maven-based tool to streamline API documentation
              updates by scanning configuration files, accessing specified
              endpoints, and dynamically updating YAML fields.
            </li>
            <li>
              Diagnosed and resolved issues such as syntax errors, translation
              mismatches, and formatting inconsistencies using Azure DevOps.
            </li>
          </ul>
        </article>
      ) : (
        <article
          key="education"
          className="flex-grow flex flex-col w-full p-5 border-2 rounded-lg shadow-lg"
        >
          <div className="inline-flex items-center gap-5 animate-fade-in-up opacity-0">
            <img
              src={algonquinLogo}
              alt="Algonquin College Logo"
              className="border-2 rounded-full w-[75px] h-[75px] object-cover bg-white"
            />
            <div className="flex flex-col">
              <p className="text-lg">Jan 2023 - Dec 2025 (Expected)</p>
              <p className="text-2xl font-bold">Algonquin College</p>
              <p className="text-xl">
                Computer Engineering Technology - Computer Science
              </p>
            </div>
          </div>
          <ul
            className="list-disc pl-5 animate-fade-in-up text-lg opacity-0"
            style={{ animationDelay: "0.25s" }}
          >
            <li>
              Recipient of the Dean&apos;s Honour List on multiple occasions.
            </li>
            <li>
              Completed coursework in Object-Oriented Programming, Data
              Structures, Java Application Development, Network Programming, and
              Web Development.
            </li>
          </ul>
        </article>
      )}
    </section>
  );
}

export default Experience;
