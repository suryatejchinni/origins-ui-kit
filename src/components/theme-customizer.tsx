"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { useThemeContext } from "@/components/theme-context"
import { Paintbrush, Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ThemeCustomizer() {
    const { theme, setTheme, radius, setRadius, font, setFont, primaryColor, setPrimaryColor } = useThemeContext()
    const { setTheme: setMode, theme: mode } = useTheme()
    const { toast } = useToast()

    const copyToClipboard = () => {
        const code = `
/* Theme: ${theme} */
/* Font: ${font} */
:root {
  --radius: ${radius}rem;
  ${primaryColor ? `--primary: ${primaryColor};` : ""}
  ${primaryColor ? `--ring: ${primaryColor};` : ""}
}
`
        navigator.clipboard.writeText(code.trim())
        toast({
            title: "Copied to clipboard",
            description: "Theme CSS variables copied to clipboard.",
        })
    }

    const themes = [
        { name: "origins", label: "Origins (Violet)", color: "bg-zinc-950" },
        { name: "neo-saas", label: "Neo-SaaS", color: "bg-indigo-600" },
        { name: "calm", label: "Calm", color: "bg-stone-500" },
        { name: "enterprise", label: "Enterprise", color: "bg-slate-900" },
    ]

    const colors = [
        { name: "Teal", value: "170 50% 40%" },
        { name: "Indigo", value: "243 75% 59%" },
        { name: "Blue", value: "221 83% 53%" },
        { name: "Green", value: "142 76% 36%" },
        { name: "Orange", value: "24 94% 50%" },
        { name: "Red", value: "0 84% 60%" },
        { name: "Violet", value: "262 83% 58%" },
        { name: "Yellow", value: "47 95% 50%" },
        { name: "Rose", value: "346 87% 43%" },
    ]

    const radii = [0, 0.3, 0.5, 0.75, 1.0]

    const fonts = [
        { name: "inter", label: "Inter" },
        { name: "manrope", label: "Manrope" },
        { name: "jakarta", label: "Jakarta" },
    ]

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" className="h-12 w-12 rounded-full shadow-lg">
                        <Paintbrush className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px]">
                    <SheetHeader>
                        <SheetTitle>Theme Customizer</SheetTitle>
                        <SheetDescription>
                            Customize the look and feel of the UI kit.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="grid gap-6 py-6">
                        <div className="space-y-2">
                            <Label>Mode</Label>
                            <div className="flex gap-2">
                                <Button
                                    variant={mode === "light" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setMode("light")}
                                    className="w-full"
                                >
                                    <Sun className="mr-2 h-4 w-4" />
                                    Light
                                </Button>
                                <Button
                                    variant={mode === "dark" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setMode("dark")}
                                    className="w-full"
                                >
                                    <Moon className="mr-2 h-4 w-4" />
                                    Dark
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Theme Preset</Label>
                            <div className="grid grid-cols-2 gap-2">
                                {themes.map((t) => (
                                    <Button
                                        key={t.name}
                                        variant={"outline"}
                                        className={cn(
                                            "justify-start",
                                            theme === t.name && "border-primary border-2"
                                        )}
                                        onClick={() => setTheme(t.name as any)}
                                    >
                                        <span className={cn("mr-2 h-4 w-4 rounded-full", t.color)} />
                                        {t.label}
                                        {theme === t.name && <Check className="ml-auto h-4 w-4" />}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Primary Color</Label>
                            <div className="grid grid-cols-5 gap-2">
                                {colors.map((c) => (
                                    <Button
                                        key={c.name}
                                        variant={"outline"}
                                        size="icon"
                                        className={cn(
                                            "rounded-full",
                                            primaryColor === c.value && "border-primary border-2"
                                        )}
                                        onClick={() => setPrimaryColor(c.value)}
                                    >
                                        <span
                                            className="h-5 w-5 rounded-full"
                                            style={{ backgroundColor: `hsl(${c.value})` }}
                                        />
                                        <span className="sr-only">{c.name}</span>
                                    </Button>
                                ))}
                                <Button
                                    variant={"outline"}
                                    size="icon"
                                    className={cn(
                                        "rounded-full",
                                        primaryColor === "" && "border-primary border-2"
                                    )}
                                    onClick={() => setPrimaryColor("")}
                                >
                                    <span className="text-xs">Reset</span>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Radius</Label>
                            <div className="flex gap-2">
                                {radii.map((r) => (
                                    <Button
                                        key={r}
                                        variant={radius === r ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setRadius(r)}
                                        className="w-full"
                                    >
                                        {r}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Font</Label>
                            <div className="grid grid-cols-3 gap-2">
                                {fonts.map((f) => (
                                    <Button
                                        key={f.name}
                                        variant={font === f.name ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setFont(f.name as any)}
                                        className="w-full"
                                    >
                                        {f.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SheetFooter>
                        <Button className="w-full" onClick={copyToClipboard}>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy Code
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
