import Container from "./Container";

function Footer() {
  return (
    <footer aria-label="Site footer" className="border-rule w-full border-t">
      <Container>
        <div className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p className="muted">© {new Date().getFullYear()} Noah Park-Nguyen</p>
          <a
            href="#hero"
            aria-label="Back to top of page"
            className="nav-link text-sm"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
