/**
 * Custom SVG diagrams for Pillar 01 — Operational Efficiency.
 * These are material-truth visual proofs, not stock images.
 * Pure SVG, warm-monochrome, no external dependencies.
 */

/* ------------------------------------------------------------------
   WorkflowMap — Before/After automation map
   Left: chaotic 11-node manual workflow
   Right: clean 2-node automated workflow
------------------------------------------------------------------ */
export function WorkflowMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={className}
      role="img"
      aria-label="Workflow map: before automation shows 11 human touchpoints, after automation shows 2 human touchpoints"
      style={{ width: "100%", height: "auto" }}
    >
      {/* BEFORE side (left half) */}
      <g>
        <text
          x="60"
          y="50"
          fontFamily="var(--font-sans)"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.22em"
          fill="var(--ink-3)"
        >
          BEFORE · 11 TOUCHPOINTS
        </text>

        {/* Chaotic nodes — scattered, overlapping lines */}
        {[
          { x: 80, y: 110, label: "EMAIL" },
          { x: 180, y: 180, label: "COPY" },
          { x: 100, y: 250, label: "PASTE" },
          { x: 220, y: 320, label: "CHECK" },
          { x: 120, y: 390, label: "FLAG" },
          { x: 260, y: 450, label: "WAIT" },
          { x: 380, y: 130, label: "CHASE" },
          { x: 420, y: 230, label: "REMIND" },
          { x: 360, y: 340, label: "COPY 2" },
          { x: 460, y: 420, label: "LOG" },
          { x: 540, y: 490, label: "REPORT" },
        ].map((n, i) => (
          <g key={i}>
            <rect
              x={n.x - 35}
              y={n.y - 16}
              width="70"
              height="32"
              fill="none"
              stroke="var(--ink-3)"
              strokeWidth="1"
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="10"
              fontWeight="500"
              letterSpacing="0.1em"
              fill="var(--ink-2)"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Chaotic connecting lines */}
        <g stroke="var(--ink-3)" strokeWidth="0.5" fill="none" opacity="0.5">
          <path d="M115,125 Q160,150 175,170" />
          <path d="M175,195 Q140,220 115,245" />
          <path d="M125,265 Q170,290 215,315" />
          <path d="M225,335 Q175,360 135,385" />
          <path d="M135,405 Q200,425 245,448" />
          <path d="M275,455 Q325,300 375,135" />
          <path d="M405,145 Q415,185 425,225" />
          <path d="M425,245 Q395,290 365,335" />
          <path d="M375,355 Q415,385 455,415" />
          <path d="M465,435 Q500,460 535,485" />
        </g>

        {/* Divider */}
        <line
          x1="600"
          y1="40"
          x2="600"
          y2="560"
          stroke="var(--line)"
          strokeWidth="1"
        />
      </g>

      {/* AFTER side (right half) */}
      <g>
        <text
          x="660"
          y="50"
          fontFamily="var(--font-sans)"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.22em"
          fill="var(--ink)"
        >
          AFTER · 2 TOUCHPOINTS
        </text>

        {/* Clean flow — two large nodes */}
        <g>
          <rect
            x="700"
            y="200"
            width="160"
            height="60"
            fill="var(--ink)"
            stroke="var(--ink)"
            strokeWidth="1"
          />
          <text
            x="780"
            y="237"
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="14"
            fontWeight="600"
            letterSpacing="0.1em"
            fill="var(--bg)"
          >
            TRIGGER
          </text>
        </g>

        {/* Clean arrow */}
        <g stroke="var(--ink)" strokeWidth="1.5" fill="none">
          <line x1="860" y1="230" x2="940" y2="230" />
          <polyline points="935,224 945,230 935,236" />
        </g>

        <g>
          <rect
            x="950"
            y="200"
            width="160"
            height="60"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          <text
            x="1030"
            y="237"
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="14"
            fontWeight="600"
            letterSpacing="0.1em"
            fill="var(--ink)"
          >
            DONE
          </text>
        </g>

        {/* Stats below */}
        <text
          x="900"
          y="380"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="64"
          fontWeight="400"
          fill="var(--ink)"
          letterSpacing="-0.03em"
        >
          14 min
        </text>
        <text
          x="900"
          y="420"
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize="13"
          fontWeight="500"
          letterSpacing="0.22em"
          fill="var(--ink-3)"
        >
          DOWN FROM 3 DAYS
        </text>
      </g>

      {/* Bottom hairline */}
      <line
        x1="60"
        y1="560"
        x2="1140"
        y2="560"
        stroke="var(--line)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------
   TimeSavedChart — bar chart showing time recovered per role
------------------------------------------------------------------ */
export function TimeSavedChart({ className = "" }: { className?: string }) {
  const bars = [
    { label: "OPS LEAD", before: 95, after: 12 },
    { label: "SALES OPS", before: 78, after: 8 },
    { label: "FINANCE", before: 62, after: 5 },
    { label: "CS LEAD", before: 54, after: 10 },
  ];
  const maxVal = 100;
  const chartH = 320;
  const barW = 60;
  const gap = 80;

  return (
    <svg
      viewBox="0 0 600 440"
      className={className}
      role="img"
      aria-label="Bar chart: hours per week recovered per role after automation"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Y-axis hairline */}
      <line
        x1="60"
        y1="40"
        x2="60"
        y2="40 + {chartH}"
        stroke="var(--line)"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1={40 + chartH}
        x2="580"
        y2={40 + chartH}
        stroke="var(--line)"
        strokeWidth="1"
      />

      {/* Bars */}
      {bars.map((b, i) => {
        const x = 100 + i * (barW + gap);
        const beforeH = (b.before / maxVal) * chartH;
        const afterH = (b.after / maxVal) * chartH;
        return (
          <g key={i}>
            {/* Before bar (muted) */}
            <rect
              x={x}
              y={40 + chartH - beforeH}
              width={barW * 0.4}
              height={beforeH}
              fill="var(--ink-3)"
              opacity="0.3"
            />
            {/* After bar (solid) */}
            <rect
              x={x + barW * 0.45}
              y={40 + chartH - afterH}
              width={barW * 0.4}
              height={afterH}
              fill="var(--ink)"
            />
            {/* Label */}
            <text
              x={x + barW * 0.4}
              y={40 + chartH + 24}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.15em"
              fill="var(--ink-3)"
            >
              {b.label}
            </text>
            {/* Before value */}
            <text
              x={x + barW * 0.2}
              y={40 + chartH - beforeH - 8}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="11"
              fill="var(--ink-3)"
            >
              {b.before}h
            </text>
            {/* After value */}
            <text
              x={x + barW * 0.65}
              y={40 + chartH - afterH - 8}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="11"
              fontWeight="600"
              fill="var(--ink)"
            >
              {b.after}h
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g>
        <rect x="380" y="20" width="12" height="12" fill="var(--ink-3)" opacity="0.3" />
        <text
          x="398"
          y="30"
          fontFamily="var(--font-sans)"
          fontSize="11"
          fill="var(--ink-3)"
          letterSpacing="0.1em"
        >
          BEFORE
        </text>
        <rect x="470" y="20" width="12" height="12" fill="var(--ink)" />
        <text
          x="488"
          y="30"
          fontFamily="var(--font-sans)"
          fontSize="11"
          fill="var(--ink)"
          letterSpacing="0.1em"
        >
          AFTER
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------
   ErrorRateDiagram — large numerical comparison
------------------------------------------------------------------ */
export function ErrorRateDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className={className}
      role="img"
      aria-label="Error rate: before automation 6.1 percent, after automation 0.2 percent"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Before */}
      <g>
        <text
          x="100"
          y="80"
          fontFamily="var(--font-sans)"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.22em"
          fill="var(--ink-3)"
        >
          BEFORE
        </text>
        <text
          x="100"
          y="220"
          fontFamily="var(--font-display)"
          fontSize="140"
          fontWeight="400"
          fill="var(--ink-3)"
          letterSpacing="-0.04em"
        >
          6.1%
        </text>
        <text
          x="100"
          y="270"
          fontFamily="var(--font-sans)"
          fontSize="14"
          fill="var(--ink-2)"
        >
          6 in 100 tasks had an error
        </text>
      </g>

      {/* Divider */}
      <line
        x1="400"
        y1="60"
        x2="400"
        y2="340"
        stroke="var(--line)"
        strokeWidth="1"
      />

      {/* After */}
      <g>
        <text
          x="500"
          y="80"
          fontFamily="var(--font-sans)"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.22em"
          fill="var(--ink)"
        >
          AFTER
        </text>
        <text
          x="500"
          y="220"
          fontFamily="var(--font-display)"
          fontSize="140"
          fontWeight="400"
          fill="var(--ink)"
          letterSpacing="-0.04em"
        >
          0.2%
        </text>
        <text
          x="500"
          y="270"
          fontFamily="var(--font-sans)"
          fontSize="14"
          fill="var(--ink-2)"
        >
          2 in 1,000 tasks had an error
        </text>
      </g>
    </svg>
  );
}
