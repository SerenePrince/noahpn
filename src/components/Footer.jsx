import Container from "./Container";

function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-foreground mt-36 w-full border-t"
    >
      <Container>
        <div className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p>
            <small>© {new Date().getFullYear()} Noah Park-Nguyen</small>
          </p>
          <a
            href="#hero"
            aria-label="Back to top of page"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
