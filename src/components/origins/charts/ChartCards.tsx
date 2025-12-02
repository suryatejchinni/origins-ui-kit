"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, BarChart, DonutChart } from "@tremor/react"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

interface StatsCardProps {
    /** The title of the statistic. */
    title: string
    /** The main value to display. */
    value: string
    /** A secondary text indicating change (e.g., "+20%"). */
    change?: string
    /** Displays an arrow icon indicating the trend direction. */
    trend?: "up" | "down" | "neutral"
    /** A custom icon to display in the top right. */
    icon?: React.ElementType
}

/**
 * A card component for displaying a single statistic with an optional trend indicator or icon.
 */
export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : (
                    <>
                        {trend === "up" && <ArrowUpRight className="h-4 w-4 text-emerald-500" />}
                        {trend === "down" && <ArrowDownRight className="h-4 w-4 text-rose-500" />}
                        {trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
                    </>
                )}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {change && (
                    <p className="text-xs text-muted-foreground">
                        {change}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}

interface ChartCardProps {
    /** The title of the chart card. */
    title: string
    /** A description for the chart. */
    description?: string
    /** The data array for the chart. */
    data: any[]
    /** The key in the data objects to use for the x-axis. */
    index: string
    /** The keys in the data objects to use for the lines/bars. */
    categories: string[]
    /** Array of colors for the chart elements. */
    colors?: string[]
    /** Function to format the values on the y-axis and tooltip. */
    valueFormatter?: (number: number) => string
}

/**
 * A card containing a line chart, useful for showing trends over time.
 */
export function LineChartCard({ title, description, data, index, categories, colors, valueFormatter }: ChartCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <LineChart
                    className="h-[350px]"
                    data={data}
                    index={index}
                    categories={categories}
                    colors={colors}
                    valueFormatter={valueFormatter}
                    yAxisWidth={40}
                />
            </CardContent>
        </Card>
    )
}

/**
 * A card containing a bar chart, useful for comparing categorical data.
 */
export function BarChartCard({ title, description, data, index, categories, colors, valueFormatter }: ChartCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <BarChart
                    className="h-[350px]"
                    data={data}
                    index={index}
                    categories={categories}
                    colors={colors}
                    valueFormatter={valueFormatter}
                    yAxisWidth={48}
                />
            </CardContent>
        </Card>
    )
}

/**
 * A card containing a donut chart, useful for showing proportional data.
 */
export function DonutChartCard({ title, description, data, index, categories, colors, valueFormatter }: any) {
    // DonutChart props are slightly different
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <DonutChart
                    className="h-[350px]"
                    data={data}
                    category={categories[0]} // Donut usually takes one category for value
                    index={index}
                    colors={colors}
                    valueFormatter={valueFormatter}
                />
            </CardContent>
        </Card>
    )
}
