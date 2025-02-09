import resume from "/NoahPNResume2025.pdf";

function Home() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Name */}
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        Noah Park-Nguyen
      </h1>

      {/* Title */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Software Developer & Student
      </h2>

      {/* Location & Availability */}
      <p className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-3 sm:text-base xl:text-xl">
        Ottawa, ON · Open to remote & in-person roles
      </p>

      {/* CTA Buttons */}
      <nav className="mt-1 flex w-full items-center justify-center gap-1 font-sans-serif sm:mt-3 sm:gap-3">
        <a
          href="mailto:noahparknguyen@gmail.com"
          aria-label="Contact Noah via email"
          className="rounded-lg border bg-black px-2 py-1 font-sans-serif text-xs font-medium text-white transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-black sm:px-3 sm:py-2 sm:text-base xl:text-xl"
        >
          Let&apos;s Connect
        </a>
        <a
          href={resume}
          aria-label="View Noah's Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-base xl:text-xl"
        >
          My Resume
        </a>
      </nav>
    </div>
  );
}

export default Home;
