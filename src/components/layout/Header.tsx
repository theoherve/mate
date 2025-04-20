"use client"

import { useSession } from "next-auth/react"
import { Bell, HelpCircle, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/helpers";
import { UserMenu } from "./UserMenu";
import { useUserStore } from "@/store/user-store";
import { useEffect } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export function Header() {
  const isMobile = useIsMobile();
  const { data: session } = useSession()
  const { name, setUser } = useUserStore()
  const { setIsOpen, isSidebarCollapsed } = useMobileMenu();

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name || "",
        email: session.user.email || "",
      })
    }
  }, [session, setUser])

  // En mobile, on rend le header avec le menu burger
  if (isMobile) {
    return (
      <header className="h-16 border-b border-gray-200 bg-white px-4 fixed top-0 left-0 right-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-500"
            onClick={() => setIsOpen(true)}
          >
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
          <div className="relative w-full">
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
          <div className="ml-4">
            <UserMenu 
              name={name || session?.user?.name} 
              initials={getInitials(name || session?.user?.name)} 
            />
          </div>
        </div>
      </header>
    );
  }

  // En desktop, on rend le header normal
  return (
    <header className={cn(
      "h-16 border-b border-gray-200 bg-white px-4 flex items-center justify-between transition-all duration-300",
      isSidebarCollapsed ? "ml-20" : "ml-64"
    )}>
      <div className="flex items-center gap-2">
        <div className="relative w-80">
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
        <div className="ml-4">
          <UserMenu 
            name={name || session?.user?.name} 
            initials={getInitials(name || session?.user?.name)} 
          />
        </div>
      </div>
    </header>
  );
}
