import Link from "next/link";

/**
 * Ligeff wordmark — pure typographic.
 * Desktop:  LIGEFF AGENCY  (all caps, tracking 0.25em)
 * Tablet:   LIGEFF
 * Mobile:   LiGeff
 *
 * The letter G is always uppercase to enforce pronunciation (Lee-Jeff).
 * No icons, no SVG mark, no dropshadows, no gradients.
 */
export function Wordmark({
  variant = "auto",
  className = "",
}: {
  variant?: "auto" | "desktop" | "tablet" | "mobile";
  className?: string;
}) {
  const base = "font-display font-medium text-ink select-none";

  if (variant === "desktop") {
    return (
      <span
        className={`${base} ${className}`}
        style={{ letterSpacing: "0.25em", fontSize: "1.05rem" }}
      >
        LIGEFF&nbsp;AGENCY
      </span>
    );
  }
  if (variant === "tablet") {
    return (
      <span
        className={`${base} ${className}`}
        style={{ letterSpacing: "0.25em", fontSize: "1.1rem" }}
      >
        LIGEFF
      </span>
    );
  }
  if (variant === "mobile") {
    return (
      <span
        className={`${base} ${className}`}
        style={{ letterSpacing: "0.02em", fontSize: "1.4rem" }}
      >
        LiGeff
      </span>
    );
  }

  // auto: responsive swap
  return (
    <span className={base} aria-label="Ligeff Agency">
      <span
        className="hidden lg:inline"
        style={{ letterSpacing: "0.25em", fontSize: "1.05rem" }}
      >
        LIGEFF&nbsp;AGENCY
      </span>
      <span
        className="hidden md:inline lg:hidden"
        style={{ letterSpacing: "0.25em", fontSize: "1.1rem" }}
      >
        LIGEFF
      </span>
      <span
        className="inline md:hidden"
        style={{ letterSpacing: "0.02em", fontSize: "1.4rem" }}
      >
        LiGeff
      </span>
    </span>
  );
}

export function WordmarkLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ligeff Agency — home"
      className={`inline-flex items-center px-1 ${className}`}
    >
      <Wordmark />
    </Link>
  );
}
