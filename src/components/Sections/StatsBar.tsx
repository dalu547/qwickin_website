import { useEffect, useRef, useState } from "react";

// ─── Stats config ─────────────────────────────────────────────────────────────
// countTo: numeric target for count-up (0 = no count-up, just display `display`)
const stats = [
  { display: "13+", countTo: 13, suffix: "+", label: "Projects Delivered" },
  { display: "2+",  countTo: 2,  suffix: "+", label: "Years in Business"  },
  { display: "AU + IN", countTo: 0, suffix: "", label: "Offices"           },
  { display: "24/7",    countTo: 0, suffix: "", label: "Support Available" },
];

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

// ─── Single stat cell ─────────────────────────────────────────────────────────
const StatCell = ({
  display,
  countTo,
  suffix,
  label,
  active,
  isLast,
}: {
  display: string;
  countTo: number;
  suffix: string;
  label: string;
  active: boolean;
  isLast: boolean;
}) => {
  const count = useCountUp(countTo, active);
  const valueText = countTo > 0 ? `${count}${suffix}` : display;

  return (
    <div
      className={`reveal-child relative flex flex-col items-center justify-center px-6 py-10 text-center${
        !isLast
          ? " after:absolute after:right-0 after:top-1/2 after:h-[40%] after:-translate-y-1/2 after:w-px after:bg-white/25"
          : ""
      }`}
    >
      <span
        className="font-extrabold leading-none tracking-tight text-white tabular-nums"
        style={{ fontSize: "48px", fontWeight: 800 }}
      >
        {valueText}
      </span>
      <span
        className="mt-2.5 font-semibold uppercase tracking-widest"
        style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}
      >
        {label}
      </span>
    </div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full bg-[#5AA64A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCell
              key={stat.label}
              {...stat}
              active={active}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
