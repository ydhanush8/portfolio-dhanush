import type React from "react"
import { Suspense } from "react"
import Header from "@/components/header"
import Loading from "@/components/loading"

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Y Dhanush. All rights reserved.
      </footer>
    </Suspense>
  )
}
