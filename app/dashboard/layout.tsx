import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { Providers } from "@/components/providers/Providers"
import { PageLayout } from "@/components/layout/PageLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Hotel Horizon",
    description: "Hotel management system",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <PageLayout>
                        {children}
                    </PageLayout>
                </Providers>
            </body>
        </html>
    )
} 