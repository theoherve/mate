"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard")
        } else if (status === "unauthenticated") {
            router.push("/auth/signin")
        }
    }, [status, router])

    if (status === "loading") {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                    <h1 className="text-4xl font-bold">Loading...</h1>
                </div>
            </main>
        )
    }

    return null
} 