import { useState } from "react";

function Experience() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

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
        "Developed a Java application to automate documentation updates.",
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
      <h1 className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        Experience
      </h1>
      <h2 className="mt-3 text-xl font-medium text-zinc-700 xl:text-2xl">
        Work. Learn. Repeat.
      </h2>

      {/* Toggle Buttons */}
      <nav className="mt-3 flex gap-3">
        {["Work", "Education"].map((label, index) => (
          <button
            key={label}
            onClick={() => setIsToggled(index === 1)}
            aria-pressed={isToggled === (index === 1)}
            className={`cursor-pointer rounded-lg border px-3 py-2 text-base transition xl:text-xl ${
              isToggled === (index === 1)
                ? "pointer-events-none border-black bg-black text-white"
                : "border-zinc-300 bg-white text-black hover:bg-zinc-100"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="w-full text-lg text-zinc-800 xl:text-2xl">
        {isToggled ? (
          <div className="mt-3 space-y-3">
            <div className="flex flex-row justify-evenly">
              <div>
                <p className="font-sans-serif text-zinc-600">
                  {education[currentEducationIndex].graduation}
                </p>
                <h4 className="font-medium">
                  {education[currentEducationIndex].school} ·{" "}
                  {education[currentEducationIndex].location}
                </h4>
                <h5 className="text-zinc-600">
                  {education[currentEducationIndex].degree}
                </h5>
                <ul className="font-sans-serif text-zinc-700">
                  {education[currentEducationIndex].achievements.map(
                    (achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            {/* Education Navigation */}
            <div className="mt-6 flex justify-center gap-3">
              {education.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentEducationIndex(index)}
                  className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                    currentEducationIndex === index
                      ? "bg-black"
                      : "bg-zinc-300 hover:bg-zinc-600"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-3 space-y-3">
            <div className="flex flex-row justify-evenly">
              <div>
                <p className="font-sans-serif text-zinc-600">
                  {jobs[currentJobIndex].date}
                </p>
                <h4 className="font-medium">{jobs[currentJobIndex].title}</h4>
                <h5 className="text-zinc-600">
                  {jobs[currentJobIndex].company} ·{" "}
                  {jobs[currentJobIndex].location}
                </h5>
                <ul className="font-sans-serif text-zinc-700">
                  {jobs[currentJobIndex].responsibilities.map((task, index) => (
                    <li key={index}>• {task}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              {jobs.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentJobIndex(index)}
                  className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                    currentJobIndex === index
                      ? "bg-black"
                      : "bg-zinc-400 hover:bg-zinc-600"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
