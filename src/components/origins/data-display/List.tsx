import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description?: string
    avatar?: string
    icon?: React.ReactNode
    actions?: React.ReactNode
}

export function ListItem({ title, description, avatar, icon, actions, className, ...props }: ListItemProps) {
    return (
        <div className={cn("flex items-center gap-4 py-4", className)} {...props}>
            {(avatar || icon) && (
                <div className="flex-shrink-0">
                    {avatar ? (
                        <Avatar>
                            <AvatarImage src={avatar} alt={title} />
                            <AvatarFallback>{title.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            {icon}
                        </div>
                    )}
                </div>
            )}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none">{title}</p>
                {description && <p className="text-sm text-muted-foreground mt-1 truncate">{description}</p>}
            </div>
            {actions && <div className="flex-shrink-0">{actions}</div>}
        </div>
    )
}

export function List({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("divide-y", className)} {...props}>
            {children}
        </div>
    )
}
