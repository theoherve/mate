import Sidebar from "./Sidebar"
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className={cn("flex-1 flex flex-col", isMobile && "w-full")}>
        <Header />
        <main className="flex-1 overflow-auto p-6 ml-64">{children}</main>
      </div>
    </div>
  );
}
