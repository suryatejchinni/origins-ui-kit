"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LayoutDashboard } from "lucide-react"
import { navItems } from "./Sidebar"
import { useState } from "react"

export function MobileSidebar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
                <div className="flex h-full flex-col bg-card text-card-foreground">
                    <div className="flex h-14 items-center border-b px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
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
                                    onClick={() => setOpen(false)}
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
            </SheetContent>
        </Sheet>
    )
}
