import { useEffect, useRef } from "react";
import Container from "./Container";

// ─── Data ───────────────────────────────────────────────────────────────────

const coreBadges = [
  { label: "Java 21 LTS", variant: "badge-green" },
  { label: "Java 17", variant: "badge-green" },
  { label: "Spring Boot", variant: "badge-green" },
  { label: "Maven", variant: "badge-green" },
  { label: "JavaScript", variant: "badge-blue" },
  { label: "React", variant: "badge-blue" },
  { label: "Node.js LTS", variant: "badge-blue" },
  { label: "HTML & CSS", variant: "badge-blue" },
  { label: "Python 3.13", variant: "badge-amber" },
  { label: "PostgreSQL", variant: "badge-teal" },
  { label: "SQLite", variant: "badge-teal" },
  { label: "Docker", variant: "badge-purple" },
  { label: "Bash / Zsh", variant: "badge-purple" },
  { label: "Git", variant: "badge-amber" },
];

const philosophy = [
  {
    num: "01",
    title: "Runtimes live in WSL, not Windows",
    desc: "Every runtime lives in WSL2 — Node, Python, Java, all of it. Windows is for GUIs only. No loose PATH variables, no version conflicts, no wondering what's polluting what.",
  },
  {
    num: "02",
    title: "One tool per job",
    desc: "Each tool was chosen for a reason — Bruno over Postman, pyenv over system Python, SDKMAN over manual JDK installs. Nothing I can't explain, nothing I don't actually use.",
  },
  {
    num: "03",
    title: "Git-trackable by default",
    desc: "API collections in Bruno live as plain files inside the repo. Dotfiles are organised. Everything that can be versioned, is.",
  },
  {
    num: "04",
    title: "Open source where possible",
    desc: "Bruno, Bitwarden, OpenTabletDriver, ShareX, VLC — proprietary tools are the exception, not the default.",
  },
];

// Dev tools first, then productivity, then utilities
const windowsApps = [
  {
    name: "VS Code",
    desc: "Primary editor. Opens WSL filesystem via Remote-WSL. GitHub sync for settings and extensions.",
  },
  {
    name: "IntelliJ IDEA",
    desc: "Primary IDE for Java and Spring Boot. Community Edition.",
  },
  {
    name: "Docker Desktop",
    desc: "GUI frontend only — Docker engine runs inside WSL2. All docker commands issued from Ubuntu.",
  },
  {
    name: "Windows Terminal",
    desc: "Tabbed terminal with Ubuntu (WSL) as the default profile. JetBrains Mono Nerd Font.",
  },
  {
    name: "Bruno",
    desc: "Open-source API client. Collections stored as plain files — git-versionable, no account required.",
  },
  {
    name: "GitHub Desktop",
    desc: "Visual Git client for diffs, staging, and branch management.",
  },
  {
    name: "DBeaver",
    desc: "Universal database GUI. Connects to WSL-hosted PostgreSQL from Windows.",
  },
  {
    name: "Firefox Developer Edition",
    desc: "CSS grid inspector, network throttling, enhanced debugger. Used alongside standard Firefox.",
  },
  { name: "Figma", desc: "UI/UX design and prototyping." },
  {
    name: "Obsidian",
    desc: "Markdown knowledge base for dev notes and architecture decisions. Vault stored locally.",
  },
  {
    name: "Bitwarden",
    desc: "Open-source password manager with browser extension sync.",
  },
  {
    name: "PowerToys",
    desc: "FancyZones, Color Picker, PowerRename, Keyboard Manager and more.",
  },
  {
    name: "Flow Launcher",
    desc: "Spotlight-style app launcher. Faster than the Start menu for apps, files, and commands.",
  },
  { name: "ShareX", desc: "Screenshots, screen recording, and GIF capture." },
];

const terminalTools = [
  {
    name: "zsh + Oh My Zsh",
    desc: "Shell with plugin support, git shortcuts, and theme system",
  },
  {
    name: "zsh-autosuggestions",
    desc: "Fish-style history suggestions as you type",
  },
  {
    name: "zsh-syntax-highlighting",
    desc: "Commands color green/red as you type",
  },
  { name: "fzf", desc: "Fuzzy finder — interactive history search on Ctrl+R" },
  {
    name: "lazygit",
    desc: "Terminal UI for git — branches, diffs, and staging without leaving the shell",
  },
  { name: "ripgrep", desc: "Blazing fast recursive file search" },
  {
    name: "bat",
    desc: "cat replacement with syntax highlighting and line numbers",
  },
  { name: "eza", desc: "Modern ls with color, icons, and git status" },
  { name: "btop", desc: "Visual system monitor — CPU, memory, disk, network" },
  {
    name: "tmux",
    desc: "Terminal multiplexer — split panes, persistent sessions",
  },
  { name: "jq", desc: "JSON processor — pipe curl output directly into it" },
  { name: "direnv", desc: "Auto-loads .env files per project when you cd in" },
  {
    name: "httpie",
    desc: "Friendlier curl alternative for API testing in the terminal",
  },
];

const devRuntimes = [
  {
    name: "nvm",
    desc: "Node Version Manager. Manages Node.js versions cleanly — no global installs polluting the system.",
  },
  {
    name: "Node.js LTS",
    desc: "Installed via nvm. Current LTS pinned as default.",
  },
  {
    name: "SDKMAN",
    desc: "SDK version manager for Java, Maven, and Spring Boot CLI. Switch versions per project.",
  },
  {
    name: "Java 17+21+25",
    desc: "All three installed via SDKMAN. Java 21 LTS set as global default.",
  },
  {
    name: "Maven",
    desc: "Build tool for Java projects — dependencies, compiling, packaging.",
  },
  {
    name: "pyenv",
    desc: "Python version manager. Install and switch Python versions per project cleanly.",
  },
  {
    name: "Python 3.13",
    desc: "Installed via pyenv. Global default. Per-project isolation via venv.",
  },
  {
    name: "Docker",
    desc: "Engine runs in WSL2 via Docker Desktop integration. All commands from Ubuntu.",
  },
  {
    name: "PostgreSQL",
    desc: "Runs as a Docker container. Port-forwarded to Windows for DBeaver access.",
  },
  {
    name: "SQLite",
    desc: "Lightweight database for smaller projects and prototypes.",
  },
];

const vscodeExtensions = [
  {
    name: "Remote — WSL",
    desc: "Open VS Code directly from the WSL filesystem with code .",
  },
  { name: "ESLint", desc: "JavaScript and TypeScript linting" },
  { name: "Prettier", desc: "Code formatter. Format on Save enabled." },
  {
    name: "Tailwind CSS IntelliSense",
    desc: "Autocomplete and linting for Tailwind classes",
  },
  { name: "GitLens", desc: "Inline git blame, history, and authorship" },
  {
    name: "Error Lens",
    desc: "Shows errors and warnings inline where they occur",
  },
  {
    name: "Docker",
    desc: "Manage containers, images, and compose files visually",
  },
  {
    name: "Python",
    desc: "Linting, IntelliSense, debugging, and venv support",
  },
  {
    name: "Java Extension Pack",
    desc: "IntelliSense, debugging, and Maven support for Java",
  },
  {
    name: "Spring Boot Tools",
    desc: "Spring Boot-specific support and Initializr integration",
  },
  { name: "Astro", desc: "Syntax highlighting for .astro files" },
  {
    name: "Todo Tree",
    desc: "Scans codebase for TODO/FIXME comments and lists them",
  },
  {
    name: "indent-rainbow",
    desc: "Colorizes indentation levels — helpful for Python and nested JSX",
  },
  { name: "Material Icon Theme", desc: "File icons in the explorer" },
  {
    name: "Path IntelliSense",
    desc: "Autocompletes file paths as you type them",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionBlock({ eyebrow, heading, children }) {
  return (
    <section aria-label={heading} className="space-y-6">
      <div className="space-y-1">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{heading}</h3>
      </div>
      {children}
    </section>
  );
}

function ToolCard({ name, desc }) {
  return (
    <div className="card flex flex-col gap-3 p-4">
      <p className="title">{name}</p>
      <p className="secondary">{desc}</p>
    </div>
  );
}

function ToolRow({ name, desc }) {
  return (
    <div className="border-rule grid grid-cols-1 gap-1 border-b p-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-4">
      <p className="title">{name}</p>
      <p className="secondary">{desc}</p>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

function StackPanel({ open, onClose }) {
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  // Focus management — move into panel on open, return to trigger on close
  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      panelRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Full tech stack"
      tabIndex={-1}
      className="panel-enter bg-background fixed inset-0 z-100 overflow-y-auto outline-none"
    >
      {/* Sticky top bar */}
      <div className="border-rule bg-background sticky top-0 z-10 border-b">
        <Container>
          <div className="flex items-center justify-between py-4">
            <button onClick={onClose} className="nav-link text-sm">
              <span aria-hidden="true">←</span> Back
            </button>
            <p className="eyebrow">My Stack</p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col space-y-16 py-16">
          {/* Languages & Frameworks */}
          <SectionBlock
            eyebrow="Languages & Frameworks"
            heading="Core technologies"
          >
            <ul aria-label="Core technologies" className="flex flex-wrap gap-2">
              {coreBadges.map((b) => (
                <li key={b.label}>
                  <span className={`badge ${b.variant}`}>{b.label}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Setup Philosophy */}
          <SectionBlock
            eyebrow="Setup Philosophy"
            heading="How I set things up"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {philosophy.map((p) => (
                <div key={p.num} className="card space-y-3 p-6">
                  <p
                    aria-hidden="true"
                    className="text-muted font-serif text-3xl font-bold"
                  >
                    {p.num}
                  </p>
                  <div className="space-y-1">
                    <p className="title">{p.title}</p>
                    <p className="secondary">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>

          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Windows Applications */}
          <SectionBlock eyebrow="GUI Layer" heading="Windows Applications">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {windowsApps.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>
          </SectionBlock>

          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* WSL Terminal Toolkit */}
          <SectionBlock eyebrow="Ubuntu / Zsh" heading="WSL — Terminal Toolkit">
            <div className="card overflow-hidden">
              {terminalTools.map((t) => (
                <ToolRow key={t.name} {...t} />
              ))}
            </div>
          </SectionBlock>

          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* Dev Runtimes */}
          <SectionBlock
            eyebrow="All inside WSL, none on Windows"
            heading="Dev Runtimes"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {devRuntimes.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>
          </SectionBlock>

          <div className="bg-rule h-px w-full" aria-hidden="true" />

          {/* VS Code Extensions */}
          <SectionBlock
            eyebrow="Synced via GitHub"
            heading="VS Code Extensions"
          >
            <div className="card overflow-hidden">
              {vscodeExtensions.map((t) => (
                <ToolRow key={t.name} name={t.name} desc={t.desc} />
              ))}
            </div>
          </SectionBlock>
        </div>
      </Container>

      {/* Footer */}
      <footer className="border-rule border-t" aria-label="Stack footer">
        <Container>
          <div className="py-6">
            <p className="muted text-center">Windows 11 · WSL2 Ubuntu</p>
            <blockquote className="space-y-1 text-center">
              <p className="secondary italic">
                "Programming is a skill best acquired by practice and example
                rather than from books."
              </p>
              <p className="muted">
                — Alan Turing, and me — because I hate reading.
              </p>
            </blockquote>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default StackPanel;
