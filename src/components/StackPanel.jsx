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

const curatedTools = [
  {
    name: "WSL2 + Ubuntu",
    desc: "Every runtime — Node, Python, Java — lives here. Windows handles GUIs only.",
  },
  {
    name: "IntelliJ IDEA",
    desc: "Primary IDE for Java and Spring Boot. Community Edition.",
  },
  {
    name: "SDKMAN",
    desc: "Manages Java and Maven versions per project. No manual JDK installs.",
  },
  {
    name: "pyenv",
    desc: "Python version manager. Per-project isolation via venv.",
  },
  {
    name: "Bruno",
    desc: "Open-source API client. Collections stored as plain files — git-versionable, no account required.",
  },
  {
    name: "lazygit",
    desc: "Terminal UI for git — branches, diffs, and staging without leaving the shell.",
  },
  {
    name: "Docker",
    desc: "Containerised databases and services. Engine runs in WSL2.",
  },
  {
    name: "Obsidian",
    desc: "Local markdown knowledge base for dev notes and architecture decisions.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionBlock({ eyebrow, heading, children }) {
  const headingId = heading
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return (
    <section aria-labelledby={headingId} className="space-y-6">
      <div className="space-y-1">
        <p className="eyebrow">{eyebrow}</p>
        <h3 id={headingId}>{heading}</h3>
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

  // Escape to close + focus trap
  useEffect(() => {
    if (!open) return;

    const FOCUSABLE =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusable = Array.from(panel.querySelectorAll(FOCUSABLE));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
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
      className="panel-enter no-scrollbar-mobile bg-background fixed inset-0 z-100 overflow-y-auto outline-none"
    >
      {/* Sticky top bar */}
      <div className="border-rule bg-background sticky top-0 z-10 border-b">
        <Container>
          <div className="flex items-center justify-between py-4">
            <button onClick={onClose} className="nav-link text-sm">
              <span aria-hidden="true">←</span> Back
            </button>
            <h2 className="eyebrow">My Stack</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col space-y-8 py-24">
          {/* Languages & Frameworks */}
          <SectionBlock
            eyebrow="Languages & Frameworks"
            heading="Core technologies"
          >
            <ul className="flex flex-wrap gap-2">
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
                <div key={p.num} className="card space-y-4 p-6">
                  <p
                    aria-hidden="true"
                    className="muted font-serif text-3xl font-bold"
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

          {/* Curated Tools */}
          <SectionBlock eyebrow="The essentials" heading="Tools I actually use">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {curatedTools.map((t) => (
                <ToolCard key={t.name} {...t} />
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
              <p className="secondary italic-sans">
                "Programming is a skill best acquired by practice and example
                rather than from books."
              </p>
              <p className="muted">
                — <cite>Alan Turing</cite>, and me — because I hate reading.
              </p>
            </blockquote>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default StackPanel;
