import PropTypes from "prop-types";
import {
  FaBriefcase,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaTools,
  FaUser,
} from "react-icons/fa";

const icons = {
  Home: <FaHome />,
  About: <FaUser />,
  Skills: <FaTools />,
  Experience: <FaBriefcase />,
  Projects: <FaFolderOpen />,
  Contact: <FaEnvelope />,
};

function Navigation({ slides, activeSlide, setActiveSlide }) {
  return (
    <header role="banner" className="w-full">
      <nav
        id="site-navigation"
        role="navigation"
        aria-labelledby="nav-label"
        className="text-xm flex w-full sm:text-base xl:text-xl"
      >
        <h2 id="nav-label" className="sr-only">
          Site Navigation
        </h2>
        <ul className="flex w-full flex-row justify-evenly gap-1 p-3 sm:justify-center sm:gap-3">
          {slides.map((slide, index) => {
            const isActive = activeSlide === slide;
            return (
              <li key={slide}>
                <button
                  onClick={() => setActiveSlide(slides[index])}
                  id={`nav-${slide}`}
                  className={`flex cursor-pointer items-center rounded-lg border border-primary px-2 py-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight ${
                    isActive
                      ? "pointer-events-none bg-tertiary text-white ring-2"
                      : "hover:border-white hover:bg-tertiary"
                  }`}
                  aria-labelledby={`nav-${slide}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {icons[slide]}
                  <span className="ml-2 hidden sm:inline">{slide}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div aria-live="polite" className="sr-only">
        {activeSlide} is now active.
      </div>
    </header>
  );
}

Navigation.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSlide: PropTypes.string.isRequired,
  setActiveSlide: PropTypes.func.isRequired,
};

export default Navigation;
