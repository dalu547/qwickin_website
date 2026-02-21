import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type VisualVariant = "dashboard" | "map" | "timeline" | "cards" | "ring";
type VisualRatio = "16/9" | "1/1" | "4/3";

interface VisualPanelProps {
  label: string;
  variant?: VisualVariant;
  ratio?: VisualRatio;
  graphicType?: string;
  description?: string;
  recommendedSize?: string;
  className?: string;
}

const ratioClassMap: Record<VisualRatio, string> = {
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
};

const ratioSizeMap: Record<VisualRatio, string> = {
  "16/9": "1600x900 px",
  "1/1": "1200x1200 px",
  "4/3": "1600x1200 px",
};

export const VisualPanel = ({
  label,
  variant = "dashboard",
  ratio = "16/9",
  graphicType = "Illustration / UI Mockup",
  description = "Replace with final production-ready visual from Figma.",
  recommendedSize,
  className,
}: VisualPanelProps) => {
  const size = recommendedSize ?? ratioSizeMap[ratio];

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 1.4, rotateY: -1.4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a1d33] to-[#121521] p-5 shadow-[0_0_0_rgba(0,0,0,0)]",
        "hover:border-[#9d4edd]/70 hover:shadow-[0_0_35px_rgba(157,78,221,0.35)]",
        ratioClassMap[ratio],
        className
      )}
      aria-label={label}
    >
      <div className="noise-overlay absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#9d4edd]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#00d9ff]/20 blur-3xl" />

      <div className="relative z-10 mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#9ba1bd]">Graphic Placeholder</p>
        <span className="rounded-full border border-white/20 px-2 py-1 text-[10px] text-[#b8b8b8]">{ratio}</span>
      </div>

      <div className="relative z-10 flex h-[calc(100%-54px)] flex-col">
        <div className="min-h-0 flex-1">
        {variant === "dashboard" ? (
          <div className="grid h-full gap-3">
            <div className="h-[58%] rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="mb-2 h-2 w-24 rounded-full bg-white/20" />
              <div className="grid h-[calc(100%-16px)] grid-cols-8 items-end gap-1">
                {[35, 52, 48, 66, 59, 71, 63, 78].map((v, i) => (
                  <div key={i} className="rounded-sm bg-gradient-to-t from-[#4cc9f0] to-[#9d4edd]" style={{ height: `${v}%` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Jobs", "Security", "Cloud"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-xs text-[#d0d3df]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {variant === "map" ? (
          <div className="relative h-full rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(76,201,240,0.35),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(157,78,221,0.28),transparent_42%),linear-gradient(120deg,#121521,#171a2d)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
            {[
              ["22%", "36%"],
              ["48%", "58%"],
              ["70%", "42%"],
            ].map(([left, top]) => (
              <span
                key={`${left}-${top}`}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d9ff] shadow-[0_0_18px_rgba(0,217,255,0.8)]"
                style={{ left, top }}
              />
            ))}
          </div>
        ) : null}

        {variant === "timeline" ? (
          <div className="relative h-full space-y-3">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#9d4edd] to-[#00d9ff]" />
            {[
              "Discover & Scope",
              "Design & Build",
              "Launch & Support",
              "Scale & Optimize",
            ].map((item) => (
              <div key={item} className="ml-7 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="absolute left-[7px] mt-1.5 h-2.5 w-2.5 rounded-full bg-[#00d9ff]" />
                <p className="text-xs text-[#d7daea]">{item}</p>
              </div>
            ))}
          </div>
        ) : null}

        {variant === "cards" ? (
          <div className="grid h-full grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-14 rounded-full bg-white/20" />
                <div className="mt-3 h-[calc(100%-20px)] rounded-lg bg-gradient-to-br from-[#9d4edd]/35 to-[#4cc9f0]/35" />
              </div>
            ))}
          </div>
        ) : null}

        {variant === "ring" ? (
          <div className="grid h-full grid-cols-3 items-center gap-3">
            {[82, 76, 91].map((score, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div
                  className="grid h-14 w-14 place-items-center rounded-full text-xs font-semibold text-white"
                  style={{
                    background: `conic-gradient(#4cc9f0 ${score}%, rgba(255,255,255,0.1) ${score}% 100%)`,
                  }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#111626]">{score}%</span>
                </div>
                <p className="text-[10px] text-[#c7cbe0]">KPI {idx + 1}</p>
              </div>
            ))}
          </div>
        ) : null}
        </div>

        <div className="mt-3 rounded-xl border border-white/15 bg-[#0f1322]/90 px-3 py-2 text-[10px] text-[#c6cbe0]">
          <p className="truncate font-semibold text-[#e7ebfb]">IMAGE SLOT: {label}</p>
          <p className="mt-1">
            <span className="text-[#9ba1bd]">TYPE:</span> {graphicType}
          </p>
          <p>
            <span className="text-[#9ba1bd]">SIZE:</span> {size}
          </p>
          <p className="mt-1 overflow-hidden text-ellipsis">
            <span className="text-[#9ba1bd]">BRIEF:</span> {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
