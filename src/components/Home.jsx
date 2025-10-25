import resume from "/NoahPNResume2025.pdf";

function Home() {
  return (
    <div
      role="banner"
      className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black"
    >
      {/* Intro Section */}
      <section
        className="text-center"
        aria-labelledby="home-title"
        aria-describedby="home-location"
      >
        {/* Name */}
        <h1
          id="home-title"
          className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl"
        >
          Noah Park-Nguyen
        </h1>

        {/* Title */}
        <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
          Developer & Student
        </h2>

        {/* Location */}
        <p
          id="home-location"
          className="text-center font-sans-serif text-xs font-normal text-zinc-700 sm:mt-1 sm:text-base xl:text-xl"
        >
          Ottawa, ON
        </p>
      </section>

      {/* CTA Buttons */}
      <nav
        className="mt-1 flex w-full items-center justify-center gap-1 font-sans-serif sm:mt-3 sm:gap-3"
        aria-label="Primary actions"
      >
        <a
          href="mailto:noahparknguyen@gmail.com"
          aria-label="Email Noah to get in touch"
          aria-describedby="home-location"
          className="rounded-lg border bg-black px-2 py-1 font-sans-serif text-xs font-medium text-white transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-black sm:px-3 sm:py-2 sm:text-base xl:text-xl"
        >
          Let&apos;s Connect
        </a>
        <a
          href={resume}
          aria-label="Open Noah's resume in a new tab"
          aria-describedby="home-location"
          target="_blank"
          rel="noopener noreferrer"
          title="Opens in a new tab"
          className="flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl focus-visible:ring-2 focus-visible:ring-black sm:px-3 sm:py-2 sm:text-base xl:text-xl"
        >
          My Resume
        </a>
      </nav>
    </div>
  );
}

export default Home;
