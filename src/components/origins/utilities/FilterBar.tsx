import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"

export function FilterBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex items-center gap-2" {...props}>
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 w-full md:w-[300px]"
                />
            </div>
            <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
            </Button>
        </div>
    )
}
