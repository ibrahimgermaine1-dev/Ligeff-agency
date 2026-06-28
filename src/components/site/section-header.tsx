import { cn } from "@/lib/utils";

/**
 * Eyebrow — LOCKED style. Index + label + hairline.
 * Use: <Eyebrow index="01">Section name</Eyebrow>
 * On dark: <Eyebrow index="01" inverse>Section name</Eyebrow>
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
    <span
      className={cn(
        "eyebrow",
        inverse && "eyebrow-inverse",
        className
      )}
    >
      {index && <span>{index}</span>}
      <span>{children}</span>
    </span>
  );
}

/**
 * Section header — LOCKED composition. Eyebrow + headline + optional lede.
 */
export function SectionHeader({
  eyebrow,
  index,
  headline,
  lede,
  inverse = false,
  className = "",
}: {
  eyebrow: string;
  index?: string;
  headline: React.ReactNode;
  lede?: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Eyebrow index={index} inverse={inverse}>
        {eyebrow}
      </Eyebrow>
      <h2 className={cn("text-headline", inverse && "text-ink-inverse")}>
        {headline}
      </h2>
      {lede && (
        <p
          className={cn(
            "text-body-lg measure",
            inverse ? "text-ink-2-inverse" : "text-ink-2"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
