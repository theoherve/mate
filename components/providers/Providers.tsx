"use client";

import { SessionProvider } from "next-auth/react";
import { MobileMenuProvider } from "@/components/contexts/MobileMenuContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <MobileMenuProvider>
        {children}
      </MobileMenuProvider>
    </SessionProvider>
  );
}
