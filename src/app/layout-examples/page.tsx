import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { PageSection } from "@/components/origins/layout/PageSection"
import { Plus } from "lucide-react"

export default function LayoutExamplesPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Layout Examples"
                description="Common page layouts and structural components."
                actions={
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Item
                    </Button>
                }
            />

            <PageSection title="Page Section" description="A standard section for grouping content.">
                <div className="h-32 rounded-md border border-dashed flex items-center justify-center text-muted-foreground">
                    Content goes here
                </div>
            </PageSection>

            <div className="grid gap-6 md:grid-cols-2">
                <PageSection title="Split Layout (Left)">
                    <div className="h-32 rounded-md border border-dashed flex items-center justify-center text-muted-foreground">
                        Left Column
                    </div>
                </PageSection>
                <PageSection title="Split Layout (Right)">
                    <div className="h-32 rounded-md border border-dashed flex items-center justify-center text-muted-foreground">
                        Right Column
                    </div>
                </PageSection>
            </div>

            <PageSection>
                <div className="h-32 rounded-md border border-dashed flex items-center justify-center text-muted-foreground">
                    Section without header
                </div>
            </PageSection>
        </PageContainer>
    )
}
