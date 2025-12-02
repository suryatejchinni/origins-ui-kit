import type { Metadata } from "next"
import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProviderWrapper } from "@/components/theme-context"
import { AppShell } from "@/components/origins/layout/AppShell"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })

export const metadata: Metadata = {
  title: "Origins Tools UI Kit",
  description: "Internal design system playground",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, manrope.variable, jakarta.variable, "font-sans antialiased")}>
        <ThemeProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppShell>{children}</AppShell>
            <ThemeCustomizer />
            <Toaster />
          </ThemeProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
