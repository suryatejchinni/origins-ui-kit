"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileSidebar } from "@/components/origins/navigation/MobileSidebar"

export function Topbar() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <MobileSidebar />
            <div className="flex-1">
                <h1 className="text-lg font-semibold">Origins Tools UI Kit</h1>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
