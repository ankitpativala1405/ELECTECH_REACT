import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 bg-blue-700 hover:bg-blue-600 text-white p-1.5 z-50 rounded-full shadow-lg transition-transform bounced duration-[2000ms] ease-in-out ${
        animate ? "-translate-y-[10px]" : "translate-y-0"
      }`}
    >
      <svg
        className="h-8 w-8 pinged"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
