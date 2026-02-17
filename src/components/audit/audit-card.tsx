"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { DonutChart, type DonutSegment } from "./donut-chart";
import { getFrameworkBadge } from "./framework-badges";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export type AuditStatus = "active" | "completed";

export interface AuditFramework {
  id: string;
  name: string;
  subName: string;
  badgeKey: string;
  status: AuditStatus;
  percentage: number;
  percentageLabel: string;
  segments: DonutSegment[];
  auditPeriod?: {
    start: string;
    end: string;
  };
}

interface AuditCardProps {
  framework: AuditFramework;
  className?: string;
}

const statusStyles: Record<AuditStatus, string> = {
  active:
    "bg-emerald-50 text-emerald-600 border-emerald-200",
  completed:
    "bg-emerald-50 text-emerald-600 border-emerald-200",
};

const statusLabels: Record<AuditStatus, string> = {
  active: "Active",
  completed: "Completed",
};

export function AuditCard({ framework, className }: AuditCardProps) {
  return (
    <Card
      className={cn(
        "p-5 gap-0 border border-border/60 shadow-sm hover:shadow-md transition-shadow rounded-xl bg-white",
        className
      )}
    >
      {/* Header: Framework badge + Title + Status */}
      <div className="flex items-start gap-2.5">
        <Image
          src={getFrameworkBadge(framework.badgeKey)}
          alt={framework.name}
          width={42}
          height={42}
          className="shrink-0 rounded-full"
        />
        <div className="flex-1 min-w-0 pt-px">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-semibold text-foreground leading-snug truncate">
              {framework.name}
            </h3>
            <span
              className={cn(
                "shrink-0 text-[10px] font-medium px-2 py-px rounded-full border leading-relaxed",
                statusStyles[framework.status]
              )}
            >
              {statusLabels[framework.status]}
            </span>
          </div>
          <p className="text-xs text-muted-foreground truncate leading-snug mt-0.5">
            {framework.subName}
          </p>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center py-4">
        <DonutChart
          segments={framework.segments}
          percentage={framework.percentage}
          label={framework.percentageLabel}
          size={130}
        />
      </div>

      {/* Audit Period */}
      <div className="flex items-baseline gap-2 text-[13px] flex-wrap">
        <span className="font-semibold text-foreground whitespace-nowrap">Audit Period</span>
        {framework.auditPeriod ? (
          <span className="text-muted-foreground whitespace-nowrap">
            {framework.auditPeriod.start} - {framework.auditPeriod.end}
          </span>
        ) : (
          <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium">
            <Plus className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Set Timeframe</span>
          </button>
        )}
      </div>
    </Card>
  );
}
