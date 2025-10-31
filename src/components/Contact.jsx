function Contact() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Header */}
      <h1 className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl">
        Contact
      </h1>
      {/* Tagline */}
      <h2 className="text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        Always open, sometimes awake.
      </h2>

      {/* Links */}
      <nav
        aria-label="Contact Information"
        className="flex flex-col space-y-1 text-center text-xs sm:mt-3 sm:space-y-3 sm:text-base xl:text-xl"
      >
        {[
          {
            href: "https://github.com/SerenePrince",
            label: "github.com/SerenePrince",
          },
          {
            href: "mailto:noahparknguyen@gmail.com",
            label: "noahparknguyen@gmail.com",
          },
          {
            href: "https://www.linkedin.com/in/nparknguyen/",
            label: "linkedin.com/in/nparknguyen",
          },
        ].map((link) => (
          <a
            key={link.href}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            className="text-xm font-sans-serif text-zinc-600 transition hover:text-zinc-500 hover:underline sm:text-base xl:text-xl"
            aria-label={`Visit ${link.label}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Contact;
