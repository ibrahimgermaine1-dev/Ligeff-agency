import { cn } from "@/lib/utils";

/**
 * Figure — a real image in the locked sharp hairline frame.
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
        "frame relative",
        tone === "deep" && "frame-dark",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
      />
      {label && (
        <figcaption
          className="absolute inset-x-0 bottom-0 px-4 py-3"
          style={{
            backgroundColor:
              tone === "light"
                ? "rgba(250, 247, 241, 0.92)"
                : "rgba(26, 22, 17, 0.92)",
          }}
        >
          <span
            className={cn(
              "text-eyebrow",
              tone === "light" ? "text-ink-3" : "text-ink-3-inverse"
            )}
          >
            {label}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Plate — warm-monochrome placeholder. Used only when no real image exists.
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
        "frame relative",
        tone === "deep" && "frame-dark",
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
      {label && (
        <div className="absolute inset-0 flex items-end p-4">
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
