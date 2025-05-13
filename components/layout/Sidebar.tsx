"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

import { 
  LayoutDashboard, 
  User, 
  Settings, 
  Hotel,
  CreditCard,
  TrendingUp,
  BarChart3,
  Gauge,
  Calendar,
  Map,
  Users,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type NavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Occupation", href: "/dashboard/occupation", icon: Hotel },
  { name: "Pricing", href: "/dashboard/pricing", icon: CreditCard },
  { name: "competitors", href: "/dashboard/competitors", icon: TrendingUp },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Forecast", href: "/dashboard/forecast", icon: Gauge },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Local Events", href: "/dashboard/events", icon: Map },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const isMobile = useIsMobile();
  const { isOpen, setIsOpen, isSidebarCollapsed, toggleSidebar } = useMobileMenu();
  const pathname = usePathname();

  const sidebarContent = (
    <>
      <div className="p-4 flex items-center justify-between">
        {!isSidebarCollapsed && (
          <h1 className="text-xl font-bold text-hotel-primary flex items-center">
            <Hotel className="mr-2" /> 
            <span>Hotel Horizon</span>
          </h1>
        )}
        {isSidebarCollapsed && (
          <Hotel className="mx-auto text-hotel-primary" size={28} />
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={isMobile ? () => setIsOpen(false) : toggleSidebar}
          className={cn("text-gray-500 hover:text-gray-700", isSidebarCollapsed && "mx-auto")}
        >
          {isMobile ? <ArrowLeft /> : (isSidebarCollapsed ? <ArrowRight /> : <ArrowLeft />)}
        </Button>
      </div>

      <div className="flex-1 py-6">
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-2">
            {navigation.map((item: NavigationItem) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-hotel-primary/10 text-hotel-primary"
                        : "text-gray-600 hover:bg-gray-50",
                      isSidebarCollapsed && "justify-center"
                    )}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <item.icon className={cn(
                      "w-5 h-5",
                      !isSidebarCollapsed && "mr-3"
                    )} />
                    {!isSidebarCollapsed && item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "flex items-center",
          isSidebarCollapsed ? "justify-center" : "space-x-3"
        )}>
          <div className="bg-gradient-to-r from-hotel-primary to-hotel-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            HH
          </div>
          {!isSidebarCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Hotel Horizon</p>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (isMobile) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50">
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setIsOpen(false)}
        />
        <div className="absolute left-0 top-0 h-full w-64 bg-hotel-background border-r border-gray-200">
          {sidebarContent}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "h-screen bg-hotel-background border-r border-gray-200 transition-all duration-300 flex flex-col fixed",
      isSidebarCollapsed ? "w-20" : "w-64"
    )}>
      {sidebarContent}
    </div>
  );
}
