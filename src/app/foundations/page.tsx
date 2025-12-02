import { ColorPalette } from "@/components/origins/foundations/ColorPalette"
import { TypographyScale } from "@/components/origins/foundations/TypographyScale"
import { SpacingRadii } from "@/components/origins/foundations/SpacingRadii"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FoundationsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Foundations</h1>
                <p className="text-muted-foreground">
                    The core design tokens that make up the visual language of Origins Tools.
                </p>
            </div>

            <Tabs defaultValue="colors" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="typography">Typography</TabsTrigger>
                    <TabsTrigger value="spacing">Spacing & Radii</TabsTrigger>
                </TabsList>
                <TabsContent value="colors" className="space-y-4">
                    <ColorPalette />
                </TabsContent>
                <TabsContent value="typography" className="space-y-4">
                    <TypographyScale />
                </TabsContent>
                <TabsContent value="spacing" className="space-y-4">
                    <SpacingRadii />
                </TabsContent>
            </Tabs>
        </div>
    )
}
