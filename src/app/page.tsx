import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
        <Card>
          <CardHeader>
            <CardTitle>Foundations</CardTitle>
            <CardDescription>Colors, typography, and spacing.</CardDescription>
          </CardHeader>
          <CardContent>
            Explore the core design tokens that make up our visual language.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Layout</CardTitle>
            <CardDescription>Page containers and sections.</CardDescription>
          </CardHeader>
          <CardContent>
            Common layout patterns for building consistent pages.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Forms</CardTitle>
            <CardDescription>Input fields and validation.</CardDescription>
          </CardHeader>
          <CardContent>
            Form components built with react-hook-form and zod.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Display</CardTitle>
            <CardDescription>Cards, lists, and descriptions.</CardDescription>
          </CardHeader>
          <CardContent>
            Components for displaying data in various formats.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Tables</CardTitle>
            <CardDescription>Advanced tables.</CardDescription>
          </CardHeader>
          <CardContent>
            Tables with sorting, filtering, and pagination.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dashboards</CardTitle>
            <CardDescription>Charts and stats.</CardDescription>
          </CardHeader>
          <CardContent>
            Visualizations using Tremor components.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
            <CardDescription>Tabs, dialogs, and overlays.</CardDescription>
          </CardHeader>
          <CardContent>
            Components for navigation and overlay interactions.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Toasts, alerts, and states.</CardDescription>
          </CardHeader>
          <CardContent>
            Components for user feedback and application states.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Utilities</CardTitle>
            <CardDescription>Helpers and tools.</CardDescription>
          </CardHeader>
          <CardContent>
            Helper components for common UI patterns.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
