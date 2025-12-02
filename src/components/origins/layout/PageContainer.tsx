import { cn } from "@/lib/utils"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export function PageContainer({ className, children, ...props }: PageContainerProps) {
    return (
        <div className={cn("container mx-auto max-w-7xl space-y-8", className)} {...props}>
            {children}
        </div>
    )
}
