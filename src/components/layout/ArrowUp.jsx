import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ArrowUp = () => {
  // Go up the page after click the arrow up button
  const arrowUpClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [scrolly, setScrolly] = useState(false);

  useEffect(() => {
    // Adjusting the arrow up button to appear after scolling 250px down the page
    const windowScrollY = () => {
      if (window.scrollY >= 250) {
        setScrolly(true);
      } else {
        setScrolly(false);
      }
    };

    window.addEventListener("scroll", windowScrollY);

    // clean up functions
    return () => {
      window.removeEventListener("scroll", windowScrollY);
    };
  }, []);
  return (
    <span
      className={scrolly ? "arrow-up show" : "arrow-up"}
      onClick={arrowUpClick}
    >
      <FaRegArrowAltCircleUp />
    </span>
  );
};

export default ArrowUp;
