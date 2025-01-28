import { useState, useEffect, useRef } from "react";
import profilePicture from "/profileHalfBody.jpg";

function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className={`p-10 min-h-screen flex flex-col laptop:flex-row items-center justify-center gap-5 w-full tablet:w-3/4 mx-auto ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
      aria-labelledby="about-header"
    >
      <article className="w-full laptop:w-1/2 flex flex-col gap-5">
        <h2
          id="about-header"
          className="text-4xl tracking-wider font-bold text-center"
        >
          About Me!
        </h2>
        <p className="text-2xl">
          Hey there! I&apos;m Noah, a student at Algonquin College studying
          Computer Science, and I&apos;m hoping to be your newest hire.
          Potentially. Hopefully. Maybe... please?
        </p>

        <p className="text-2xl">
          I call myself a software developer, but I also know my way around some
          full-stack and IT work.
        </p>
        <p className="text-2xl">
          Need someone to help build a website, develop an API, or—I don&apos;t
          know—just hang out? Hit me up!
        </p>
      </article>

      <figure className="w-full laptop:w-1/2 relative flex justify-center items-end">
        <img
          src={profilePicture}
          alt="Noah Park-Nguyen, a software developer and student looking for work."
          className="w-full tablet:w-1/2 laptop:w-3/4 rounded-lg shadow-lg"
          aria-describedby="profile-info"
        />
        <figcaption
          id="profile-info"
          className="absolute bg-space-gradient p-5 rounded-lg shadow-lg m-5"
        >
          <p>
            <strong>Location:</strong> Ottawa, Ontario 🇨🇦
          </p>
          <p>
            <strong>Open to:</strong> Remote and in-person roles
          </p>
          <p>
            <strong>Pronouns:</strong> He/Him
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

export default About;
