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
          I&apos;m a computer science student at Algonquin in my third and final
          year.
        </p>
        <p className="sm:mt-3">
          I mainly specialize in software development but know my way around
          some full-stack and IT.
        </p>
        <p className="hidden sm:mt-3 sm:inline-flex">
          I love to code. It&apos;s what I do best. When I&apos;m not coding, I
          think, &quot;Man, I wish I was coding right now.&quot;
        </p>
        <p className="text-black sm:mt-3">
          I want to work for you, and I want to work with you—whether
          you&apos;re hiring new talent or need an extra hand on your next
          project.
        </p>
      </div>
    </section>
  );
}

export default About;
