import { getAllDocs } from "@/lib/docs"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function DocsIndex() {
    const docs = getAllDocs()

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {docs.map((doc) => (
                <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                    <Card className="h-full hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <CardTitle>{doc.title}</CardTitle>
                            <CardDescription>
                                Documentation for {doc.title} components.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
