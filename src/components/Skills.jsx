import {
  BarChart3,
  Code,
  Compass,
  LayoutDashboard,
  Settings,
  Zap,
} from "lucide-react";

const iconClass = "h-4 w-4 sm:h-5 sm:w-5 text-black";

function Skills() {
  return (
    <section
      className="flex aspect-video w-full flex-col items-center justify-center bg-white px-3 text-black"
      aria-labelledby="skills-section"
    >
      {/* Section Title */}
      <h1
        id="skills-section"
        className="text-base leading-tight font-bold tracking-tight sm:text-3xl xl:text-5xl"
      >
        Skills
      </h1>

      {/* Tagline */}
      <h2 className="text-center text-sm font-medium text-zinc-700 sm:mt-3 sm:text-xl xl:text-3xl">
        They pay the bills.
      </h2>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-3 gap-1 font-sans-serif sm:mt-3 sm:gap-3"
        role="list"
      >
        {[
          {
            icon: <LayoutDashboard className={iconClass} />,
            label: "Power Apps",
          },
          { icon: <Zap className={iconClass} />, label: "Power Automate" },
          { icon: <BarChart3 className={iconClass} />, label: "Power BI" },
          { icon: <Settings className={iconClass} />, label: "Dataverse" },
          { icon: <Code className={iconClass} />, label: "React" },
          { icon: <Compass className={iconClass} />, label: "Tailwind CSS" },
        ].map(({ icon, label, link }) => (
          <p
            key={label}
            className="mt-1 flex items-center justify-center rounded-lg border border-zinc-300 px-2 py-1 font-sans-serif text-xs font-medium text-zinc-700 transition hover:border-black hover:text-black hover:shadow-xl sm:px-3 sm:py-2 sm:text-base xl:text-xl"
            role="listitem"
            href={link}
          >
            {icon}
            <span className="hidden sm:ml-3 sm:inline">{label}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;
