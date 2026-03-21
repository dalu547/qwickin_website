import { useEffect } from "react";

const STAGGER_MS = 100;

export const useScrollReveal = () => {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section")
    );
    if (!sections.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      sections.forEach((section) => {
        section.classList.add("is-visible");
        section
          .querySelectorAll<HTMLElement>(".reveal-child")
          .forEach((child) => child.classList.add("is-visible"));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Reveal the section wrapper
          entry.target.classList.add("is-visible");

          // Stagger any direct .reveal-child elements inside it
          const children = Array.from(
            entry.target.querySelectorAll<HTMLElement>(".reveal-child")
          );
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * STAGGER_MS}ms`;
            child.classList.add("is-visible");
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
};
