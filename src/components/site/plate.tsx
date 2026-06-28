import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Figure — a real image in a sharp hairline frame.
 * Use this for actual photography / renders / samples.
 * Falls back to the warm-monochrome Plate when no src is provided.
 */
export function Figure({
  src,
  alt,
  ratio = "4 / 3",
  label,
  tone = "light",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  label?: string;
  tone?: "light" | "deep";
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border",
        tone === "light" ? "border-line" : "border-line-inverse",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      {label && (
        <figcaption
          className={cn(
            "absolute inset-x-0 bottom-0 px-4 py-3 md:px-6 md:py-4",
            tone === "light"
              ? "bg-bg/85 text-ink-3"
              : "bg-bg-deep/85 text-ink-3-inverse"
          )}
          style={{
            backgroundColor:
              tone === "light"
                ? "rgba(250, 247, 241, 0.9)"
                : "rgba(26, 22, 17, 0.9)",
          }}
        >
          <span className="text-eyebrow">{label}</span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Plate — warm-monochrome placeholder.
 * Used when no real image is available yet.
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
