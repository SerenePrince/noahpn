import Container from "./Container";
import { useState } from "react";
import imgStatmon from "../assets/images/project-statmon.png";
import imgHubspot from "../assets/images/project-hubspot.png";

const caseStudies = [
  {
    id: "initiative-tracker",
    title: "Initiative Tracker + Automated Workflows",
    company: "DND",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    summary:
      "Every initiative lived somewhere different — notes, spreadsheets, Word docs. We built a single source of truth to track all of it.",
    problem:
      "My team lead had every ongoing initiative living somewhere different — desktop notes, Word documents, scattered Excel sheets. Nothing connected, and figuring out who owned what meant digging through all of it. We needed a new system.",
    role: "I was assigned as the developer responsible for the Power Apps builds and Power Automate flows, working from user stories and tasks assigned each sprint. Our BA drafted flowcharts and diagrams to guide implementation, and our UI specialist handled the Figma mockups. From there I built out the Power Apps screens and forms, and designed the SharePoint List structure to hold what actually mattered — client info, team roles, status flags, and initiative progress. I also built the automation flows to handle what used to be done manually — notifications on assignment, automatic channel creation for new initiatives. I connected the tracker to Azure DevOps so sprint data stayed current without anyone having to manually update it. Every week I demoed completed features to my supervisor and took feedback directly into the next sprint.",
    outcome:
      "The team went from scattered files to one place where ownership, status, and progress were clear at a glance. The busywork of keeping everyone in the loop got handled automatically. Clients could see what was active and where things stood — without having to ask anyone.",
    constraints:
      "Internal government tooling — no public links, screenshots, or source code.",
  },
  {
    id: "training-dashboard",
    title: "Training Completion Reporting Dashboard",
    company: "DND",
    tags: ["Power BI", "Excel"],
    summary:
      "The data was a mess — raw, unstructured, and impossible to report on. I made sense of it and built a dashboard leadership could actually use.",
    problem:
      "The source data was a mess — one row per course completion, no grouping, no context, and several fields either missing or buried in encoded values. Before anything could be reported on, I had to figure out what I was even looking at. English and French versions of the same course were also tracked as separate entries — for cross-language reporting to be meaningful, both needed to be unified under a single course total while keeping language filters intact.",
    role: "I started by working through the raw export — decoding completion fields to pull out useful attributes like demographics, language, and course details that weren't visible on the surface. Once I noticed the bilingual counting issue I went back to the client, got a full course list, confirmed both versions shared a course code, and used that to unify completions under a single total while keeping language filters intact. I added fiscal year and quarter columns using date logic so trends could actually be tracked over time. From there I built a dashboard with a high-level summary for leadership and deeper pages for trends, demographics, and the underlying data.",
    outcome:
      "Leadership got a clear view of training completion across the organization without touching a spreadsheet. The counting problem that had been splitting bilingual completions into misleading totals was fixed before it could cause bigger issues downstream. Fiscal year and quarterly trends were visible for the first time, and the whole thing was self-explanatory enough that non-technical stakeholders could open it and understand it on their own.",
    constraints: "Internal data — no shareable visuals or datasets.",
  },
  {
    id: "api-sync",
    title: "API Documentation Sync Automation",
    company: "FINTRAC",
    tags: ["Java", "Maven", "REST APIs"],
    summary:
      "Keeping API docs accurate meant hitting endpoints by hand and hoping nothing had changed. I built a tool to handle it automatically.",
    problem:
      "The team maintained OpenAPI documentation for their internal APIs, but keeping it accurate was a manual process — someone had to hit endpoints and check whether responses still matched what was documented. It was slow, inconsistent, and easy to let slide.",
    role: "I built a Java application to query REST endpoints, compare live responses against documented fields, and flag anything that didn't line up. On my supervisor's suggestion I added a JSON config file so endpoints and fields could be managed without touching the underlying code. I also built in support for notes and overrides in the config so intentional exceptions could be recorded and wouldn't get flagged on every run. I delivered the whole thing independently — no existing codebase, limited guidance, first placement.",
    outcome:
      "A process that used to take hours could now be run in minutes. The development team had more confidence in the documentation they relied on daily, and the tool was easy enough to maintain that adding new endpoints meant editing a config file, not touching code.",
    constraints:
      "Internal system — no public source code, endpoints, or documentation.",
  },
  {
    id: "chatbot",
    title: "Document Q&A Chatbot",
    company: "DND",
    tags: ["React", "Tailwind", "Vite"],
    summary:
      "Searching a 400+ page document for answers is slow and easy to get wrong. We built a proof-of-concept chatbot that finds the right section, cites the page, and always tells you to verify for yourself.",
    problem:
      "Another team at DND needed a faster way to get answers from a dense, 400+ page internal document. Reading through it manually was slow, and the risk of missing something or misremembering a detail was real. The goal was a chatbot that could handle the lookup — but it also needed to be designed so users couldn't lean on it too heavily.",
    role: "I built the frontend using React, Tailwind, and Vite — a clean chat interface that handled user prompts and displayed responses clearly. A single fetch request connected the UI to my teammate's AI model on the backend. The three principles we designed around were non-negotiable: no hallucinations, strict page citations for every answer, and a prompt reminding users to verify against the source document themselves. My teammate handled the model integration — I handled everything the user actually sees and interacts with.",
    outcome:
      "The chatbot could surface relevant answers quickly, tell you exactly where in the document to find them, and never let the user forget that the document itself was the authority — a proof-of-concept that proved the approach was worth taking further.",
    constraints:
      "Internal government tooling — no public links, screenshots, or source code.",
  },
];

const personalProjects = [
  {
    id: "java-dictionary",
    title: "Java Dictionary",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    summary:
      "Memorizing interview answers never worked for me — I wanted to actually understand the concepts. Java Dictionary is where I build and study my own Java glossary, with every term defined two ways: one in your own words, one polished for the interview room.",
    details: [
      "The two-definition rule is the whole point — one written like you're explaining it to a friend, one polished enough for an interview room. If you can write both, you understand it. If you can only write one, you know exactly where the gap is. Terms can also be pulled from a YAML study guide I built alongside it, organised by book and chapter — adding new content means editing a config file, nothing else.",
      "I rendered everything server-side with Thymeleaf instead of reaching for a separate frontend framework. Partly to keep the stack cohesive, partly because the project is about demonstrating Spring Boot end-to-end — a React frontend would have undermined the point. Terms are stored flat in the database and grouped at the service layer using a URL-safe slug, so the same concept can appear across multiple sources without the database caring.",
    ],
    github: "https://github.com/SerenePrince/java-dictionary",
    live: null,
    image: null,
    note: null,
  },
  {
    id: "hubspot-tool",
    title: "HubSpot Recommendation Tool",
    tags: ["Node.js", "React", "Docker"],
    summary:
      "Our client was spending hours manually researching a prospect's tech stack before every sales call — I built the tool that does it in seconds.",
    details: [
      "Inbox — a HubSpot Platinum Solutions Partner based in Ottawa — was doing their prospect research by hand. Before every sales call, someone had to figure out what technologies a client's site was running, then manually map those to HubSpot products. I built a tool to do that in seconds: paste in a URL, get back a structured report with every detected technology mapped to a recommendation, a priority, and a plain-English description written for sales conversations.",
      "The backend is a vanilla Node.js HTTP server — no Express. I wanted to keep the dependency footprint as small as possible, and Express would have been overkill for what it needed to do. The core is a detection pipeline that fingerprints the target URL against a Wappalyzer-compatible dataset. CLI tooling lets the internal team manage the taxonomy without touching code; Docker handles the environment.",
      "The frontend started as a teammate's skeleton — I took it over once the backend was in place and built it out. The whole design runs on CSS custom properties so the app can be rebranded from a single block of variables, which mattered for a client-facing internal tool. Report table stacks to cards on mobile. Built to accessibility standards throughout.",
    ],
    github: "https://github.com/SerenePrince/hubspot-recommendation-tool",
    live: "https://hubspot-recommendation-tool.onrender.com/",
    image: imgHubspot,
    note: "Built for Inbox Communications · Algonquin College Capstone",
  },
  {
    id: "statmon",
    title: "Statmon",
    tags: ["React", "Vite", "Tailwind CSS", "Cloudflare Pages"],
    summary:
      "Every Pokémon stats site I've tried is cluttered with ads, animations, and features I never open — Statmon is the one I actually wanted: a minimal toolkit that just shows the data.",
    details: [
      "I built Statmon because every alternative I tried was doing too much. The data I actually wanted — base stats, types, alternate forms — was always buried behind something I didn't ask for. So I built the version I wanted: three focused tools, nothing extra, readability first. Every design decision came back to keeping the data front and center — 18 type colors mapped to accessible pastels, a consistent typographic hierarchy, dark mode built on CSS custom properties.",
      "The Pokédex covers all nine generations with authentic regional Pokédex order — Bulbasaur is #001 in Kanto and #226 in Johto, the way it actually appears in each game. Gen 1 Pokémon show the original combined Special stat. Compare puts two Pokémon side by side with type-colored stat bars and a head-to-head breakdown. Type Clash is a typing quiz — at the hardest difficulty a Pokémon is revealed through a slot-machine animation and you have to name its type from memory before you can answer.",
      "All the Pokémon data is fetched from PokéAPI at build time through three custom Node scripts and bundled as static JSON — zero API calls at runtime. The scripts run in batches with delays between bursts and skip data that's already been fetched, so re-running them doesn't hammer the API unnecessarily. Built with React, Vite, and Tailwind CSS, deployed to Cloudflare Pages.",
    ],
    github: "https://github.com/SerenePrince/statmon",
    live: "https://master.statmon.pages.dev/",
    image: imgStatmon,
    note: null,
  },
];

// --- Tag color mapping ---

const tagVariant = {
  // Green — Java ecosystem
  Java: "badge-green",
  "Spring Boot": "badge-green",
  Maven: "badge-green",

  // Blue — JS ecosystem, web platforms
  JavaScript: "badge-blue",
  React: "badge-blue",
  "Node.js": "badge-blue",
  Tailwind: "badge-blue",
  "Tailwind CSS": "badge-blue",
  Vite: "badge-blue",
  "Power Apps": "badge-blue",
  SharePoint: "badge-blue",

  // Teal — data and analysis tools
  PostgreSQL: "badge-teal",
  "Power BI": "badge-teal",
  Excel: "badge-teal",

  // Purple — automation and infrastructure
  Docker: "badge-purple",
  "Power Automate": "badge-purple",
  "Cloudflare Pages": "badge-purple",

  // Amber — protocols and tooling
  "REST APIs": "badge-amber",
};

// --- Sub-components ---

function Tags({ tags }) {
  return (
    <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const variant = tagVariant[tag] ?? "badge-neutral";
        return (
          <li key={tag}>
            <span className={`badge ${variant}`}>{tag}</span>
          </li>
        );
      })}
    </ul>
  );
}

function CaseStudyCard({ project }) {
  const [open, setOpen] = useState(false);
  const detailsId = `details-${project.id}`;

  return (
    <article
      aria-labelledby={`title-${project.id}`}
      className="card space-y-4 p-6"
    >
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 id={`title-${project.id}`}>{project.title}</h3>
          <p className="eyebrow shrink-0 pt-0.5">{project.company}</p>
        </div>
        <Tags tags={project.tags} />
      </div>

      {/* Summary */}
      <p className="secondary">{project.summary}</p>

      {/* Expanded content */}
      <div id={detailsId} hidden={!open}>
        <div className="border-rule space-y-5 border-t pt-5">
          <div className="border-rule space-y-2 border-l-2 pl-4">
            <p className="eyebrow">Problem</p>
            <p className="secondary">{project.problem}</p>
          </div>
          <div className="border-rule space-y-2 border-l-2 pl-4">
            <p className="eyebrow">My Role</p>
            <p className="secondary">{project.role}</p>
          </div>
          <div className="border-rule space-y-2 border-l-2 pl-4">
            <p className="eyebrow">Outcome</p>
            <p className="secondary">{project.outcome}</p>
          </div>
          {project.constraints && (
            <p className="muted italic-sans">{project.constraints}</p>
          )}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="nav-link text-sm"
      >
        {open ? (
          <>
            Read less <span aria-hidden="true">↑</span>
          </>
        ) : (
          <>
            Read more <span aria-hidden="true">↓</span>
          </>
        )}
      </button>
    </article>
  );
}

function PersonalProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const detailsId = `details-${project.id}`;

  return (
    <article
      aria-labelledby={`title-${project.id}`}
      className="card overflow-hidden"
    >
      {/* Screenshot — full bleed, only if image exists */}
      {project.image && (
        <div className="border-rule border-b">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-48 w-full object-cover object-top"
          />
        </div>
      )}

      {/* Card content */}
      <div className="space-y-4 p-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 id={`title-${project.id}`}>{project.title}</h3>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-sm"
                >
                  GitHub
                  <span aria-hidden="true"> ↗</span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-sm"
                >
                  Live
                  <span aria-hidden="true"> ↗</span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
            </div>
          </div>
          <Tags tags={project.tags} />
        </div>

        {/* Summary */}
        <p className="secondary">{project.summary}</p>

        {/* Expanded content */}
        <div id={detailsId} hidden={!open}>
          <div className="border-rule space-y-5 border-t pt-5">
            {project.details.map((para, i) => (
              <p key={i} className="border-rule secondary border-l-2 pl-4">
                {para}
              </p>
            ))}
            {project.note && <p className="muted">{project.note}</p>}
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="nav-link text-sm"
        >
          {open ? (
            <>
              Read less <span aria-hidden="true">↑</span>
            </>
          ) : (
            <>
              Read more <span aria-hidden="true">↓</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

// --- Main section ---

const tabs = ["case-studies", "personal"];

function Projects() {
  const [activeTab, setActiveTab] = useState("case-studies");

  function handleTabKeyDown(e, currentTab) {
    const currentIndex = tabs.indexOf(currentTab);
    let nextIndex = null;
    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (e.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (nextIndex === null) return;
    e.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab);
    document.getElementById(`tab-${nextTab}`)?.focus();
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full"
    >
      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Heading + toggle */}
          <div className="space-y-6">
            <h2 id="projects-heading">Projects</h2>
            <div
              role="tablist"
              aria-label="Project categories"
              className="flex gap-6"
            >
              <button
                id="tab-case-studies"
                role="tab"
                aria-selected={activeTab === "case-studies"}
                aria-controls="tabpanel-projects"
                tabIndex={activeTab === "case-studies" ? 0 : -1}
                onClick={() => setActiveTab("case-studies")}
                onKeyDown={(e) => handleTabKeyDown(e, "case-studies")}
                className={`eyebrow cursor-pointer border-l-2 pl-2 transition-colors duration-150 ${
                  activeTab === "case-studies"
                    ? "text-foreground! border-foreground"
                    : "nav-link border-transparent"
                }`}
              >
                Case Studies
              </button>
              <button
                id="tab-personal"
                role="tab"
                aria-selected={activeTab === "personal"}
                aria-controls="tabpanel-projects"
                tabIndex={activeTab === "personal" ? 0 : -1}
                onClick={() => setActiveTab("personal")}
                onKeyDown={(e) => handleTabKeyDown(e, "personal")}
                className={`eyebrow cursor-pointer border-l-2 pl-2 transition-colors duration-150 ${
                  activeTab === "personal"
                    ? "text-foreground! border-foreground"
                    : "nav-link border-transparent"
                }`}
              >
                Personal
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Project list */}
          <div
            id="tabpanel-projects"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={
              activeTab === "case-studies" ? "tab-case-studies" : "tab-personal"
            }
            className="flex flex-col gap-4"
          >
            {activeTab === "case-studies"
              ? caseStudies.map((project) => (
                  <CaseStudyCard key={project.id} project={project} />
                ))
              : personalProjects.map((project) => (
                  <PersonalProjectCard key={project.id} project={project} />
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
