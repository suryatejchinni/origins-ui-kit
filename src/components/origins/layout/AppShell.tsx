import { Sidebar } from "@/components/origins/navigation/Sidebar"
import { Topbar } from "@/components/origins/layout/Topbar"

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <div className="hidden md:flex">
                <Sidebar />
            </div>
            <div className="flex flex-1 flex-col overflow-hidden">
                <Topbar />
                <main className="flex-1 overflow-y-auto bg-muted/10 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
