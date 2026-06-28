import { cn } from "@/lib/utils";

/**
 * Section eyebrow with index — used everywhere on the site.
 * Example: 01 / OPERATIONAL EFFICIENCY
 */
export function Eyebrow({
  index,
  children,
  inverse = false,
  className = "",
}: {
  index?: string;
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        inverse ? "text-ink-3-inverse" : "text-ink-3",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-px w-8",
          inverse ? "bg-ink-3-inverse" : "bg-ink-3"
        )}
      />
      {index && (
        <span className="text-eyebrow">
          {index}
        </span>
      )}
      <span className="text-eyebrow">{children}</span>
    </div>
  );
}

/**
 * Standard section header: eyebrow + display headline + optional lede.
 */
export function SectionHeader({
  eyebrow,
  index,
  headline,
  lede,
  inverse = false,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  index?: string;
  headline: React.ReactNode;
  lede?: React.ReactNode;
  inverse?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Eyebrow index={index} inverse={inverse}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "text-headline",
          inverse && "text-ink-inverse"
        )}
      >
        {headline}
      </h2>
      {lede && (
        <p
          className={cn(
            "text-body-lg max-w-[58ch]",
            inverse ? "text-ink-2-inverse" : "text-ink-2",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
