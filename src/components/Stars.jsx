import { useEffect, useState } from "react";

function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      // Get the height of the document and width of the window
      const pageHeight = document.documentElement.scrollHeight;
      const pageWidth = window.innerWidth;

      // Generate random stars
      const numberOfStars = 300; // Adjust number of stars
      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * pageWidth}px`,
          top: `${Math.random() * pageHeight}px`,
          size: `${Math.random() * 0.1 + 0.1}rem`,
          delay: `${Math.random() * 3}s`,
          duration: `${Math.random() * 30 + 30}s`,
          opacity: 0,
        });
      }

      setStars(newStars);
    };

    // Initial star generation
    generateStars();

    // Regenerate stars on window resize
    window.addEventListener("resize", generateStars);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-star-movement opacity-0"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Stars;
