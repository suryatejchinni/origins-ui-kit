# Origins Utilities Components

Utility components for various common UI patterns.

## FilterBar

A search input and filter button combination.

### Import

```tsx
import { FilterBar } from "origins-ui-kit"
```

### Usage

```tsx
<FilterBar />
```

---

## InlineEdit

A text field that can be edited in place. Click to edit, enter or blur to save.

### Import

```tsx
import { InlineEdit } from "origins-ui-kit"
```

### Usage

```tsx
<InlineEdit
  defaultValue="Click me to edit"
  onSave={(value) => console.log(value)}
/>
```

### Props

- `defaultValue`: string - The initial value.
- `onSave`: (value: string) => void (optional) - Callback when saved.

---

## KebabMenu

A standard "more actions" dropdown menu triggered by a horizontal ellipsis icon.

### Import

```tsx
import { KebabMenu } from "origins-ui-kit"
```

### Usage

```tsx
<KebabMenu />
```

### Configuration

Currently renders static "Edit" and "Delete" items. You should customize the `DropdownMenuItem`s within the component or refactor it to accept children/items.

---

## TagList

Displays a list of tags using the Badge component.

### Import

```tsx
import { TagList } from "origins-ui-kit"
```

### Usage

```tsx
<TagList tags={["React", "Next.js", "Tailwind"]} />
```

### Props

- `tags`: string[] - Array of tag labels.
