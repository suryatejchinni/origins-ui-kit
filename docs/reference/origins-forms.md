# Origins Forms Components

Components for building forms and capturing user input.

## DatePicker

A pre-composed date picker component using a Popover and Calendar.

### Import

```tsx
import { DatePicker } from "origins-ui-kit"
```

### Usage

```tsx
const [date, setDate] = React.useState<Date>()

<DatePicker date={date} setDate={setDate} />
```

### Props

- `date`: Date | undefined - The currently selected date.
- `setDate`: (date?: Date) => void - Callback when a date is selected.
- `className`: string (optional) - Additional classes.

---

## FormSection

A layout component for grouping related form fields with a title and description.

### Import

```tsx
import { FormSection } from "origins-ui-kit"
```

### Usage

```tsx
<FormSection
  title="Profile"
  description="Update your public profile information."
>
  <FormField ... />
  <FormField ... />
</FormSection>
```

### Props

- `title`: string - Section title.
- `description`: string (optional) - Section description.
- Children: ReactNode - The form fields to display.
