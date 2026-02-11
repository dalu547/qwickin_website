import { cn } from "@/lib/utils";

type Ratio = "16/9" | "1/1" | "4/3" | "3/4";
type Variant = "light" | "dark";

interface ImagePlaceholderProps {
  label: string;
  ratio?: Ratio;
  height?: number;
  rounded?: string;
  variant?: Variant;
  src?: string;
  alt?: string;
  className?: string;
}

const ratioMap: Record<Ratio, number> = {
  "16/9": 16 / 9,
  "1/1": 1,
  "4/3": 4 / 3,
  "3/4": 3 / 4,
};

const defaultHeights: Record<Ratio, number> = {
  "16/9": 270,
  "1/1": 220,
  "4/3": 260,
  "3/4": 300,
};

export const ImagePlaceholder = ({
  label,
  ratio = "16/9",
  height,
  rounded = "rounded-3xl",
  variant = "light",
  src,
  alt,
  className,
}: ImagePlaceholderProps) => {
  const resolvedHeight = height ?? defaultHeights[ratio];
  const resolvedWidth = Math.round(resolvedHeight * ratioMap[ratio]);
  const placeholderClasses =
    variant === "dark"
      ? "border-white/35 bg-gradient-to-br from-slate-900/40 to-slate-700/20 text-white"
      : "border-slate-300 bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700";

  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={cn("w-full object-cover", rounded, className)}
        style={{ height: `${resolvedHeight}px` }}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative w-full border-2 border-dashed p-5",
        rounded,
        placeholderClasses,
        className
      )}
      style={{ height: `${resolvedHeight}px` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.22),transparent_60%)]" />
      <div className="relative z-10 flex h-full flex-col items-start justify-center gap-2 text-sm">
        <p className="font-semibold uppercase tracking-wide">IMAGE PLACEHOLDER: {label}</p>
        <p className="text-xs">Recommended size: {resolvedWidth}x{resolvedHeight}</p>
        <p className="text-xs">Replace with: SVG/PNG/WebP from Figma</p>
      </div>
    </div>
  );
};
