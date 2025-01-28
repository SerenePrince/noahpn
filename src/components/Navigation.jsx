import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";
import resume from "/NoahPNResume2025.pdf";

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Delay for 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <nav
      className={`text-black fixed top-0 right-0 z-50 transition-transform duration-500 bg-white h-screen p-3 
        ${isVisible ? "laptop:translate-x-0" : "laptop:translate-x-full"} 
        ${isVisible ? "transform" : "lg:transform-none"} 
        ${isVisible ? "laptop:transform-none" : ""} 
        laptop:block hidden`}
      aria-label="Main Navigation"
    >
      <ul className="flex flex-col space-y-3 items-center h-1/2 justify-start">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Spy on my About section"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Check out my Skills section"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Explore my Experience section"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Check out my cool Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Drop me a message in Contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-lg hover:text-purple-600 transition-colors rounded-lg"
            aria-label="Look through my resume!"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex flex-col space-y-3 items-center h-1/2 justify-end">
        <a
          href="https://github.com/SerenePrince"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check out my GitHub!"
          title="Check out my GitHub!"
        >
          <FaGithub className="text-3xl hover:text-purple-600 transition-colors icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nparknguyen/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn!"
          title="Connect on LinkedIn!"
        >
          <FaLinkedin className="text-3xl hover:text-purple-600 transition-colors icon" />
        </a>
        <a
          href="mailto:noahparknguyen@gmail.com"
          aria-label="Send me an email!"
          title="Send me an email!"
        >
          <FaEnvelope className="text-3xl hover:text-purple-600 transition-colors icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
