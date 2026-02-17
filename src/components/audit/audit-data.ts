import type { AuditFramework } from "./audit-card";
import type { RecommendedFramework } from "./recommended-card";

export const activeFrameworks: AuditFramework[] = [
  {
    id: "soc2-1",
    name: "SOC 2 Type ||",
    subName: "{Very long name Very long name V...}",
    badgeKey: "soc2-type2",
    status: "active",
    percentage: 75,
    percentageLabel: "Ready",
    segments: [
      { value: 30, color: "#3B82F6" },
      { value: 22, color: "#EC4899" },
      { value: 13, color: "#EAB308" },
      { value: 10, color: "#22D3EE" },
    ],
    auditPeriod: undefined,
  },
  {
    id: "soc2-2",
    name: "SOC 2 Type ||",
    subName: "{name}",
    badgeKey: "soc2-type2",
    status: "active",
    percentage: 75,
    percentageLabel: "Ready",
    segments: [
      { value: 30, color: "#3B82F6" },
      { value: 22, color: "#EC4899" },
      { value: 13, color: "#EAB308" },
      { value: 10, color: "#22D3EE" },
    ],
    auditPeriod: {
      start: "Feb 1, 2026",
      end: "Apr 30, 2026",
    },
  },
  {
    id: "iso-27001-1",
    name: "ISO 27001",
    subName: "{name}",
    badgeKey: "iso-27001",
    status: "active",
    percentage: 75,
    percentageLabel: "Approved",
    segments: [
      { value: 70, color: "#10B981" },
      { value: 5, color: "#EF4444" },
    ],
    auditPeriod: {
      start: "Jan 1, 2021",
      end: "Dec 31, 2021",
    },
  },
  {
    id: "hipaa-1",
    name: "HIPAA",
    subName: "{name}",
    badgeKey: "hipaa",
    status: "completed",
    percentage: 100,
    percentageLabel: "Approved",
    segments: [{ value: 100, color: "#10B981" }],
    auditPeriod: {
      start: "Jan 1, 2021",
      end: "Dec 31, 2021",
    },
  },
];

export const recommendedFrameworks: RecommendedFramework[] = [
  {
    id: "gdpr-rec",
    name: "GDPR",
    badgeKey: "gdpr",
    percentage: 75,
    percentageLabel: "Ready",
    segments: [
      { value: 30, color: "#3B82F6" },
      { value: 22, color: "#EC4899" },
      { value: 13, color: "#EAB308" },
      { value: 10, color: "#22D3EE" },
    ],
  },
];
