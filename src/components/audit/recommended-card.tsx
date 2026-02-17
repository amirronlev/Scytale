"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DonutChart, type DonutSegment } from "./donut-chart";
import { getFrameworkBadge } from "./framework-badges";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface RecommendedFramework {
  id: string;
  name: string;
  badgeKey: string;
  percentage: number;
  percentageLabel: string;
  segments: DonutSegment[];
}

interface RecommendedCardProps {
  framework: RecommendedFramework;
  className?: string;
}

export function RecommendedCard({ framework, className }: RecommendedCardProps) {
  return (
    <Card
      className={cn(
        "p-5 gap-0 border border-primary/10 shadow-sm rounded-xl bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-2.5 mb-2">
        <Image
          src={getFrameworkBadge(framework.badgeKey)}
          alt={framework.name}
          width={42}
          height={42}
          className="shrink-0 rounded-full"
        />
        <div className="flex-1 min-w-0 pt-px">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {framework.name}
            </h3>
            <span className="shrink-0 flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 px-2 py-px rounded-full">
              <Sparkles className="w-2.5 h-2.5" />
              Recommended
            </span>
          </div>
        </div>
      </div>

      {/* Gradient message */}
      <h2 className="text-[20px] font-bold mb-2 bg-gradient-to-r from-primary via-emerald-500 to-amber-500 bg-clip-text text-transparent">
        You&apos;re almost there
      </h2>

      {/* Donut Chart */}
      <div className="flex justify-start py-3">
        <DonutChart
          segments={framework.segments}
          percentage={framework.percentage}
          label={framework.percentageLabel}
          size={130}
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mt-1">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg text-[13px] font-medium border-primary/30 text-primary hover:bg-primary/5 hover:text-primary px-4"
        >
          Learn More
        </Button>
        <Button
          size="sm"
          className="rounded-lg text-[13px] font-medium bg-primary hover:bg-primary/90 text-white px-4"
        >
          Request Audit
        </Button>
      </div>
    </Card>
  );
}
