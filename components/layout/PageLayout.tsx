"use client";

import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { Header } from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { isSidebarCollapsed } = useMobileMenu();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className={cn(
          "flex-1 overflow-auto p-6 transition-all duration-300",
          "mt-16 md:mt-0",
          isSidebarCollapsed ? "md:ml-20" : "md:ml-64"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
} 
