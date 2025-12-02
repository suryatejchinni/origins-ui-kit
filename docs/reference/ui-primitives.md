# UI Primitives

This section documents the base UI components available in `origins-ui-kit`. These components are built on top of Radix UI primitives and Tailwind CSS, ensuring accessibility and customizability.

## Button

Displays a button or a component that looks like a button.

### Import

```tsx
import { Button } from "origins-ui-kit"
```

### Usage

```tsx
<Button variant="default" size="default">Click me</Button>
```

### Props

- `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
- `size`: "default" | "sm" | "lg" | "icon"
- `asChild`: boolean - If true, the button renders as its child (useful for wrapping Links).
- `loading`: boolean - If true, shows a loading spinner and disables the button.

---

## Input

Displays a form input field or a component that looks like an input field.

### Import

```tsx
import { Input } from "origins-ui-kit"
```

### Usage

```tsx
<Input type="email" placeholder="Email" />
```

### Props

- `startIcon`: ReactNode - Icon to display at the start of the input.
- `endIcon`: ReactNode - Icon to display at the end of the input.
- Standard HTML input props.

---

## Badge

Displays a badge or a component that looks like a badge.

### Import

```tsx
import { Badge } from "origins-ui-kit"
```

### Usage

```tsx
<Badge variant="default">New</Badge>
```

### Props

- `variant`: "default" | "secondary" | "destructive" | "outline"

---

## Alert

Displays a callout for user attention.

### Import

```tsx
import { Alert, AlertTitle, AlertDescription } from "origins-ui-kit"
```

### Usage

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
```

### Props

- `variant`: "default" | "destructive"

---

## Card

Displays a card with header, content, and footer.

### Import

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "origins-ui-kit"
```

### Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

---

## Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

### Import

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "origins-ui-kit"
```

### Usage

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

---

## DropdownMenu

Displays a menu to the user—such as a set of actions or functions—triggered by a button.

### Import

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "origins-ui-kit"
```

### Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Checkbox

A control that allows the user to toggle between checked and not checked.

### Import

```tsx
import { Checkbox } from "origins-ui-kit"
```

### Usage

```tsx
<Checkbox />
```

---

## Avatar

An image element with a fallback for representing the user.

### Import

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "origins-ui-kit"
```

### Usage

```tsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

---

## Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

### Import

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "origins-ui-kit"
```

### Usage


---

## Sheet

Extends the Dialog component to display content that complements the main screen of an application.

### Import

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "origins-ui-kit"
```

### Usage

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

---

## Toast

A succinct message that is displayed temporarily.

### Import

```tsx
import { useToast } from "@/hooks/use-toast" // Note: Import hook from your app or library if exported
import { Toaster } from "origins-ui-kit"
```

### Usage

```tsx
// Add <Toaster /> to your root layout
<Toaster />

// In a component
const { toast } = useToast()

toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
})
```

---

## Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

### Import

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "origins-ui-kit"
```

### Usage

```tsx
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

---

## Select

Displays a list of options for the user to pick from—triggered by a button.

### Import

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "origins-ui-kit"
```

### Usage

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

---

## Switch

A control that allows the user to toggle between checked and not checked.

### Import

```tsx
import { Switch } from "origins-ui-kit"
```

### Usage


---

## Slider

An input where the user selects a value from within a given range.

### Import

```tsx
import { Slider } from "origins-ui-kit"
```

### Usage

```tsx
<Slider defaultValue={[33]} max={100} step={1} />
```

---

## Popover

Displays rich content in a portal, triggered by a button.

### Import

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "origins-ui-kit"
```

### Usage

```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

---

## RadioGroup

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

### Import

```tsx
import { Label, RadioGroup, RadioGroupItem } from "origins-ui-kit"
```

### Usage

```tsx
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

---

## Label

Renders an accessible label associated with controls.

### Import

```tsx
import { Label } from "origins-ui-kit"
```

### Usage

```tsx
<Label htmlFor="email">Your email address</Label>
```

---

## Form

Building forms with React Hook Form and Zod.

### Import

```tsx
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "origins-ui-kit"
import { useForm } from "react-hook-form"
```

### Usage

```tsx
const form = useForm()

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

---

## Table

A responsive table component.

### Import

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "origins-ui-kit"
```

### Usage


---

## Textarea

Displays a form textarea or a component that looks like a textarea.

### Import

```tsx
import { Textarea } from "origins-ui-kit"
```

### Usage

```tsx
<Textarea placeholder="Type your message here." />
```

---

## Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

### Import

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "origins-ui-kit"
```

### Usage

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Skeleton

Used to show a placeholder while content is loading.

### Import

```tsx
import { Skeleton } from "origins-ui-kit"
```

### Usage

```tsx
<Skeleton className="w-[100px] h-[20px] rounded-full" />
```

---

## Calendar

A date field component that allows users to enter and edit date.

### Import

```tsx
import { Calendar } from "origins-ui-kit"
```

### Usage

```tsx
const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>
```

---

## Breadcrumb

Displays the path to the current resource using a hierarchy of links.

### Import

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "origins-ui-kit"
```

### Usage

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Toaster

The component that renders the toasts. Place it in your root layout.

### Import

```tsx
import { Toaster } from "origins-ui-kit"
```

### Usage

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```



