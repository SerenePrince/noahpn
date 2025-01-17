import { useState, useEffect } from "react";

function CursorLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener on mount
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div
      className="fixed pointer-events-none transition-transform ease-in-out"
      style={{
        width: "750px",
        height: "750px",
        left: `${position.x - 375}px`, // Centering the cursor
        top: `${position.y - 375}px`,
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.03) 20%, rgba(255, 255, 255, 0) 80%)",
        borderRadius: "50%",
      }}
      role="presentation" // Ensures that this effect does not interfere with screen readers
    ></div>
  );
}

export default CursorLight;
