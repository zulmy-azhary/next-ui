import React from "react"

import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <section className="flex-1">{children}</section>
      <TailwindIndicator />
    </main>
  )
}
