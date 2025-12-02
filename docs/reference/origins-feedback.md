# Origins Feedback Components

Components for providing feedback to the user about the state of the application.

## EmptyState

Displayed when there is no data to show.

### Import

```tsx
import { EmptyState } from "origins-ui-kit"
```

### Usage

```tsx
<EmptyState
  title="No projects found"
  description="You haven't created any projects yet."
  action={<Button>Create Project</Button>}
/>
```

### Props

- `title`: string - The main message.
- `description`: string - Secondary message.
- `action`: ReactNode (optional) - A call to action button.
- `icon`: ReactNode (optional) - Custom icon.

---

## ErrorState

Displayed when an error occurs.

### Import

```tsx
import { ErrorState } from "origins-ui-kit"
```

### Usage

```tsx
<ErrorState
  title="Failed to load data"
  description="Please check your internet connection."
  onRetry={() => fetchData()}
/>
```

### Props

- `title`: string (optional) - Error title.
- `description`: string (optional) - Error details.
- `onRetry`: () => void (optional) - Callback for retry action.

---

## LoadingState

A skeleton loader used to indicate that content is loading.

### Import

```tsx
import { LoadingState } from "origins-ui-kit"
```

### Usage

```tsx
<LoadingState />
```
