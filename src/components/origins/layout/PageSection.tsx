import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
}

export function PageSection({ title, description, children, className, ...props }: PageSectionProps) {
    if (!title) {
        return (
            <Card className={className} {...props}>
                <CardContent className="p-6">{children}</CardContent>
            </Card>
        )
    }

    return (
        <Card className={className} {...props}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    )
}
