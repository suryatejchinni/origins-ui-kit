# Origins Navigation Components

Components for navigating within the application.

## Sidebar

The main desktop sidebar navigation. It renders a list of links with icons.

### Import

```tsx
import { Sidebar } from "origins-ui-kit"
```

### Usage

```tsx
// Typically used within the AppShell
<Sidebar />
```

### Configuration

The sidebar navigation items are currently defined within the component. To customize them, you would typically modify the `navItems` array in `src/components/origins/navigation/Sidebar.tsx` or refactor the component to accept items as props.

---

## MobileSidebar

A responsive sidebar for mobile devices, triggered by a hamburger menu icon. It uses a Sheet component to slide in from the left.

### Import

```tsx
import { MobileSidebar } from "origins-ui-kit"
```

### Usage

```tsx
// Typically used within the Topbar
<MobileSidebar />
```

### Behavior

- Hidden on desktop screens (`md:hidden`).
- Opens a sheet containing the sidebar navigation on click.
- Automatically closes when a link is clicked.
