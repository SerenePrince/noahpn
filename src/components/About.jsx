function About() {
  return (
    <section
      role="region"
      aria-labelledby="about-title"
      className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black"
    >
      {/* Section Title */}
      <h1
        id="about-title"
        className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl"
      >
        About
      </h1>

      {/* Subtitle */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Making apps, taking naps.
      </h2>

      {/* Description */}
      <div className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
        <p>
          Application Developer specializing in secure, internal solutions for
          DND.
        </p>
        <p className="sm:mt-3">
          Focused on the Microsoft Power Platform to automate workflows and
          build user-focused applications.
        </p>
        <p className="sm:mt-3">
          Proficient in React and Tailwind CSS for custom interfaces, with
          experience working in Agile team environments.
        </p>
      </div>
    </section>
  );
}

export default About;
