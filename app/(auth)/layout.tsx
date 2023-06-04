import React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  )
}
