"use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export function Header() {
    const { data: session } = useSession()

    return (
        <header className="border-b bg-white">
            <div className="flex h-16 items-center px-4">
                <div className="ml-auto flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                        {session?.user?.name}
                    </span>
                    <Button
                        variant="ghost"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </header>
    )
}
