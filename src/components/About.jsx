function About() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Section Title */}
      <h1 className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        About
      </h1>

      {/* Title */}
      <h2 className="ont-medium mt-3 text-xl text-zinc-700 xl:text-3xl">
        Making apps. Taking naps.
      </h2>

      {/* Description */}
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I&apos;m Noah, a student at Algonquin College studying Computer Science.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I specialize in software development, but I can handle my share of IT
        and full-stack work as well.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I love to code—it&apos;s what I do best. When I&apos;m not coding,
        I&apos;m always thinking about what I&apos;d do for my next project.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-medium xl:text-xl">
        I&apos;m looking to work for or with you, whether you&apos;re a
        recruiter seeking new talent or a freelancer needing an extra hand.
      </p>
    </div>
  );
}

export default About;
