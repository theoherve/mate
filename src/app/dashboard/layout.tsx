"use client"
import Sidebar from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    )
}
