# Origins Charts

A set of chart components built on top of [Tremor](https://www.tremor.so/), designed to be consistent with the Origins UI Kit design system.

## StatsCard

A card component for displaying a single statistic with an optional trend indicator or icon.

### Import

```tsx
import { StatsCard } from "origins-ui-kit"
```

### Usage

```tsx
import { Wallet } from "lucide-react"

<StatsCard
  title="Total Revenue"
  value="$45,231.89"
  change="+20.1% from last month"
  trend="up"
  icon={Wallet}
/>
```

### Props

- `title`: string - The title of the statistic.
- `value`: string - The main value to display.
- `change`: string (optional) - A secondary text indicating change (e.g., "+20%").
- `trend`: "up" | "down" | "neutral" (optional) - Displays an arrow icon indicating the trend direction.
- `icon`: React.ElementType (optional) - A custom icon to display in the top right.

---

## LineChartCard

A card containing a line chart, useful for showing trends over time.

### Import

```tsx
import { LineChartCard } from "origins-ui-kit"
```

### Usage

```tsx
const data = [
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
  // ...
]

<LineChartCard
  title="Newsletter revenue over time (USD)"
  data={data}
  index="date"
  categories={["SemiAnalysis", "The Pragmatic Engineer"]}
  colors={["indigo", "rose"]}
  valueFormatter={(number) => `$${Intl.NumberFormat("us").format(number).toString()}`}
/>
```

### Props

- `title`: string - The title of the chart card.
- `description`: string (optional) - A description for the chart.
- `data`: any[] - The data array for the chart.
- `index`: string - The key in the data objects to use for the x-axis.
- `categories`: string[] - The keys in the data objects to use for the lines.
- `colors`: string[] (optional) - Array of colors for the lines.
- `valueFormatter`: (number: number) => string (optional) - Function to format the values on the y-axis and tooltip.

---

## BarChartCard

A card containing a bar chart, useful for comparing categorical data.

### Import

```tsx
import { BarChartCard } from "origins-ui-kit"
```

### Usage

```tsx
<BarChartCard
  title="Number of species threatened with extinction (2021)"
  data={chartdata}
  index="name"
  categories={["Number of threatened species"]}
  colors={["blue"]}
  valueFormatter={dataFormatter}
/>
```

### Props

Same as `LineChartCard`.

---

## DonutChartCard

A card containing a donut chart, useful for showing proportional data.

### Import

```tsx
import { DonutChartCard } from "origins-ui-kit"
```

### Usage

```tsx
const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  // ...
]

<DonutChartCard
  title="Sales by City"
  data={cities}
  index="name"
  categories={["sales"]}
  colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
  valueFormatter={dataFormatter}
/>
```

### Props

Same as `LineChartCard`, but `categories` typically takes a single value for the metric to visualize.
