import { cn } from "@/lib/utils";

interface IsoBadgeProps {
  standard: string;
  size?: number;
  className?: string;
}

export function IsoBadge({ standard, size = 52, className }: IsoBadgeProps) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 52 52" width={size} height={size}>
        {/* Outer border ring */}
        <circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke="#2D2B6B"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          opacity="0.5"
        />
        {/* Main circle background */}
        <circle cx="26" cy="26" r="22" fill="#1E1B4B" />

        {/* Globe wireframe */}
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" fill="none">
          {/* Horizontal lines */}
          <ellipse cx="26" cy="20" rx="10" ry="2" />
          <ellipse cx="26" cy="24" rx="12" ry="2" />
          <ellipse cx="26" cy="28" rx="10" ry="2" />
          {/* Vertical ellipse */}
          <ellipse cx="26" cy="24" rx="5" ry="9" />
          <ellipse cx="26" cy="24" rx="9" ry="9" />
          {/* Center line */}
          <line x1="14" y1="24" x2="38" y2="24" />
        </g>

        {/* ISO text */}
        <text
          x="26"
          y="17"
          textAnchor="middle"
          fill="white"
          fontSize="7"
          fontWeight="700"
          fontFamily="sans-serif"
          letterSpacing="0.5"
        >
          ISO
        </text>

        {/* Standard number */}
        <text
          x="26"
          y="38"
          textAnchor="middle"
          fill="white"
          fontSize="7"
          fontWeight="600"
          fontFamily="sans-serif"
          letterSpacing="0.3"
        >
          {standard}
        </text>
      </svg>
    </div>
  );
}
