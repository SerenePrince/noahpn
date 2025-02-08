import resume from "/NoahPNResume2025.pdf";

function Home() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Name */}
      <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        Noah Park-Nguyen
      </h1>

      {/* Title */}
      <h2 className="mt-3 text-xl font-medium text-zinc-700 xl:text-3xl">
        Software Developer & Student
      </h2>

      {/* Location & Availability */}
      <h3 className="mt-3 text-base font-normal text-zinc-700 xl:text-xl">
        Ottawa, ON · Open to remote & in-person roles
      </h3>

      {/* CTA Buttons */}
      <nav className="mt-3 flex w-full items-center justify-center gap-3 font-sans-serif">
        <a
          href="mailto:noahparknguyen@gmail.com"
          aria-label="Contact Noah via email"
          className="rounded-lg border border-black bg-black px-3 py-2 font-sans-serif text-base font-medium text-white transition-all hover:border-zinc-700 hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-black xl:text-xl"
        >
          Let&apos;s Connect
        </a>
        <a
          href={resume}
          aria-label="View Noah's Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 font-sans-serif text-base font-medium text-zinc-700 transition hover:border-black hover:shadow-xl xl:text-xl"
        >
          My Resume
        </a>
      </nav>
    </div>
  );
}

export default Home;
