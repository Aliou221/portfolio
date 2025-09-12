import { useEffect  } from "react";

export function useAnimation(
  allCalss: string,
  threshold: number
) {
  useEffect(() => {
    const animes = document.querySelectorAll(allCalss);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animation une seule fois
          }
        });
      },
      { threshold: threshold }
    );

    animes.forEach((anime) => observer.observe(anime));

    return () => observer.disconnect();

  }, [allCalss, threshold]);
}