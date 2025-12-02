"use client"

import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { PageSection } from "@/components/origins/layout/PageSection"
import { FilterBar } from "@/components/origins/utilities/FilterBar"
import { TagList } from "@/components/origins/utilities/TagList"
import { KebabMenu } from "@/components/origins/utilities/KebabMenu"
import { InlineEdit } from "@/components/origins/utilities/InlineEdit"

export default function UtilitiesPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Utilities"
                description="Helper components for common UI patterns."
            />

            <PageSection title="Filter Bar">
                <FilterBar />
            </PageSection>

            <PageSection title="Tag List">
                <TagList tags={["React", "Next.js", "Tailwind CSS", "TypeScript"]} />
            </PageSection>

            <PageSection title="Kebab Menu">
                <div className="flex items-center gap-4 border p-4 rounded-md">
                    <span className="flex-1">Row Item</span>
                    <KebabMenu />
                </div>
            </PageSection>

            <PageSection title="Inline Edit">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Project Name:</span>
                    <InlineEdit defaultValue="Origins UI Kit" onSave={(val) => console.log(val)} />
                </div>
            </PageSection>
        </PageContainer>
    )
}
