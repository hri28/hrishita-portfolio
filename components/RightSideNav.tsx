"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function RightSideNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-6 text-right z-50">
      {sections.map((section) => {
        const isActive = activeSection === section;

        return (
          <a
            key={section}
            href={`#${section}`}
            className="relative font-mono text-sm text-white/60 hover:text-[#84cc16] transition"
          >
            {isActive && (
              <motion.span
                layoutId="active-underline"
                className="absolute -bottom-1 right-0 h-[2px] w-full bg-[#84cc16]"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
            <span
              className={isActive ? "text-[#84cc16]" : ""}
            >
              {section}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
