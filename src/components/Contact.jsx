function Contact() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black">
      {/* Header */}
      <h1 className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl">
        Contact
      </h1>
      {/* Tagline */}
      <h2 className="mt-3 text-xl font-medium text-zinc-700 xl:text-3xl">
        Get in touch.
      </h2>

      {/* Links */}
      <nav className="mt-3 flex flex-col space-y-3 text-center">
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
            className="font-sans-serif text-base text-zinc-600 transition hover:text-zinc-500 hover:underline xl:text-xl"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Contact;
