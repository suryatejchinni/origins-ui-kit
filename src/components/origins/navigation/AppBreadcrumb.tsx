"use client"

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { navItems } from "@/components/origins/navigation/Sidebar"
import React from "react"

export function AppBreadcrumb() {
    const pathname = usePathname()

    // Don't show breadcrumbs on home page
    if (pathname === "/") return null

    const getBreadcrumbTitle = (path: string) => {
        const item = navItems.find((item) => item.href === path)
        if (item) return item.title

        // Fallback for sub-paths or unknown paths
        const segment = path.split("/").pop()
        return segment ? segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ") : "Unknown"
    }

    // Generate breadcrumb items based on path segments
    // For now, we'll keep it simple and just show Home > Current Page
    // Since our nav structure is flat, this works for most cases.
    // If we had nested routes, we'd need to build up the path segments.

    const currentTitle = getBreadcrumbTitle(pathname)

    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentTitle}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
