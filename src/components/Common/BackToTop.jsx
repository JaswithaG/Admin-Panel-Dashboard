import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;