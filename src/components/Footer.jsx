import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-white text-black py-3 shadow-lg transform transition-transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Site Footer"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-md">
          © {new Date().getFullYear()} Noah. Crafted with ❤️ using React,
          Tailwind, and Vite.
        </p>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="text-md hover:text-purple-600 cursor-pointer transition text-center"
          aria-label="Scroll to the top of the page"
        >
          Back to Top ↑
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
