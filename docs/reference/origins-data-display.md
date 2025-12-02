# Origins Data Display Components

Components for displaying data in structured formats.

## DescriptionList

A component for displaying key-value pairs, often used for item details or properties.

### Import

```tsx
import {
  DescriptionList,
  DescriptionDetails,
  DescriptionTerm,
} from "origins-ui-kit"
```

### Usage

```tsx
<DescriptionList>
  <DescriptionTerm>Name</DescriptionTerm>
  <DescriptionDetails>John Doe</DescriptionDetails>
  <DescriptionTerm>Email</DescriptionTerm>
  <DescriptionDetails>john@example.com</DescriptionDetails>
</DescriptionList>
```

---

## List

A component for displaying a list of items with consistent styling, including support for avatars, icons, and actions.

### Import

```tsx
import { List, ListItem } from "origins-ui-kit"
```

### Usage

```tsx
<List>
  <ListItem
    title="Project A"
    description="Updated 2 hours ago"
    avatar="/avatars/01.png"
    actions={<Button variant="ghost">Edit</Button>}
  />
  <ListItem
    title="Project B"
    description="Updated 5 hours ago"
    icon={<FolderIcon />}
  />
</List>
```

### Props (ListItem)

- `title`: string - The main text of the item.
- `description`: string (optional) - Secondary text.
- `avatar`: string (optional) - URL for an avatar image.
- `icon`: ReactNode (optional) - Icon element (used if no avatar).
- `actions`: ReactNode (optional) - Elements to display on the right.
