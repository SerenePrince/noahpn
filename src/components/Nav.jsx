import { useState } from "react";
import Icon from "../assets/icons/crown-dark.svg";
import Container from "./Container";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="bg-background fixed top-0 right-0 left-0 z-50"
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#hero" onClick={() => setOpen(false)} aria-label="Go to top">
            <img src={Icon} alt="" aria-hidden="true" className="h-6 w-auto" />
          </a>

          {/* Desktop links */}
          <ul
            aria-label="Navigation links"
            className="hidden items-center gap-6 sm:flex"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm hover:underline hover:underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button — mobile only */}
          <button
            className="flex flex-col justify-center gap-1.5 p-1 sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <>
                <span className="bg-foreground block h-px w-5 origin-center translate-y-0.75 rotate-45" />
                <span className="bg-foreground block h-px w-5 origin-center -translate-y-0.75 -rotate-45" />
              </>
            ) : (
              <>
                <span className="bg-foreground block h-px w-5" />
                <span className="bg-foreground block h-px w-5" />
                <span className="bg-foreground block h-px w-5" />
              </>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <ul
        id="mobile-menu"
        aria-label="Navigation links"
        className={`border-foreground flex flex-col border-t sm:hidden ${
          open ? "" : "hidden"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="border-foreground border-b last:border-b-0"
          >
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex px-4 py-3 text-sm hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="bg-foreground h-px w-full" aria-hidden="true" />
    </nav>
  );
}

export default Nav;
