import { cn } from "@/lib/utils"
import { FileQuestion } from "lucide-react"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    action?: React.ReactNode
    icon?: React.ReactNode
}

export function EmptyState({ title, description, action, icon, className, ...props }: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center p-8 text-center border rounded-lg border-dashed", className)} {...props}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                {icon || <FileQuestion className="h-10 w-10 text-muted-foreground" />}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-sm">{description}</p>
            {action}
        </div>
    )
}
