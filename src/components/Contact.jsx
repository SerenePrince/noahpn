import { useState, useEffect, useRef } from "react";

function Contact() {
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
      id="contact"
      ref={sectionRef}
      className={`p-10 min-h-screen flex flex-col items-center justify-center gap-5 w-full tablet:w-1/2 mx-auto text-center ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold tracking-wider">Let&apos;s Connect!</h2>
      <h3 className="text-2xl">
        Whether you&apos;re a recruiter looking for new talent or a freelancer
        needing an extra hand, I&apos;d love to work with you!
      </h3>
      <p className="text-xl">
        Shoot me an email at{" "}
        <a
          href="mailto:noahparknguyen@gmail.com"
          className="font-bold underline hover:text-purple-600 transition"
          aria-label="Send an email to Noah Park Nguyen"
          title="Email me at noahparknguyen@gmail.com"
        >
          noahparknguyen@gmail.com
        </a>
        .
      </p>
      <p className="text-xl">
        Find me on{" "}
        <a
          href="https://www.linkedin.com/in/nparknguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-purple-600 transition"
          aria-label="Visit Noah Park Nguyen's LinkedIn profile"
          title="Visit my LinkedIn"
        >
          LinkedIn
        </a>{" "}
        or check out my work on{" "}
        <a
          href="https://github.com/SerenePrince"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-purple-600 transition"
          aria-label="Visit Noah Park Nguyen's GitHub profile"
          title="Visit my GitHub"
        >
          GitHub
        </a>
        .
      </p>
      <p className="text-sm">
        I&apos;m not really a social media guy, so these are the best ways to
        reach me!
      </p>
    </section>
  );
}

export default Contact;
