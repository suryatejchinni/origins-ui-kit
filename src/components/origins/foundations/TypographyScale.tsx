import { Card, CardContent } from "@/components/ui/card"

export function TypographyScale() {
    return (
        <Card>
            <CardContent className="space-y-8 p-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Heading 1
                    </h1>
                    <p className="text-sm text-muted-foreground">text-4xl font-extrabold tracking-tight lg:text-5xl</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
                        Heading 2
                    </h2>
                    <p className="text-sm text-muted-foreground">text-3xl font-semibold tracking-tight</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Heading 3
                    </h3>
                    <p className="text-sm text-muted-foreground">text-2xl font-semibold tracking-tight</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold tracking-tight">
                        Heading 4
                    </h4>
                    <p className="text-sm text-muted-foreground">text-xl font-semibold tracking-tight</p>
                </div>
                <div className="space-y-2">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
                    </p>
                    <p className="text-sm text-muted-foreground">p leading-7</p>
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium leading-none">Small text</p>
                    <p className="text-sm text-muted-foreground">text-sm font-medium leading-none</p>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Muted text</p>
                    <p className="text-sm text-muted-foreground">text-sm text-muted-foreground</p>
                </div>
            </CardContent>
        </Card>
    )
}
