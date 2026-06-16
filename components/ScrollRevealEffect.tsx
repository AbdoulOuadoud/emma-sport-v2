"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealEffect() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Attendre que React finisse de rendre le nouveau contenu
    const timer = setTimeout(() => {
      document.querySelectorAll<Element>(".reveal:not(.in)").forEach((el) =>
        io.observe(el)
      );
    }, 80);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
