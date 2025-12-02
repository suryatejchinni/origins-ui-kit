# Origins Theming System

The Origins UI Kit includes a robust theming system that allows for dynamic switching of themes, fonts, border radii, and primary colors.

## ThemeProviderWrapper

The core context provider that manages the state of the theme. It persists user preferences to `localStorage`.

### Import

```tsx
import { ThemeProviderWrapper } from "@/components/theme-context"
```

### Usage

Wrap your application's root component (or `layout.tsx` in Next.js) with `ThemeProviderWrapper`.

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
```

## ThemeContext

A hook to access and modify the current theme settings.

### Import

```tsx
import { useThemeContext } from "@/components/theme-context"
```

### Usage

```tsx
const { 
  theme, 
  setTheme, 
  radius, 
  setRadius, 
  font, 
  setFont, 
  primaryColor, 
  setPrimaryColor 
} = useThemeContext()
```

### Properties

- `theme`: "origins" | "neo-saas" | "calm" | "enterprise" - The current visual theme preset.
- `radius`: number - The global border radius multiplier (e.g., 0.5).
- `font`: "inter" | "manrope" | "jakarta" - The active font family.
- `primaryColor`: string - The HSL value of the primary color (e.g., "221 83% 53%").

## ThemeCustomizer

A pre-built UI component that provides a slide-out sheet for users to customize the theme.

### Import

```tsx
import { ThemeCustomizer } from "@/components/theme-customizer"
```

### Usage

Place it in your root layout or a global container.

```tsx
<ThemeCustomizer />
```

### Features

- **Mode Toggle**: Switch between Light and Dark modes.
- **Theme Presets**: Choose from predefined themes (Origins, Neo-SaaS, Calm, Enterprise).
- **Primary Color**: Select a primary color from a palette or reset to the theme default.
- **Radius**: Adjust the global border radius.
- **Font**: Switch between supported font families.
- **Copy Code**: Generates and copies the CSS variables for the current theme configuration to the clipboard.

## ThemeProvider

A wrapper around `next-themes`'s `ThemeProvider` to handle dark mode class switching.

### Import

```tsx
import { ThemeProvider } from "@/components/theme-provider"
```

### Usage

Used internally within `layout.tsx` to wrap the application content.

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```
