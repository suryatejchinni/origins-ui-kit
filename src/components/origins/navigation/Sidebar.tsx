"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Palette,
    Layout,
    FormInput,
    Database,
    Table,
    BarChart3,
    Navigation,
    MessageSquare,
    Wrench,
    Play,
    BookOpen,
} from "lucide-react"

export const navItems = [
    {
        title: "Foundations",
        href: "/foundations",
        icon: Palette,
    },
    {
        title: "Playground",
        href: "/playground",
        icon: Play,
    },
    {
        title: "Layout",
        href: "/layout-examples",
        icon: Layout,
    },
    {
        title: "Forms",
        href: "/forms",
        icon: FormInput,
    },
    {
        title: "Data Display",
        href: "/data-display",
        icon: Database,
    },
    {
        title: "Data Tables",
        href: "/data-tables",
        icon: Table,
    },
    {
        title: "Dashboards & Charts",
        href: "/dashboards",
        icon: BarChart3,
    },
    {
        title: "Navigation & Overlays",
        href: "/navigation",
        icon: Navigation,
    },
    {
        title: "Feedback & States",
        href: "/feedback",
        icon: MessageSquare,
    },
    {
        title: "Utilities",
        href: "/utilities",
        icon: Wrench,
    },
    {
        title: "Documentation",
        href: "/docs",
        icon: BookOpen,
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
            <div className="flex h-14 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <LayoutDashboard className="h-6 w-6 text-primary" />
                    <span>Origins UI</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                pathname === item.href
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}
