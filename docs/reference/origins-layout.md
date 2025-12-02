# Origins Layout Components

These components provide the structural foundation for applications built with `origins-ui-kit`.

## AppShell

The main wrapper for the application. It handles the sidebar and main content area layout.

### Import

```tsx
import { AppShell } from "origins-ui-kit"
```

### Usage

```tsx
// app/layout.tsx or a layout wrapper
export default function Layout({ children }) {
  return (
    <AppShell>
      {children}
    </AppShell>
  )
}
```

---

## PageContainer

A container component that centers content and applies max-width and spacing.

### Import

```tsx
import { PageContainer } from "origins-ui-kit"
```

### Usage

```tsx
<PageContainer>
  {/* Page content goes here */}
</PageContainer>
```

### Props

- Standard HTML div props.

---

## PageHeader

A standard header for pages, including a title, description, and optional actions.

### Import

```tsx
import { PageHeader } from "origins-ui-kit"
```

### Usage

```tsx
<PageHeader
  title="Dashboard"
  description="Overview of your account activity."
  actions={<Button>New Project</Button>}
/>
```

### Props

- `title`: string - The page title.
- `description`: string (optional) - A short description.
- `actions`: ReactNode (optional) - Elements to display on the right (e.g., buttons).

---

## PageSection

A section within a page, wrapping content in a Card with an optional title and description.

### Import

```tsx
import { PageSection } from "origins-ui-kit"
```

### Usage

```tsx
<PageSection
  title="Personal Information"
  description="Update your personal details."
>
  <form>...</form>
</PageSection>
```

### Props

- `title`: string (optional) - Section title.
- `description`: string (optional) - Section description.
- Children: ReactNode - The content of the section.

---

## Topbar

The top navigation bar, typically used within the `AppShell`. It includes the mobile sidebar trigger, branding, and user actions.

### Import

```tsx
import { Topbar } from "origins-ui-kit"
```

### Usage

```tsx
// Usually used internally by AppShell, but can be used independently.
<Topbar />
```
