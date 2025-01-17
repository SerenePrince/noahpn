import { useState, useEffect, useRef } from "react";

// Import SVG images
import reactIcon from "/react.svg";
import tailwindIcon from "/tailwind.svg";
import htmlIcon from "/html.svg";
import cssIcon from "/css.svg";
import jsIcon from "/js.svg";
import nodeIcon from "/node.svg";
import javaIcon from "/java.svg";
import mavenIcon from "/maven.svg";
import springIcon from "/spring.svg";
import mongoIcon from "/mongo.svg";
import gitIcon from "/git.svg";
import githubIcon from "/github.svg";
import vscodeIcon from "/vscode.svg";
import viteIcon from "/vite.svg";
import ideaIcon from "/idea.svg";
import pythonIcon from "/python.svg";
import cIcon from "/c.svg";
import cppIcon from "/cpp.svg";
import vsIcon from "/vs.svg";
import azureIcon from "/azure.svg";

function Skills() {
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

  return (
    <div
      id="skills"
      ref={sectionRef}
      className={`p-10 min-h-screen flex flex-col items-center justify-center gap-5 w-full laptop:w-3/4 mx-auto ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold tracking-wider">
        My Tech Stack & Other Skills
      </h2>
      <h3 className="text-2xl">
        I have my personal preferences, but I&apos;m always open to learning
        just about anything.
      </h3>

      {/* Frontend */}
      <p className="text-xl font-semibold">Frontend</p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={reactIcon}
            alt="React - JavaScript library for building user interfaces"
            className="w-[50px]"
            title="React - JavaScript library for building user interfaces"
          />
          React
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={tailwindIcon}
            alt="Tailwind CSS - Utility-first CSS framework"
            className="w-[50px]"
            title="Tailwind CSS - Utility-first CSS framework"
          />
          Tailwind CSS
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={htmlIcon}
            alt="HTML5 - Standard markup language for documents designed to be displayed in a web browser"
            className="w-[50px]"
            title="HTML5 - Standard markup language for documents designed to be displayed in a web browser"
          />
          HTML5
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={cssIcon}
            alt="CSS - Style sheet language used for describing the presentation of a document"
            className="w-[50px]"
            title="CSS3 - Style sheet language used for describing the presentation of a document"
          />
          CSS3
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={jsIcon}
            alt="JavaScript - Programming language used to create dynamic content on webpages"
            className="w-[50px]"
            title="JavaScript - Programming language used to create dynamic content on webpages"
          />
          JavaScript
        </div>
      </div>

      {/* Backend */}
      <p className="text-xl font-semibold">Backend</p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={nodeIcon}
            alt="Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine"
            className="w-[50px]"
            title="Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine"
          />
          Node.js
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={javaIcon}
            alt="Java - High-level, class-based, object-oriented programming language"
            className="w-[50px]"
            title="Java - High-level, class-based, object-oriented programming language"
          />
          Java
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={mavenIcon}
            alt="Maven - Build automation tool for Java projects"
            className="w-[50px]"
            title="Maven - Build automation tool for Java projects"
          />
          Apache Maven
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={springIcon}
            alt="Spring Boot - Java-based framework for building web applications"
            className="w-[50px]"
            title="Spring Boot - Java-based framework for building web applications"
          />
          Spring Boot
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={mongoIcon}
            alt="MongoDB - NoSQL database used for storing data in JSON-like format"
            className="w-[50px]"
            title="MongoDB - NoSQL database used for storing data in JSON-like format"
          />
          MongoDB
        </div>
      </div>

      {/* Tools */}
      <p className="text-xl font-semibold">Tools</p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={gitIcon}
            alt="Git - Version control system for tracking changes in source code"
            className="w-[50px]"
            title="Git - Version control system for tracking changes in source code"
          />
          Git
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={githubIcon}
            alt="GitHub - Git repository hosting service"
            className="w-[50px]"
            title="GitHub - Git repository hosting service"
          />
          GitHub
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={vscodeIcon}
            alt="VSCode - Source-code editor developed by Microsoft"
            className="w-[50px]"
            title="VSCode - Source-code editor developed by Microsoft"
          />
          Visual Studio Code
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={viteIcon}
            alt="Vite - Build tool for modern web projects"
            className="w-[50px]"
            title="Vite - Build tool for modern web projects"
          />
          Vite
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={ideaIcon}
            alt="IntelliJ IDEA - Integrated development environment for Java"
            className="w-[50px]"
            title="IntelliJ IDEA - Integrated development environment for Java"
          />
          IntelliJ IDEA
        </div>
      </div>

      {/* Learning */}
      <p className="text-xl font-semibold">Learning</p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={pythonIcon}
            alt="Python - High-level, interpreted programming language"
            className="w-[50px]"
            title="Python - High-level, interpreted programming language"
          />
          Python
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={cIcon}
            alt="C - General-purpose, procedural programming language"
            className="w-[50px]"
            title="C - General-purpose, procedural programming language"
          />
          C
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={cppIcon}
            alt="C++ - General-purpose programming language with object-oriented features"
            className="w-[50px]"
            title="C++ - General-purpose programming language with object-oriented features"
          />
          C++
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={vsIcon}
            alt="Visual Studio - Integrated development environment from Microsoft"
            className="w-[50px]"
            title="Visual Studio - Integrated development environment from Microsoft"
          />
          Visual Studio
        </div>
        <div className="flex items-center gap-1 w-full phone:w-auto">
          <img
            src={azureIcon}
            alt="Microsoft Azure DevOps - Software development platform from Microsoft"
            className="w-[50px]"
            title="Azure DevOps - Software development platform from Microsoft"
          />
          Azure DevOps
        </div>
      </div>
    </div>
  );
}

export default Skills;
