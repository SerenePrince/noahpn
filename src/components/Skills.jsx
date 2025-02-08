import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  return (
    <section
      className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black"
      aria-labelledby="skills-section"
    >
      {/* Section Title */}
      <h1
        id="skills-section"
        className="text-3xl leading-tight font-bold tracking-tight xl:text-5xl"
      >
        Skills
      </h1>

      {/* Tagline */}
      <h2 className="mt-3 text-xl font-medium text-zinc-700 xl:text-3xl">
        The tools I blame for my failures.
      </h2>

      {/* Skills Grid */}
      <div
        className="mt-3 grid grid-cols-3 gap-3 font-sans-serif md:grid-cols-4"
        role="list"
      >
        {[
          { icon: <SiReact />, label: "React", link: "https://react.dev/" },
          {
            icon: <SiTailwindcss />,
            label: "Tailwind",
            link: "https://tailwindcss.com",
          },
          {
            icon: <SiHtml5 />,
            label: "HTML",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            icon: <SiJavascript />,
            label: "JavaScript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            icon: <SiCss3 />,
            label: "CSS",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: <SiNodedotjs />,
            label: "Node.js",
            link: "https://nodejs.org/en",
          },
          {
            icon: <SiExpress />,
            label: "Express",
            link: "https://expressjs.com/",
          },
          {
            icon: <SiMongodb />,
            label: "MongoDB",
            link: "https://www.mongodb.com/",
          },
        ].map(({ icon, label, link }) => (
          <a
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-zinc-300 px-3 py-2 font-sans-serif text-base font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl xl:text-xl"
            role="listitem"
            aria-label={label}
            href={link}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
