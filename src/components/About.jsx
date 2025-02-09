function About() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Section Title */}
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        About
      </h1>

      {/* Title */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Making apps, taking naps.
      </h2>

      {/* Description */}
      <p className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
        I&apos;m a computer science student at Algonquin in my third and final
        year.
      </p>
      <p className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
        I mainly specialize in software development but know my way around some
        full stack and IT.
      </p>
      <p className="hidden text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:inline sm:text-base xl:text-xl">
        I love to code. It&apos;s what I do best. When I&apos;m not coding, I
        think, &quot;Man, I wish I was coding right now.&quot;
      </p>
      <p className="text-center font-sans-serif text-xs font-normal sm:mt-3 sm:text-base xl:text-xl">
        I want to work for you, and I want to work with you—whether you&apos;re
        hiring new talent or need an extra hand on your next project.
      </p>
    </div>
  );
}

export default About;
