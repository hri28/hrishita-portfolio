"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "frontend" | "backend" | "ml" | "tools";

type Skill = {
  name: string;
  category: Category;
  note?: string;
};

const skills: Skill[] = [
  { name: "React", category: "frontend", note: "UI components, state, hooks" },
  { name: "TypeScript", category: "frontend", note: "Types, DX, safety" },
  { name: "Next.js", category: "frontend", note: "App Router, SSR/ISR" },
  { name: "Tailwind", category: "frontend", note: "Design systems & speed" },
  { name: "Framer Motion", category: "frontend", note: "Micro-interactions" },
  { name: "ECharts", category: "frontend", note: "Dashboards & charts" },
  { name: "Leaflet / OpenLayers", category: "frontend", note: "Maps & geospatial UI" },

  { name: "Laravel", category: "backend", note: "MVC, jobs, queues" },
  { name: "Node.js", category: "backend", note: "APIs, tooling" },
  { name: "REST APIs", category: "backend", note: "CRUD, pagination, auth" },
  { name: "MySQL", category: "backend", note: "Schema, queries" },

  { name: "Python", category: "ml", note: "Modeling & pipelines" },
  { name: "scikit-learn", category: "ml", note: "Classical ML" },
  { name: "XGBoost", category: "ml", note: "Strong baselines" },
  { name: "TensorFlow/Keras", category: "ml", note: "Deep learning" },
  { name: "Pandas / NumPy", category: "ml", note: "Data wrangling" },

  { name: "Git/GitHub", category: "tools", note: "Versioning, PRs" },
  { name: "Docker", category: "tools", note: "Containers" },
  { name: "CI/CD", category: "tools", note: "Pipelines" },
  { name: "Postman", category: "tools", note: "API testing" },
];

const catMeta: Record<Category, { label: string; accent: string; soft: string }> = {
  frontend: { label: "Frontend", accent: "#a78bfa", soft: "rgba(167,139,250,0.16)" },
  backend: { label: "Backend", accent: "#84cc16", soft: "rgba(132,204,22,0.14)" },
  ml: { label: "ML / Data", accent: "#60a5fa", soft: "rgba(96,165,250,0.14)" },
  tools: { label: "Tools", accent: "#f59e0b", soft: "rgba(245,158,11,0.14)" },
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillsLab({ animate }: { animate: boolean }) {
  const [activeCat, setActiveCat] = useState<Category>("frontend");
  const [query, setQuery] = useState("");
  const [activeSkill, setActiveSkill] = useState<string>("React");

  const counts = useMemo(() => {
    const c: Record<Category, number> = { frontend: 0, backend: 0, ml: 0, tools: 0 };
    skills.forEach((s) => (c[s.category] += 1));
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((s) => {
      const matchesCat = s.category === activeCat;
      const matchesQuery = !q || s.name.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [activeCat, query]);

  const selected = useMemo(() => {
    const found = skills.find((s) => s.name === activeSkill);
    return found ?? skills.find((s) => s.category === activeCat) ?? skills[0];
  }, [activeSkill, activeCat]);

  // keep selection valid when category changes / query filters out
  useMemo(() => {
    if (!selected) return;
    if (selected.category !== activeCat) {
      const first = skills.find((s) => s.category === activeCat);
      if (first) setActiveSkill(first.name);
    }
  }, [activeCat]); // eslint-disable-line react-hooks/exhaustive-deps

  const accent = catMeta[activeCat].accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="
        rounded-xl
        border border-white/20
        shadow-[0_0_35px_rgba(167,139,250,0.14)]
        hover:shadow-[0_0_65px_rgba(167,139,250,0.22)]
        transition-shadow
        duration-500
        overflow-hidden
      "
    >
      {/* top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 font-mono text-xs text-white/40">skills.lab</span>

        {/* tiny status */}
        <span className="ml-auto font-mono text-xs text-white/35">
          UI Lab · interactive stack explorer
        </span>
      </div>

      {/* body */}
      <div className="p-5 md:p-7 bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] gap-4">
          {/* LEFT: Explorer */}
          <div className="rounded-lg border border-white/10 bg-black/10 p-4">
            <p className="font-mono text-xs text-white/40">explorer</p>
            <h3 className="mt-2 font-mono text-lg text-[#a78bfa]">Tech stack</h3>

            <div className="mt-4 space-y-1 relative">
              {(["frontend", "backend", "ml", "tools"] as Category[]).map((cat) => {
                const isActive = cat === activeCat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={cx(
                      "w-full text-left px-3 py-2 rounded-md font-mono text-sm transition relative",
                      isActive ? "text-white" : "text-white/55 hover:text-white/85"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="catHighlight"
                        className="absolute inset-0 rounded-md"
                        style={{
                          background: catMeta[cat].soft,
                          border: `1px solid rgba(255,255,255,0.08)`,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative flex items-center justify-between">
                      <span>{catMeta[cat].label}</span>
                      <span className="text-xs text-white/40">{counts[cat]}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              <label className="font-mono text-xs text-white/40">search</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${catMeta[activeCat].label.toLowerCase()}...`}
                className="
                  mt-2 w-full rounded-md
                  border border-white/10 bg-black/20
                  px-3 py-2
                  font-mono text-xs
                  text-white/80 placeholder:text-white/30
                  outline-none
                  focus:border-white/25
                "
              />
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="font-serif text-sm text-white/55 leading-relaxed">
                This section is intentionally interactive—like a small product UI—to
                reflect my UI engineering style.
              </p>
            </div>
          </div>

          {/* MIDDLE: Tiles */}
          <div className="rounded-lg border border-white/10 bg-black/10 p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-white/40">components</p>
              <span
                className="font-mono text-xs"
                style={{ color: accent }}
              >
                {catMeta[activeCat].label}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((s) => {
                  const isSel = s.name === activeSkill;
                  const a = catMeta[s.category].accent;

                  return (
                    <motion.button
                      key={s.name}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      onClick={() => setActiveSkill(s.name)}
                      className={cx(
                        "group relative text-left rounded-lg border p-3",
                        "bg-white/[0.02] border-white/10 hover:border-white/20",
                        "transition-all duration-300",
                        "hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
                        isSel && "border-white/25"
                      )}
                      style={
                        isSel
                          ? { boxShadow: `0 0 0 1px rgba(255,255,255,0.12), 0 0 28px ${catMeta[s.category].soft}` }
                          : undefined
                      }
                    >
                      {/* tiny accent corner */}
                      <span
                        className="absolute right-2 top-2 h-2 w-2 rounded-full opacity-70"
                        style={{ background: a }}
                      />

                      <p className="font-mono text-sm text-white/90">{s.name}</p>
                      <p className="mt-1 font-serif text-xs text-white/45 line-clamp-2">
                        {s.note ?? "—"}
                      </p>

                      {/* hover underline */}
                      <span
                        className="pointer-events-none absolute left-3 right-3 bottom-2 h-px opacity-0 group-hover:opacity-100 transition"
                        style={{ background: `linear-gradient(90deg, transparent, ${a}, transparent)` }}
                      />
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="font-mono text-sm text-white/60">No results.</p>
                <p className="font-serif text-sm text-white/45 mt-1">
                  Try a different keyword.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Preview panel (this is the “UI engineering flex”) */}
          <div className="rounded-lg border border-white/10 bg-black/10 p-4">
            <p className="font-mono text-xs text-white/40">preview</p>
            <h3 className="mt-2 font-mono text-lg text-[#a78bfa]">UI snapshot</h3>

            <div
              className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4"
              style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 22px ${catMeta[selected.category].soft}` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/40">selected</span>
                <span className="font-mono text-xs" style={{ color: catMeta[selected.category].accent }}>
                  {catMeta[selected.category].label}
                </span>
              </div>

              <div className="mt-3">
                <p className="font-mono text-xl text-white/90">{selected.name}</p>
                <p className="mt-1 font-serif text-sm text-white/55 leading-relaxed">
                  {selected.note ?? "—"}
                </p>
              </div>

              {/* mini UI preview */}
              <div className="mt-4 space-y-3">
                {/* tabs */}
                <div className="flex gap-2">
                  {["overview", "details", "notes"].map((t, i) => (
                    <span
                      key={t}
                      className={cx(
                        "px-2.5 py-1 rounded-md font-mono text-xs border",
                        i === 0 ? "text-white" : "text-white/50",
                      )}
                      style={
                        i === 0
                          ? {
                              borderColor: "rgba(255,255,255,0.14)",
                              background: catMeta[selected.category].soft,
                            }
                          : {
                              borderColor: "rgba(255,255,255,0.08)",
                              background: "rgba(255,255,255,0.02)",
                            }
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* input */}
                <div>
                  <label className="font-mono text-xs text-white/40">search</label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2">
                    <span className="font-mono text-xs text-white/35">⌘K</span>
                    <span className="font-mono text-xs text-white/60">
                      Jump to {selected.name}
                    </span>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 rounded-md px-3 py-2 font-mono text-xs border transition"
                    style={{
                      borderColor: "rgba(255,255,255,0.14)",
                      background: catMeta[selected.category].soft,
                      color: "white",
                    }}
                  >
                    Primary
                  </button>
                  <button
                    className="flex-1 rounded-md px-3 py-2 font-mono text-xs border border-white/10 bg-white/[0.02] text-white/70 hover:text-white transition"
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="mt-4 flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
              <span className="font-mono text-xs text-white/45">status</span>
              <span className="font-mono text-xs" style={{ color: accent }}>
                ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
