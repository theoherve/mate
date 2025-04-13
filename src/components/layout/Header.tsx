import { Bell, HelpCircle, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className={cn(
      "h-16 border-b border-gray-200 bg-white px-4 ml-64 flex items-center justify-between",
      isMobile && "px-2"
    )}>
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button variant="ghost" size="icon" className="text-gray-500">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        )}
        <div className={cn(
          "relative",
          isMobile ? "w-full" : "w-80"
        )}>
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-9 h-9 focus-visible:ring-hotel-primary" 
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <HelpCircle size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Settings size={20} />
        </Button>
        <div className="ml-4 flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-hotel-primary to-hotel-secondary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          {!isMobile && (
            <div className="ml-2">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
