import { Link } from "react-scroll";
import profilePicture from "/profileBustShot.png";

function Hero() {
  return (
    <section
      id="hero"
      className="p-10 min-h-screen flex flex-col items-center justify-center gap-5 max-w-1/2 hero-bg"
      aria-labelledby="hero-header"
    >
      <h1
        id="hero-header"
        className="text-6xl tracking-widest font-bold animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.25s" }}
      >
        Noah Park-Nguyen
      </h1>
      <h2
        className="text-4xl tracking-wider animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.5s" }}
      >
        Software Developer & Student
      </h2>
      <figure className="relative flex justify-center">
        <img
          src={profilePicture}
          alt="Noah Park-Nguyen, a software developer based in Ottawa, Ontario."
          className="rounded-full w-1/2 animate-fade-in-up opacity-0 profile-picture"
          style={{ animationDelay: "0.75s" }}
          title="That's me!"
        />
        <figcaption className="sr-only">
          Noah Park-Nguyen, software developer and student.
        </figcaption>
      </figure>
      <h3
        className="text-2xl animate-fade-in-up opacity-0"
        style={{ animationDelay: "1s" }}
      >
        Living in Ottawa, Ontario. Open to remote and in-person gigs!
      </h3>
      <button
        style={{ animationDelay: "1.25s" }}
        className="p-3 text-lg font-bold cursor-pointer text-white bg-purple-600 rounded-lg shadow-lg hover:bg-space-gradient transition-all animate-fade-in-up opacity-0"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          aria-label="Contact Me"
        >
          Let&apos;s Get in Touch!
        </Link>
      </button>
    </section>
  );
}

export default Hero;
