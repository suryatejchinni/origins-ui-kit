# Using Origins UI Kit as a Library

This project can be used as a component library for other Next.js applications.

## Installation

Since this is a local package, you can install it using `npm link` or by installing from the file path.

```bash
# In this project directory
npm link

# In your target project directory
npm link origins-ui-kit
# OR
npm install /path/to/origins-ui-kit
```

## Setup

### 1. Import Styles

Import the global styles in your target project's `app/layout.tsx` or `pages/_app.tsx`:

```tsx
import "origins-ui-kit/globals.css";
```

### 2. Configure Tailwind

Update your `tailwind.config.ts` to scan the library files for classes:

import type { Config } from "tailwindcss";
import { originsPreset } from "origins-ui-kit/tailwind.preset";

const config: Config = {
  presets: [originsPreset],
  content: [
    // ... your content paths
    "./node_modules/origins-ui-kit/dist/**/*.{js,mjs}",
  ],
  // ... rest of config
};
export default config;
```

### Alternative: Portable Style Document

If you don't want to install the full library, you can simply copy the `tailwind.preset.ts` and `globals.css` files into your project. This gives you the "Origins" look without the component dependencies.


### 3. Wrap with ThemeProvider

Wrap your application with the `ThemeProviderWrapper` and `ThemeProvider`:

```tsx
import { ThemeProviderWrapper, ThemeProvider } from "origins-ui-kit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
```

## Usage

Import components directly from the package:

```tsx
import { Button, Card, PageHeader } from "origins-ui-kit";

export default function MyPage() {
  return (
    <Card>
      <PageHeader title="Hello World" />
      <Button>Click me</Button>
    </Card>
  );
}
```
