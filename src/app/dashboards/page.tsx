"use client"

import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { StatsCard, LineChartCard, BarChartCard, DonutChartCard } from "@/components/origins/charts/ChartCards"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"

const chartdata = [
    {
        date: "Jan 22",
        SemiAnalysis: 2890,
        "The Pragmatic Engineer": 2338,
    },
    {
        date: "Feb 22",
        SemiAnalysis: 2756,
        "The Pragmatic Engineer": 2103,
    },
    {
        date: "Mar 22",
        SemiAnalysis: 3322,
        "The Pragmatic Engineer": 2194,
    },
    {
        date: "Apr 22",
        SemiAnalysis: 3470,
        "The Pragmatic Engineer": 2108,
    },
    {
        date: "May 22",
        SemiAnalysis: 3475,
        "The Pragmatic Engineer": 1812,
    },
    {
        date: "Jun 22",
        SemiAnalysis: 3129,
        "The Pragmatic Engineer": 1726,
    },
]

const salesData = [
    {
        name: "New York",
        sales: 9800,
    },
    {
        name: "London",
        sales: 4567,
    },
    {
        name: "Hong Kong",
        sales: 3908,
    },
    {
        name: "San Francisco",
        sales: 2400,
    },
    {
        name: "Singapore",
        sales: 1908,
    },
]

const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`

export default function DashboardsPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Dashboards"
                description="Example dashboard layouts with charts and stats."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Revenue"
                    value="$45,231.89"
                    change="+20.1% from last month"
                    trend="up"
                    icon={DollarSign}
                />
                <StatsCard
                    title="Subscriptions"
                    value="+2350"
                    change="+180.1% from last month"
                    trend="up"
                    icon={Users}
                />
                <StatsCard
                    title="Sales"
                    value="+12,234"
                    change="+19% from last month"
                    trend="up"
                    icon={CreditCard}
                />
                <StatsCard
                    title="Active Now"
                    value="+573"
                    change="+201 since last hour"
                    trend="up"
                    icon={Activity}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <LineChartCard
                        title="Revenue over time"
                        data={chartdata}
                        index="date"
                        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                        colors={["primary", "secondary"]}
                        valueFormatter={valueFormatter}
                    />
                </div>
                <div className="col-span-3">
                    <DonutChartCard
                        title="Sales by City"
                        data={salesData}
                        index="name"
                        categories={["sales"]}
                        colors={["primary", "secondary", "accent", "muted", "slate", "violet"]}
                        valueFormatter={valueFormatter}
                    />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <BarChartCard
                    title="Revenue by Source"
                    data={chartdata}
                    index="date"
                    categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                    colors={["primary", "secondary"]}
                    valueFormatter={valueFormatter}
                />
            </div>
        </PageContainer>
    )
}
