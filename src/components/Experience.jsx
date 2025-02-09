import { useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

function Experience() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const previousEdcucation = () => {
    setCurrentEducationIndex((prev) =>
      prev === 0 ? education.length - 1 : prev - 1,
    );
  };

  const nextEducation = () => {
    setCurrentEducationIndex((prev) =>
      prev === education.length - 1 ? 0 : prev + 1,
    );
  };

  const previousJob = () => {
    setCurrentJobIndex((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
  };

  const nextJob = () => {
    setCurrentJobIndex((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
  };

  const jobs = [
    {
      title: "Student Tester",
      company: "Algonquin College",
      location: "Ottawa, ON",
      date: "Sep 2024 - Dec 2024",
      responsibilities: [
        "Designed and executed test cases using Azure DevOps.",
        "Focused on regression testing and mobile responsiveness.",
      ],
    },
    {
      title: "Application Developer",
      company: "FINTRAC",
      location: "Ottawa, ON",
      date: "Jan 2024 - Apr 2024",
      responsibilities: [
        "Built a Java app to automate documentation updates.",
        "Worked with Apache Maven, Eclipse, and basic fetch requests.",
      ],
    },
  ];

  const education = [
    {
      degree: "Computer Engineering Technology - Computer Science",
      school: "Algonquin College",
      location: "Ottawa, ON",
      graduation: "Expected Graduation 2025",
      achievements: ["GPA - 3.76 / 4.0", "Dean's Honours List (3x)"],
    },
  ];

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Header */}
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        Experience
      </h1>
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Earning by day, learning by night.
      </h2>

      {/* Toggle Buttons */}
      <nav className="mt-1 flex gap-1 sm:mt-3 sm:gap-3">
        {["Work", "Education"].map((label, index) => (
          <button
            key={label}
            onClick={() => setIsToggled(index === 1)}
            aria-pressed={isToggled === (index === 1)}
            className={`cursor-pointer rounded-lg border px-2 py-1 font-sans-serif text-xs transition sm:px-3 sm:py-2 sm:text-base xl:text-xl ${
              isToggled === (index === 1)
                ? "pointer-events-none border-black bg-black text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-black hover:text-black hover:shadow-xl"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="w-full text-sm text-zinc-800 sm:text-lg xl:text-2xl">
        {isToggled ? (
          <div className="mt-1 space-y-3 sm:mt-3">
            <div className="flex flex-row justify-evenly">
              <div>
                <p className="font-sans-serif text-xs text-zinc-600 sm:text-base xl:text-xl">
                  {education[currentEducationIndex].graduation}
                </p>
                <h4 className="font-medium">
                  {education[currentEducationIndex].school} ·{" "}
                  {education[currentEducationIndex].location}
                </h4>
                <p className="font-sans-serif text-xs text-zinc-600 sm:text-base xl:text-xl">
                  {education[currentEducationIndex].degree.split("-")[0]}
                </p>
                <ul className="hidden font-sans-serif text-xs text-zinc-700 sm:inline sm:text-base xl:text-xl">
                  {education[currentEducationIndex].achievements.map(
                    (achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            {/* Education Navigation */}
            <div className="flex items-center justify-center gap-2 text-base sm:mt-6 sm:gap-3 sm:text-2xl">
              <FaCaretLeft
                onClick={previousEdcucation}
                className="cursor-pointer"
              />
              {education.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentEducationIndex(index)}
                  className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
                    currentEducationIndex === index
                      ? "bg-black"
                      : "bg-zinc-300 hover:bg-zinc-600"
                  }`}
                ></span>
              ))}
              <FaCaretRight
                onClick={nextEducation}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <div className="mt-1 space-y-3 sm:mt-3">
            <div className="flex flex-row justify-evenly">
              <div>
                <p className="font-sans-serif text-xs text-zinc-600 sm:text-base xl:text-xl">
                  {jobs[currentJobIndex].date}
                </p>
                <h4 className="font-medium">{jobs[currentJobIndex].title}</h4>
                <p className="font-sans-serif text-xs text-zinc-600 sm:text-base xl:text-xl">
                  {jobs[currentJobIndex].company} ·{" "}
                  {jobs[currentJobIndex].location}
                </p>
                <ul className="hidden font-sans-serif text-xs text-zinc-700 sm:inline sm:text-base xl:text-xl">
                  {jobs[currentJobIndex].responsibilities.map((task, index) => (
                    <li key={index}>• {task}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-base sm:mt-6 sm:gap-3 sm:text-2xl">
              <FaCaretLeft onClick={previousJob} className="cursor-pointer" />
              {jobs.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentJobIndex(index)}
                  className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
                    currentJobIndex === index
                      ? "bg-black"
                      : "bg-zinc-400 hover:bg-zinc-600"
                  }`}
                ></span>
              ))}
              <FaCaretRight onClick={nextJob} className="cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
