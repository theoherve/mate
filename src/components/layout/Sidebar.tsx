import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Calendar, 
  CreditCard, 
  Gauge, 
  Hotel, 
  LayoutDashboard, 
  Map, 
  Settings, 
  TrendingUp, 
  Users 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type SidebarItem = {
  title: string;
  icon: React.ElementType;
  path: string;
  active?: boolean;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Occupation",
    icon: Hotel,
    path: "/occupation",
  },
  {
    title: "Pricing",
    icon: CreditCard,
    path: "/pricing",
  },
  {
    title: "Competitors",
    icon: TrendingUp,
    path: "/competitors",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Forecast",
    icon: Gauge,
    path: "/forecast",
  },
  {
    title: "Calendar",
    icon: Calendar,
    path: "/calendar",
  },
  {
    title: "Local Events",
    icon: Map,
    path: "/events",
  },
  {
    title: "Team",
    icon: Users,
    path: "/team",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export function Sidebar() {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Sur mobile, on affiche pas la sidebar mais un menu burger
  if (isMobile) return null;

  return (
    <div className={cn(
      "h-screen bg-hotel-background border-r border-gray-200 transition-all duration-300 flex flex-col fixed",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <h1 className="text-xl font-bold text-hotel-primary flex items-center">
            <Hotel className="mr-2" /> 
            <span>Hotel Horizon</span>
          </h1>
        )}
        {collapsed && (
          <Hotel className="mx-auto text-hotel-primary" size={28} />
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleSidebar}
          className={cn("text-gray-500 hover:text-gray-700", collapsed && "mx-auto")}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>

      <div className="flex-1 py-6">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={cn(
                "flex items-center py-3 px-3 rounded-md transition-colors",
                item.path === window.location.pathname
                  ? "bg-hotel-primary/10 text-hotel-primary"
                  : "text-gray-700 hover:bg-hotel-primary/5 hover:text-hotel-primary",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon size={20} className={collapsed ? "" : "mr-3"} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "space-x-3"
        )}>
          <div className="bg-gradient-to-r from-hotel-primary to-hotel-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            HH
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Hotel Horizon</p>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
