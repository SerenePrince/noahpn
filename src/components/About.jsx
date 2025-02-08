function About() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Section Title */}
      <h1 className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        About
      </h1>

      {/* Title */}
      <h2 className="ont-medium mt-3 text-xl text-zinc-700 xl:text-3xl">
        Making apps, taking naps.
      </h2>

      {/* Description */}
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I&apos;m Noah, a student at Algonquin College studying Computer Science.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I specialize in software development but can handle my share of IT and
        full-stack work.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-normal text-zinc-700 xl:text-xl">
        I love to code—it&apos;s what I do best. Whenever I try to sleep, I can
        only think about what I&apos;d code the next morning.
      </p>
      <p className="mt-3 text-center font-sans-serif text-base font-medium xl:text-xl">
        I want to work for you, and I want to work with you. Whether you&apos;re
        a recruiter seeking new talent or a freelancer needing an extra hand,
        I&apos;d love to contribute.
      </p>
    </div>
  );
}

export default About;
