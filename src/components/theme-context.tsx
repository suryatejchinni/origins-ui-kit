"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "origins" | "neo-saas" | "calm" | "enterprise"
type Font = "inter" | "manrope" | "jakarta"

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    radius: number
    setRadius: (radius: number) => void
    font: Font
    setFont: (font: Font) => void
    primaryColor: string
    setPrimaryColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("neo-saas")
    const [radius, setRadius] = useState<number>(0.5)
    const [font, setFont] = useState<Font>("inter")
    const [primaryColor, setPrimaryColor] = useState<string>("221 83% 53%")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("origins-ui-theme") as Theme
        const savedRadius = localStorage.getItem("origins-ui-radius")
        const savedFont = localStorage.getItem("origins-ui-font") as Font
        const savedPrimary = localStorage.getItem("origins-ui-primary")

        if (savedTheme) setTheme(savedTheme)
        if (savedRadius) setRadius(parseFloat(savedRadius))
        if (savedFont) setFont(savedFont)
        if (savedPrimary) setPrimaryColor(savedPrimary)
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
        document.documentElement.setAttribute("data-theme", theme)
        document.documentElement.style.setProperty("--radius", `${radius}rem`)
        document.documentElement.setAttribute("data-font", font)

        if (primaryColor) {
            const [h, s, l] = primaryColor.split(" ")
            document.documentElement.style.setProperty("--primary", primaryColor)
            document.documentElement.style.setProperty("--ring", primaryColor)
        } else {
            document.documentElement.style.removeProperty("--primary")
            document.documentElement.style.removeProperty("--ring")
        }

        localStorage.setItem("origins-ui-theme", theme)
        localStorage.setItem("origins-ui-radius", radius.toString())
        localStorage.setItem("origins-ui-font", font)
        localStorage.setItem("origins-ui-primary", primaryColor)
    }, [theme, radius, font, primaryColor, mounted])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, radius, setRadius, font, setFont, primaryColor, setPrimaryColor }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useThemeContext must be used within a ThemeProviderWrapper")
    }
    return context
}
