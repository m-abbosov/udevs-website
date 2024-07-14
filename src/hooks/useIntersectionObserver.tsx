import {useEffect} from "react";

const useIntersectionObserver = (
  setActiveId: React.Dispatch<React.SetStateAction<string>>
) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveId]);
};

export default useIntersectionObserver;
