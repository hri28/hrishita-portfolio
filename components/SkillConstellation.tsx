"use client";

import { useMemo, useState } from "react";

type Group = { label: string; items: string[] };

export default function SkillConstellation({
  groups,
}: {
  groups: Group[];
}) {
  const [active, setActive] = useState(groups[0]?.label ?? "Frontend");

  const activeGroup = useMemo(
    () => groups.find((g) => g.label === active) ?? groups[0],
    [groups, active]
  );

  // Pre-place nodes around a circle (simple + stable)
  const nodes = useMemo(() => {
    const items = activeGroup?.items ?? [];
    const r = 120;
    const cx = 190;
    const cy = 150;
    return items.map((name, i) => {
      const angle = (2 * Math.PI * i) / items.length - Math.PI / 2;
      return {
        name,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    });
  }, [activeGroup]);

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {groups.map((g) => {
          const isActive = g.label === active;
          return (
            <button
              key={g.label}
              onMouseEnter={() => setActive(g.label)}
              onFocus={() => setActive(g.label)}
              className={[
                "font-mono text-xs px-3 py-1.5 rounded-full border transition",
                isActive
                  ? "border-[#a78bfa]/50 text-[#a78bfa] bg-[#a78bfa]/10"
                  : "border-white/10 text-white/60 hover:text-white hover:border-white/20",
              ].join(" ")}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Visual */}
      <div className="mt-5 relative">
        <div
          className="
            relative rounded-md border border-white/10
            bg-black/10 overflow-hidden
            h-[320px]
          "
        >
          {/* Glow layer */}
          <div
            className="
              absolute inset-0
              opacity-60
              blur-2xl
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(167,139,250,0.25), transparent 55%)",
            }}
          />

          <svg
            viewBox="0 0 380 300"
            className="absolute inset-0 w-full h-full"
          >
            {/* center node */}
            <circle
              cx="190"
              cy="150"
              r="22"
              fill="rgba(167,139,250,0.15)"
              stroke="rgba(167,139,250,0.55)"
              strokeWidth="1"
            />

            {/* connections */}
            {nodes.map((n) => (
              <line
                key={n.name}
                x1="190"
                y1="150"
                x2={n.x}
                y2={n.y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
            ))}

            {/* outer nodes */}
            {nodes.map((n) => (
              <g key={n.name}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="6"
                  fill="rgba(132,204,22,0.18)"
                  stroke="rgba(132,204,22,0.5)"
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>

          {/* Labels */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-xs text-white/50">focus</p>
              <p className="mt-1 font-mono text-lg text-[#a78bfa]">
                {active}
              </p>
            </div>
          </div>

          {/* Chips positioned visually (simple absolute overlay) */}
          <div className="absolute inset-0">
            {nodes.map((n) => (
              <span
                key={n.name}
                className="
                  absolute -translate-x-1/2 -translate-y-1/2
                  font-mono text-[11px]
                  px-2 py-1 rounded-full
                  border border-white/10 bg-white/[0.03]
                  text-white/75
                  hover:border-[#84cc16]/40 hover:text-white
                  transition
                "
                style={{ left: `${(n.x / 380) * 100}%`, top: `${(n.y / 300) * 100}%` }}
              >
                {n.name}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-3 font-serif text-sm text-white/60 leading-relaxed">
          Hover categories to see the stack group visually.
        </p>
      </div>
    </div>
  );
}
