"use client";

import { useInViewOnce } from "@/components/useInViewOnce";
import SkillsShowcase from "@/components/SkillsShowcase";

export default function About() {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>({
    threshold: 0.25,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section id="about" className="min-h-screen px-8 md:px-16 py-32">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* About text */}
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-sm text-[#a78bfa] md:text-xl">about</p>

          <h2 className="font-mono text-3xl md:text-4xl">A little about me</h2>

          <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed">
            I'm a Software Engineer with a strong interest in building thoughtful,
            user-focused interfaces. I'm a graduate student in Computer Engineering
            at the University of Waterloo and completed my undergraduate degree in
            Computer Science Engineering in India.
          </p>

          <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed">
            Currently, I'm a Research Assistant at Ubiquitous Health Technology
            (University of Waterloo), contributing to a Canada-wide Substance Use
            Monitoring Tool with YorkU and CCSA, and building PathwAI for ONCAT —
            an AI-driven platform for course comparison and transfer credit support.
          </p>
        </div>

        {/* Skills Window */}
<div ref={ref} className="mt-6 md:mt-8 md:mb-16">
  <SkillsShowcase animate={hasEntered} />
</div>

      </div>
    </section>
  );
}
