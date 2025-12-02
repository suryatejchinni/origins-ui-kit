"use client"

import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { PageSection } from "@/components/origins/layout/PageSection"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Waves } from "lucide-react"
import { EmptyState } from "@/components/origins/feedback/EmptyState"
import { LoadingState } from "@/components/origins/feedback/LoadingState"
import { ErrorState } from "@/components/origins/feedback/ErrorState"

export default function FeedbackPage() {
    const { toast } = useToast()

    return (
        <PageContainer>
            <PageHeader
                title="Feedback & States"
                description="Components for user feedback and application states."
            />

            <PageSection title="Toasts">
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                title: "Scheduled: Catch up ",
                                description: "Friday, February 10, 2023 at 5:57 PM",
                            })
                        }}
                    >
                        Show Toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                variant: "destructive",
                                title: "Uh oh! Something went wrong.",
                                description: "There was a problem with your request.",
                            })
                        }}
                    >
                        Show Error Toast
                    </Button>
                </div>
            </PageSection>

            <PageSection title="Alerts">
                <div className="space-y-4">
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
                </div>
            </PageSection>

            <div className="grid gap-6 md:grid-cols-2">
                <PageSection title="Empty State">
                    <EmptyState
                        title="No projects found"
                        description="You haven't created any projects yet. Start by creating a new one."
                        action={<Button>Create Project</Button>}
                    />
                </PageSection>

                <PageSection title="Loading State">
                    <LoadingState />
                </PageSection>
            </div>

            <PageSection title="Error State">
                <ErrorState
                    onRetry={() => alert("Retrying...")}
                />
            </PageSection>

            <Toaster />
        </PageContainer>
    )
}
