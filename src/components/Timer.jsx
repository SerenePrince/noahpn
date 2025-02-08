import { useState, useEffect } from "react";
import { FaPause, FaPlay, FaArrowRotateLeft } from "react-icons/fa6";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex w-full flex-row justify-between text-base xl:text-xl">
      <div className="inline-flex items-center gap-3">
        <span>{formatTime(time)}</span>
        <button
          onClick={handleStartPause}
          className="inline-flex cursor-pointer items-center rounded-lg border border-primary p-1 transition hover:border-white hover:bg-tertiary hover:text-white"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={handleReset}
          className="inline-flex cursor-pointer items-center rounded-lg border border-primary p-1 transition hover:border-white hover:bg-tertiary hover:text-white"
        >
          <FaArrowRotateLeft />
        </button>
      </div>
      <span>{getCurrentTime()}</span>
    </div>
  );
}

export default Timer;
