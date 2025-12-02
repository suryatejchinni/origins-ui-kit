import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Origins Tools UI Kit</h1>
        <p className="text-muted-foreground">
          This is the internal design system playground for prototyping and standardizing our tools.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/foundations">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Foundations</CardTitle>
              <CardDescription>Colors, typography, and spacing.</CardDescription>
            </CardHeader>
            <CardContent>
              Explore the core design tokens that make up our visual language.
            </CardContent>
          </Card>
        </Link>
        <Link href="/layout-examples">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Layout</CardTitle>
              <CardDescription>Page containers and sections.</CardDescription>
            </CardHeader>
            <CardContent>
              Common layout patterns for building consistent pages.
            </CardContent>
          </Card>
        </Link>
        <Link href="/forms">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Forms</CardTitle>
              <CardDescription>Input fields and validation.</CardDescription>
            </CardHeader>
            <CardContent>
              Form components built with react-hook-form and zod.
            </CardContent>
          </Card>
        </Link>
        <Link href="/data-display">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Data Display</CardTitle>
              <CardDescription>Cards, lists, and descriptions.</CardDescription>
            </CardHeader>
            <CardContent>
              Components for displaying data in various formats.
            </CardContent>
          </Card>
        </Link>
        <Link href="/data-tables">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Data Tables</CardTitle>
              <CardDescription>Advanced tables.</CardDescription>
            </CardHeader>
            <CardContent>
              Tables with sorting, filtering, and pagination.
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboards">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Dashboards</CardTitle>
              <CardDescription>Charts and stats.</CardDescription>
            </CardHeader>
            <CardContent>
              Visualizations using Tremor components.
            </CardContent>
          </Card>
        </Link>
        <Link href="/navigation">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Tabs, dialogs, and overlays.</CardDescription>
            </CardHeader>
            <CardContent>
              Components for navigation and overlay interactions.
            </CardContent>
          </Card>
        </Link>
        <Link href="/feedback">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
              <CardDescription>Toasts, alerts, and states.</CardDescription>
            </CardHeader>
            <CardContent>
              Components for user feedback and application states.
            </CardContent>
          </Card>
        </Link>
        <Link href="/utilities">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Utilities</CardTitle>
              <CardDescription>Helpers and tools.</CardDescription>
            </CardHeader>
            <CardContent>
              Helper components for common UI patterns.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
