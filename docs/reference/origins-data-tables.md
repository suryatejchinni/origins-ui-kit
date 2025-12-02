# Origins Data Tables

A powerful and flexible data table component built on top of [TanStack Table](https://tanstack.com/table/v8), featuring sorting, filtering, pagination, and column visibility toggling.

## DataTable

The main component for rendering data tables.

### Import

```tsx
import { DataTable } from "origins-ui-kit"
import { ColumnDef } from "@tanstack/react-table"
```

### Usage

1. **Define your data type and columns:**

```tsx
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
```

2. **Render the DataTable:**

```tsx
const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  // ...
]

<DataTable columns={columns} data={data} filterColumn="email" />
```

### Props

- `columns`: ColumnDef<TData, TValue>[] - The column definitions for the table.
- `data`: TData[] - The array of data to display.
- `filterColumn`: string (optional) - The accessor key of the column to enable text filtering on. Defaults to "email".

### Features

- **Sorting**: Click on column headers to sort (requires configuring `header` in column definition to use a sort button, see TanStack Table docs or examples).
- **Filtering**: Includes an input field to filter rows based on the `filterColumn`.
- **Pagination**: Includes "Previous" and "Next" buttons to navigate through pages.
- **Column Visibility**: Includes a dropdown menu to toggle the visibility of columns.
- **Row Selection**: Supports row selection (requires adding a selection column).

### Advanced Column Configuration

To enable sorting on a column, you can define the header like this:

```tsx
import { ArrowUpDown } from "lucide-react"
import { Button } from "origins-ui-kit"

{
  accessorKey: "email",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    )
  },
}
```

To add a row action menu:

```tsx
import { MoreHorizontal } from "lucide-react"
import { 
  Button, 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "origins-ui-kit"

{
  id: "actions",
  cell: ({ row }) => {
    const payment = row.original
 
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(payment.id)}
          >
            Copy payment ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
```
