"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiApacheecharts,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiMaterialdesign,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FiCloud } from "react-icons/fi"; // REST APIs
import { TbInfinity } from "react-icons/tb"; // CI/CD + (placeholder for XGBoost)

type Category = "frontend" | "backend" | "tools";

type SkillItem = {
  name: string;
  category: Category;
  icon: IconType;
  level: number; // purely visual
};

const catMeta: Record<Category, { label: string; color: string; glow: string }> = {
  frontend: { label: "Frontend", color: "#a78bfa", glow: "rgba(167,139,250,0.18)" },
  backend: { label: "Backend", color: "#84cc16", glow: "rgba(132,204,22,0.16)" },
  tools: { label: "Tools", color: "#f59e0b", glow: "rgba(245,158,11,0.16)" },
};

const skills: SkillItem[] = [
  // Frontend
  { name: "React", category: "frontend", icon: SiReact, level: 92 },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, level: 86 },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, level: 88 },
  { name: "Tailwind", category: "frontend", icon: SiTailwindcss, level: 90 },
  {name: "Material UI", category: "frontend", icon: SiMaterialdesign, level: 90},

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs, level: 76 },
   { name: "Express.js", category: "backend", icon: SiExpress, level: 76 },
  { name: "Laravel/PHP", category: "backend", icon: SiLaravel, level: 82 },
  { name: "Java", category: "backend", icon: FaJava, level: 72 },
  { name: "REST APIs", category: "backend", icon: FiCloud, level: 84 },

  // Databases & Tools
  { name: "MongoDB", category: "tools", icon: SiMongodb, level: 90 },
  { name: "MySQL", category: "tools", icon: SiMysql, level: 78 },
  { name: "Git", category: "tools", icon: SiGit, level: 90 },
  { name: "Docker", category: "tools", icon: SiDocker, level: 72 },
  { name: "CI/CD", category: "tools", icon: TbInfinity, level: 70 },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SkillCard({
  item,
  accent,
  glow,
  animate,
  index
}: {
  item: SkillItem;
  accent: string;
  glow: string;
  animate: boolean;
  index: number
}) {
  const Icon = item.icon;

  return (
    <motion.div
      className={cx(
        "group relative w-full overflow-hidden",
        "rounded-2xl border border-white/10",
        "bg-white/[0.03] hover:bg-white/[0.05]",
        "transition-colors" 
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {/* accent hairline */}
      <div
        className="absolute left-0 top-0 h-[2px] w-full opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ boxShadow: `0 0 40px ${glow}` }}
      />

      <div className="relative p-5">
        <div className="flex items-center gap-4">
          {/* Icon badge */}
          <div
            className={cx(
              "h-12 w-12 shrink-0 rounded-2xl grid place-items-center",
              "border border-white/10 bg-black/30"
            )}
            style={{ boxShadow: `0 0 18px ${glow}` }}
          >
            <Icon className="text-[20px]" style={{ color: accent, opacity: 0.95 }} />
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <div className="font-mono text-base md:text-[15px] text-white/90 leading-tight truncate">
              {item.name}
            </div>

            {/* ✅ Progress bar under each framework */}
{/* ✅ Smooth progress bar (scaleX instead of width) */}
<div className="mt-3 h-[7px] w-full rounded-full bg-white/10 overflow-hidden relative">
  <motion.div
    className="h-full rounded-full will-change-transform"
    style={{
      background: accent,
      boxShadow: `0 0 18px ${glow}`,
      transformOrigin: "0% 50%",
    }}
    initial={{ scaleX: 0 }}
    animate={animate ? { scaleX: item.level / 100 } : { scaleX: 0 }}
    transition={{ duration: 0.75,delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  />
  <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsShowcase({ animate }: { animate: boolean }) {
  const [activeCat, setActiveCat] = useState<Category>("frontend");
  const meta = catMeta[activeCat];

  const filtered = useMemo(
    () => skills.filter((s) => s.category === activeCat),
    [activeCat]
  );

  return (
    // ✅ This wrapper guarantees spacing after the whole component
    <div className="pb-12 md:pb-16">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={cx(
          "relative rounded-3xl border border-white/10 overflow-hidden",
          "bg-black/10",
          "pb-4 md:pb-20",
          "flex flex-col"
        )}
        style={{
          boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 64px ${meta.glow}`,
        }}
      >
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full blur-3xl opacity-15"
            style={{ background: meta.color }}
          />
          <div
            className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full blur-3xl opacity-10"
            style={{ background: meta.color }}
          />
          {/* <div className="absolute inset-0 opacity-[0.05] [background:linear-gradient(transparent_0,rgba(255,255,255,0.8)_1px,transparent_2px)] [background-size:100%_28px]" /> */}
        </div>

        {/* header */}
        <div className="relative px-6 md:px-8 py-6 md:py-7 border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="font-mono text-xl md:text-2xl text-white/90">
                Technical Skills
              </div>
            </div>

            {/* tabs */}
            <div className="flex flex-wrap gap-2">
              {(["frontend", "backend", "tools"] as Category[]).map((c) => {
                const isActive = c === activeCat;
                const m = catMeta[c];

                return (
                  <button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={cx(
                      "relative rounded-full px-4 py-2 font-mono text-sm transition",
                      "border",
                      isActive
                        ? "text-white border-white/20"
                        : "text-white/60 border-white/10 hover:text-white/90 hover:border-white/20"
                    )}
                    style={{
                      background: isActive ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <span className="relative z-10">{m.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="tabUnderline"
                        className="absolute left-4 right-4 -bottom-[6px] h-[2px] rounded-full"
                        style={{ background: m.color }}
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* content */}
        <div className="relative px-6 md:px-8 pt-7 md:pt-9 pb-10 md:pb-12">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {filtered.map((item, index) => (
                <SkillCard
                  key={item.name}
                  item={item}
                  accent={meta.color}
                  glow={meta.glow}
                  animate={animate}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
