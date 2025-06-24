import React from "react"
import { FaArrowUp } from "react-icons/fa"
import { useState, useEffect } from "react"

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-500 text-white p-2 rounded-full fixed bottom-10 right-0 mr-4"
        >
          <FaArrowUp size="1rem" />
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
