"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  ScytaleLogoIcon,
  DashboardIcon,
  ControlCenterIcon,
  AuditsIcon,
  PoliciesIcon,
  RisksIcon,
  TrainingIcon,
  UserAccessIcon,
  TrustCenterIcon,
  PenetrationTestsIcon,
  PeopleIcon,
  VendorsIcon,
  InventoryIcon,
  IntegrationIcon,
  GetHelpIcon,
  NotificationsIcon,
} from "@/components/icons/menu-icons";

const navSections = [
  {
    label: "Compliance",
    items: [
      { title: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
      { title: "Control Center", icon: ControlCenterIcon, href: "/control-center" },
      { title: "Audits", icon: AuditsIcon, href: "/audits" },
      { title: "Policies", icon: PoliciesIcon, href: "/policies" },
    ],
  },
  {
    label: "Risk",
    items: [
      { title: "Risks", icon: RisksIcon, href: "/risks" },
      { title: "Training", icon: TrainingIcon, href: "/training" },
      { title: "User Access", icon: UserAccessIcon, href: "/user-access" },
    ],
  },
  {
    label: "Trust",
    items: [
      { title: "Trust Center", icon: TrustCenterIcon, href: "/trust-center" },
      { title: "Penetration Tests", icon: PenetrationTestsIcon, href: "/penetration-tests" },
    ],
  },
  {
    label: "Assets",
    items: [
      { title: "People", icon: PeopleIcon, href: "/people" },
      { title: "Vendors", icon: VendorsIcon, href: "/vendors" },
      { title: "Inventory", icon: InventoryIcon, href: "/inventory" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-5 pt-6 pb-0 gap-0">
        {/* Logo */}
        <div className="flex items-center gap-[10px] mb-4">
          <ScytaleLogoIcon className="w-[21px] h-4" />
          <span className="text-[17px] font-semibold tracking-[-0.01em] text-foreground leading-none">
            scytale
          </span>
        </div>

        {/* Organization Selector */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-between text-sidebar-foreground font-normal text-[14px] h-9 px-0">
              <span>CloudGuard X</span>
              <ChevronDown className="!h-4 !w-4 text-muted-foreground" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Notifications */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-between text-sidebar-foreground font-normal text-[14px] h-9 px-0">
              <div className="flex items-center gap-3">
                <NotificationsIcon className="!w-5 !h-5 text-gray-600" />
                <span>Notifications</span>
              </div>
              <Badge className="bg-primary text-primary-foreground rounded-full h-[22px] min-w-[22px] flex items-center justify-center text-[11px] font-medium px-1.5 leading-none">
                8
              </Badge>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <div className="px-5 pt-1.5"><div className="h-px bg-border" /></div>

      <SidebarContent className="px-5 pt-0 gap-0">
        {navSections.map((section) => (
          <NavSection key={section.label} label={section.label} items={section.items} />
        ))}
      </SidebarContent>

      <div className="px-5"><div className="h-px bg-border" /></div>

      <SidebarFooter className="px-5 pb-4 pt-0 gap-0">
        {/* Integrations */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-full text-primary font-normal text-[14px] h-[34px] px-3 rounded-lg bg-accent hover:bg-accent hover:!text-primary"
            >
              <div className="flex items-center gap-3 flex-1">
                <IntegrationIcon className="!w-5 !h-5 text-primary" />
                <span>Integrations</span>
              </div>
              <span className="h-[10px] w-[10px] rounded-full bg-rose-400" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Resources */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-sidebar-foreground font-normal text-[14px] h-[34px] px-0">
              <div className="flex items-center gap-3">
                <GetHelpIcon className="!w-5 !h-5 text-gray-600" />
                <span>Resources</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* User Profile */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full h-auto py-2.5 px-0 text-[14px]">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Avatar className="h-[32px] w-[32px] shrink-0">
                  <AvatarFallback className="bg-primary text-primary-foreground text-[11px] font-medium">
                    CN
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 gap-0.5">
                  <span className="font-medium text-sidebar-foreground text-[14px] leading-tight truncate">shadcn</span>
                  <span className="text-muted-foreground text-[12px] leading-tight truncate">m@example.com</span>
                </div>
              </div>
              <ChevronRight className="!h-4 !w-4 text-muted-foreground shrink-0" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function NavSection({
  label,
  items,
}: {
  label: string;
  items: { title: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; href: string }[];
}) {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup className="py-0 px-0 gap-0">
        <SidebarGroupLabel asChild className="h-auto px-0 py-0 text-sidebar-foreground/50">
          <CollapsibleTrigger className="flex w-full items-center justify-between pt-3 pb-1.5 text-[12px] font-normal text-muted-foreground tracking-normal hover:text-foreground transition-colors capitalize">
            {label}
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=closed]/collapsible:-rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-[34px] text-[14px] font-normal text-sidebar-foreground px-0">
                    <a href={item.href}>
                      <item.icon className="!w-5 !h-5 text-gray-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
