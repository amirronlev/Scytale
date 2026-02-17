"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuditCard } from "@/components/audit/audit-card";
import { RecommendedCard } from "@/components/audit/recommended-card";
import {
  activeFrameworks,
  recommendedFrameworks,
} from "@/components/audit/audit-data";

export default function AuditsPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="px-8 pt-8 pb-0">
        <h1 className="text-[26px] font-bold text-foreground leading-tight">
          Audit Management
        </h1>
        <p className="text-[14px] text-muted-foreground mt-1.5">
          Monitor your audit progress, access control evidence, and manage audit
          details.
        </p>
      </div>

      {/* Tabs */}
      <div className="px-8 pt-6">
        <Tabs defaultValue="active" className="w-full gap-0">
          <div className="border-b border-border">
            <TabsList variant="line" className="gap-1 pb-0 h-auto">
              <TabsTrigger
                value="active"
                className="text-[14px] font-medium px-1 pb-2.5 mr-4 data-[state=active]:text-foreground after:bg-primary data-[state=active]:font-semibold rounded-none data-[state=inactive]:text-muted-foreground"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="available"
                className="text-[14px] font-medium px-1 pb-2.5 data-[state=active]:text-foreground after:bg-primary data-[state=active]:font-semibold rounded-none data-[state=inactive]:text-muted-foreground"
              >
                Available
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="active" className="mt-6">
            {/* Cards container */}
            <div className="bg-slate-50/80 rounded-2xl p-6">
              {/* Active frameworks grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {activeFrameworks.map((framework) => (
                  <AuditCard key={framework.id} framework={framework} />
                ))}
              </div>

              {/* Recommended frameworks */}
              {recommendedFrameworks.length > 0 && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {recommendedFrameworks.map((framework) => (
                    <RecommendedCard
                      key={framework.id}
                      framework={framework}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <div className="bg-slate-50/80 rounded-2xl p-6">
              <div className="flex items-center justify-center py-16 text-muted-foreground text-sm">
                Available frameworks will be displayed here
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
