"use client";

import { cn } from "@/lib/utils";

export interface DonutSegment {
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  percentage: number;
  label: string;
  size?: number;
  className?: string;
}

export function DonutChart({
  segments,
  percentage,
  label,
  size = 140,
  className,
}: DonutChartProps) {
  const strokeWidth = 18;
  const viewBox = 120;
  const center = viewBox / 2;
  const radius = (viewBox - strokeWidth) / 2 - 2;
  const circumference = 2 * Math.PI * radius;
  const gapAngle = 3;
  const totalGap = gapAngle * segments.length;
  const availableAngle = 360 - totalGap;

  let accumulatedOffset = 0;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#F3F4F6"
          strokeWidth={strokeWidth}
        />

        {/* Segments */}
        {segments.map((segment, index) => {
          const segmentAngle = (segment.value / 100) * availableAngle;
          const segmentLength = (segmentAngle / 360) * circumference;
          const offset = (accumulatedOffset / 360) * circumference;

          accumulatedOffset += segmentAngle + gapAngle;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          );
        })}
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground leading-none">
          {percentage}%
        </span>
        <span className="text-xs text-muted-foreground mt-1">{label}</span>
      </div>
    </div>
  );
}
