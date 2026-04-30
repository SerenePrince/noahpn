import Container from "./Container";
import { useState } from "react";

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
    role: "I was assigned as the developer responsible for the Power Apps builds and Power Automate flows, working from user stories and tasks assigned each sprint. Our BA drafted flowcharts and diagrams to guide implementation, and our UI specialist handled the Figma mockups. From there I built out the Power Apps screens and forms, designed the SharePoint List structure to hold what actually mattered — client info, team roles, status flags, and initiative progress — and built the automation flows to handle the coordination work that used to fall on individuals. Notifications on assignment and automatic channel creation for new initiatives. I also connected the tracker to Azure DevOps so sprint data stayed current without anyone having to manually update it. Every week I demoed completed features to my supervisor and took feedback directly into the next sprint.",
    outcome:
      "The team went from scattered files to one place where ownership, status, and progress were visible at a glance. The coordination overhead that used to fall on individuals got automated away. Progress became visible not just internally but to clients as well — leads and stakeholders could see what was active and where things stood without having to ask anyone.",
    constraints:
      "Internal government tooling — no public links, screenshots, or source code.",
  },
  {
    id: "training-dashboard",
    title: "Training Completion Reporting Dashboard",
    company: "DND",
    tags: ["Power BI", "Excel"],
    summary:
      "The data was a mess — raw, unstructured, and unreadable. I made sense of it and built a dashboard leadership could actually use.",
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
    role: "I built a Java application to query REST endpoints, compare live responses against documented fields, and flag anything that didn't line up. On my supervisor's suggestion I added a JSON config file so endpoints and fields could be managed without touching the underlying code. I also built in support for notes and overrides in the config so intentional exceptions could be recorded and wouldn't get flagged on every run. The whole thing was delivered independently, with limited guidance and no existing codebase to work from.",
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
      "Memorizing interview answers never worked for me — I wanted to actually understand the concepts. Java Dictionary lets you store terms with two definitions: one in your own words, one for the interview.",
    details: [
      "I built a full-stack application using Java, Spring Boot, and PostgreSQL. Each term stores two definitions — one written in your own words, one polished for interviews. If you can write both, you understand it. If you can only write one, you know exactly where the gap is.",
      "A personal study tool I actually use. The dual-definition structure forces real understanding over surface-level memorization.",
    ],
    github: "https://github.com/SerenePrince/java-dictionary",
    live: null,
    note: null,
  },
  {
    id: "hubspot-tool",
    title: "HubSpot Recommendation Tool",
    tags: ["Node.js", "React", "Docker"],
    summary:
      "Our client was spending hours manually researching a prospect's tech stack before every sales call. I built the backend that does it in seconds — paste a URL, get HubSpot replacement recommendations back immediately.",
    details: [
      "Inbox — a HubSpot Platinum Solutions Partner in Ottawa — was doing their prospect research by hand. Before every sales call, someone had to manually identify what technologies a potential client's website was running and figure out which HubSpot tools could replace them.",
      "I built the entire backend — a vanilla Node.js HTTP server with no Express, a deliberate choice to keep the stack lean. The core is a detection engine that fetches a target URL, runs it against a Wappalyzer-style dataset to identify technologies in use, and maps those findings to HubSpot replacement recommendations. I also handled the Docker setup so the full application could be handed off cleanly. The frontend was handled by teammates.",
    ],
    github: "https://github.com/SerenePrince/hubspot-recommendation-tool",
    live: "https://hubspot-recommendation-tool.onrender.com/",
    note: "Built for Inbox Communications · Algonquin College Capstone",
  },
];

// --- Sub-components ---

function Tags({ tags }) {
  return (
    <ul aria-label="Technologies used" className="flex flex-wrap gap-4">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyCard({ project }) {
  const [open, setOpen] = useState(false);
  const detailsId = `details-${project.id}`;

  return (
    <article
      aria-labelledby={`title-${project.id}`}
      className="border-foreground space-y-6 border-t py-6 last:border-b"
    >
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 id={`title-${project.id}`}>{project.title}</h3>
          <p className="tagline shrink-0">{project.company}</p>
        </div>
        <Tags tags={project.tags} />
      </div>

      {/* Summary */}
      <p className="text-sm">{project.summary}</p>

      {/* Expanded content */}
      <div id={detailsId} hidden={!open}>
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <p className="tagline">Problem</p>
            <p className="text-sm">{project.problem}</p>
          </div>
          <div className="space-y-2">
            <p className="tagline">My Role</p>
            <p className="text-sm whitespace-pre-line">{project.role}</p>
          </div>
          <div className="space-y-2">
            <p className="tagline">Outcome</p>
            <p className="text-sm">{project.outcome}</p>
          </div>
          {project.constraints && (
            <p className="italic-sans text-sm">{project.constraints}</p>
          )}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="text-sm hover:underline hover:underline-offset-4"
      >
        {open ? "Read less ↑" : "Read more ↓"}
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
      className="border-foreground space-y-6 border-t py-6 last:border-b"
    >
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 id={`title-${project.id}`}>{project.title}</h3>
          <div className="flex shrink-0 gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:underline hover:underline-offset-4"
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
                className="text-sm hover:underline hover:underline-offset-4"
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
      <p className="text-sm">{project.summary}</p>

      {/* Expanded content */}
      <div id={detailsId} hidden={!open}>
        <div className="space-y-6 pt-4">
          <div className="space-y-6">
            {project.details.map((para, i) => (
              <p key={i} className="text-sm">
                {para}
              </p>
            ))}
          </div>
          {project.note && <p className="tagline">{project.note}</p>}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="text-sm hover:underline hover:underline-offset-4"
      >
        {open ? "Read less ↑" : "Read more ↓"}
      </button>
    </article>
  );
}

// --- Main section ---

function Projects() {
  const [activeTab, setActiveTab] = useState("case-studies");

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full pt-16"
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
                onClick={() => setActiveTab("case-studies")}
                className={`text-sm ${
                  activeTab === "case-studies"
                    ? "font-semibold underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }`}
              >
                Case Studies
              </button>
              <button
                id="tab-personal"
                role="tab"
                aria-selected={activeTab === "personal"}
                aria-controls="tabpanel-projects"
                onClick={() => setActiveTab("personal")}
                className={`text-sm ${
                  activeTab === "personal"
                    ? "font-semibold underline underline-offset-4"
                    : "hover:underline hover:underline-offset-4"
                }`}
              >
                Personal
              </button>
            </div>
          </div>
          {/* Project list */}
          <div
            id="tabpanel-projects"
            role="tabpanel"
            aria-labelledby={
              activeTab === "case-studies" ? "tab-case-studies" : "tab-personal"
            }
          >
            {activeTab === "case-studies" ? (
              <div>
                {caseStudies.map((project) => (
                  <CaseStudyCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div>
                {personalProjects.map((project) => (
                  <PersonalProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
