"use client";

const sections = ["home", "about","experience", "projects", "contact"];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex gap-6 px-6 py-3 rounded-full border border-white/20 backdrop-blur bg-black/40">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="font-mono text-xs text-white/70 hover:text-[#84cc16] transition"
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
