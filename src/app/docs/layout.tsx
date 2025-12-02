import { getAllDocs } from "@/lib/docs"
import Link from "next/link"
import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { Button } from "@/components/ui/button"


export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const docs = getAllDocs()

    return (
        <PageContainer>
            <PageHeader
                title="Documentation"
                description="Reference documentation for Origins UI Kit components."
            />
            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-20">
                        <h3 className="font-semibold mb-4 text-lg">Components</h3>
                        <nav className="flex flex-col space-y-1">
                            {docs.map((doc) => (
                                <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        {doc.title}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>
                <main className="flex-1 min-w-0">
                    {children}
                </main>
            </div>
        </PageContainer>
    )
}
