import fs from "fs"
import path from "path"
import matter from "gray-matter"

const docsDirectory = path.join(process.cwd(), "docs/reference")

export interface Doc {
    slug: string
    title: string
    content: string
}

export function getAllDocs(): Doc[] {
    const fileNames = fs.readdirSync(docsDirectory)
    const allDocs = fileNames.filter(fileName => fileName.endsWith(".md")).map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(docsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Extract title from h1 if not in frontmatter
        let title = data.title
        if (!title) {
            const h1Match = content.match(/^#\s+(.+)$/m)
            if (h1Match) {
                title = h1Match[1]
            } else {
                title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
            }
        }

        return {
            slug,
            title,
            content,
        }
    })

    return allDocs
}

export function getDocBySlug(slug: string): Doc | null {
    try {
        const fullPath = path.join(docsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        let title = data.title
        if (!title) {
            const h1Match = content.match(/^#\s+(.+)$/m)
            if (h1Match) {
                title = h1Match[1]
            } else {
                title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
            }
        }

        return {
            slug,
            title,
            content,
        }
    } catch (e) {
        return null
    }
}
