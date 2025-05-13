import "./globals.css"

export const metadata = {
  title: 'Hotel Horizon',
  description: 'Hotel management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
