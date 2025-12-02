import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const colors = [
    { name: "Primary", class: "bg-primary", text: "text-primary-foreground" },
    { name: "Secondary", class: "bg-secondary", text: "text-secondary-foreground" },
    { name: "Muted", class: "bg-muted", text: "text-muted-foreground" },
    { name: "Accent", class: "bg-accent", text: "text-accent-foreground" },
    { name: "Destructive", class: "bg-destructive", text: "text-destructive-foreground" },
    { name: "Background", class: "bg-background", text: "text-foreground", border: "border" },
    { name: "Card", class: "bg-card", text: "text-card-foreground", border: "border" },
    { name: "Popover", class: "bg-popover", text: "text-popover-foreground", border: "border" },
]

export function ColorPalette() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
                <Card key={color.name} className="overflow-hidden">
                    <div className={`h-24 w-full ${color.class} ${color.border ? "border-b" : ""}`} />
                    <CardHeader className="p-4">
                        <CardTitle className="text-base">{color.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className={`h-4 w-4 rounded ${color.class} border`} />
                                <span>Background</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <div className={`h-4 w-4 rounded ${color.text.replace("text-", "bg-")} border`} />
                                <span>Foreground</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
