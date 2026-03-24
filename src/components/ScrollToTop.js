import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));

      if (element) {
        const yOffset = -120; // 🔥 navbar height adjust karo
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;