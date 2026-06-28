import { cn } from "@/lib/utils";

/**
 * A warm-monochrome placeholder "image" that reads as a real gallery surface
 * even before final photography is supplied. Pure CSS, no external assets.
 *
 * The placeholder uses layered warm gradients (bone → paper → bone) plus a
 * hairline border, so it never reads as a broken image or a gray box.
 */
export function Plate({
  ratio = "4 / 3",
  label,
  tone = "light",
  className = "",
  children,
}: {
  ratio?: string;
  label?: string;
  tone?: "light" | "deep";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        tone === "light" ? "border-line" : "border-line-inverse",
        className
      )}
      style={{
        aspectRatio: ratio,
        background:
          tone === "light"
            ? "linear-gradient(135deg, var(--bone) 0%, var(--paper) 45%, var(--bone) 100%)"
            : "linear-gradient(135deg, #221C13 0%, #1A1611 45%, #221C13 100%)",
      }}
    >
      {/* Hairline grain overlay for material truth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(26,22,17,0.04) 0px, rgba(26,22,17,0.04) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-end p-4 md:p-6">
          <span
            className={cn(
              "text-eyebrow",
              tone === "light" ? "text-ink-3" : "text-ink-3-inverse"
            )}
          >
            {label}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
