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
    <header role="navigation" className="flex w-full text-base xl:text-xl">
      <nav className="flex w-full p-3">
        <ul className="flex w-full flex-row justify-evenly gap-3 sm:justify-center">
          {slides.map((slide, index) => {
            const isActive = activeSlide === slide;

            return (
              <li key={slide}>
                <button
                  onClick={() => setActiveSlide(slides[index])}
                  className={`flex cursor-pointer items-center rounded-lg border border-primary px-2 py-1 transition-all focus:ring-2 focus:ring-highlight focus:outline-none ${isActive ? "aria-current-page pointer-events-none bg-tertiary text-white ring-2" : "hover:border-white hover:bg-tertiary"} `}
                  aria-label={slide}
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
    </header>
  );
}

Navigation.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSlide: PropTypes.string.isRequired,
  setActiveSlide: PropTypes.func.isRequired,
};

export default Navigation;
