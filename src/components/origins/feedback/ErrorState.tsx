import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ErrorStateProps {
    title?: string
    description?: string
    onRetry?: () => void
}

export function ErrorState({ title = "Something went wrong", description = "Please try again later.", onRetry }: ErrorStateProps) {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription className="flex items-center justify-between mt-2">
                <span>{description}</span>
                {onRetry && <Button variant="outline" size="sm" onClick={onRetry} className="ml-4 bg-background text-foreground hover:bg-accent border-destructive/20">Retry</Button>}
            </AlertDescription>
        </Alert>
    )
}
