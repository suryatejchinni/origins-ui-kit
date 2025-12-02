import { getDocBySlug, getAllDocs } from "@/lib/docs"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const docs = getAllDocs()
    return docs.map((doc) => ({
        slug: doc.slug,
    }))
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const doc = getDocBySlug(slug)

    if (!doc) {
        notFound()
    }

    return (
        <div className="prose prose-zinc dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {doc.content}
            </ReactMarkdown>
        </div>
    )
}
