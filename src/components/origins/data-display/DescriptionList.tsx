import { cn } from "@/lib/utils"

export function DescriptionList({ className, children, ...props }: React.HTMLAttributes<HTMLDListElement>) {
    return (
        <dl className={cn("grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2", className)} {...props}>
            {children}
        </dl>
    )
}

export function DescriptionTerm({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <dt className={cn("text-sm font-medium text-muted-foreground", className)} {...props}>
            {children}
        </dt>
    )
}

export function DescriptionDetails({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <dd className={cn("mt-1 text-sm text-foreground break-words", className)} {...props}>
            {children}
        </dd>
    )
}
