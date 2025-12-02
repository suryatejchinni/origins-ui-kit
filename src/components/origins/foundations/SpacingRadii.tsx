import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SpacingRadii() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Border Radius</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-primary rounded-none flex items-center justify-center text-primary-foreground text-xs">none</div>
                        <div className="h-16 w-16 bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-xs">sm</div>
                        <div className="h-16 w-16 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs">default</div>
                        <div className="h-16 w-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">md</div>
                        <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">lg</div>
                        <div className="h-16 w-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-xs">xl</div>
                        <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground text-xs">2xl</div>
                        <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">full</div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Spacing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary" />
                        <span className="text-sm">w-4 h-4 (1rem / 16px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary" />
                        <span className="text-sm">w-6 h-6 (1.5rem / 24px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary" />
                        <span className="text-sm">w-8 h-8 (2rem / 32px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-primary" />
                        <span className="text-sm">w-12 h-12 (3rem / 48px)</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
