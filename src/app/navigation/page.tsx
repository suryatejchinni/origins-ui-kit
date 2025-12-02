"use client"

import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { PageSection } from "@/components/origins/layout/PageSection"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Settings, User, CreditCard, LogOut, PlusCircle, UserPlus, Mail, MessageSquare, Plus, Calendar } from "lucide-react"

export default function NavigationPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Navigation & Overlays"
                description="Components for navigation and overlay interactions."
            />

            <PageSection title="Breadcrumbs">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/navigation">Navigation</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Current Page</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageSection>

            <PageSection title="Tabs">
                <Tabs defaultValue="account" className="w-full max-w-lg">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="rounded-md border p-4 space-y-2">
                            <h3 className="font-medium">Account</h3>
                            <p className="text-sm text-muted-foreground">
                                Make changes to your account here. Click save when you're done.
                            </p>
                            <div className="grid gap-4 py-2">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="name" className="sm:w-20 sm:text-right">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" className="flex-1" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="username" className="sm:w-20 sm:text-right">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" className="flex-1" />
                                </div>
                            </div>
                            <Button>Save changes</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="rounded-md border p-4 space-y-2">
                            <h3 className="font-medium">Password</h3>
                            <p className="text-sm text-muted-foreground">
                                Change your password here. After saving, you'll be logged out.
                            </p>
                            <div className="grid gap-4 py-2">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="current" className="sm:w-32 sm:text-right">Current password</Label>
                                    <Input id="current" type="password" className="flex-1" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="new" className="sm:w-32 sm:text-right">New password</Label>
                                    <Input id="new" type="password" className="flex-1" />
                                </div>
                            </div>
                            <Button>Save password</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </PageSection>

            <div className="grid gap-6 md:grid-cols-2">
                <PageSection title="Dialog">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="name" className="sm:w-20 sm:text-right">
                                        Name
                                    </Label>
                                    <Input id="name" defaultValue="Pedro Duarte" className="flex-1" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="username" className="sm:w-20 sm:text-right">
                                        Username
                                    </Label>
                                    <Input id="username" defaultValue="@peduarte" className="flex-1" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </PageSection>

                <PageSection title="Sheet">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Open Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="name" className="sm:w-20 sm:text-right">
                                        Name
                                    </Label>
                                    <Input id="name" defaultValue="Pedro Duarte" className="flex-1" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <Label htmlFor="username" className="sm:w-20 sm:text-right">
                                        Username
                                    </Label>
                                    <Input id="username" defaultValue="@peduarte" className="flex-1" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </PageSection>

                <PageSection title="Popover">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Dimensions</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Set the dimensions for the layer.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <Label htmlFor="width" className="sm:w-24">Width</Label>
                                        <Input id="width" defaultValue="100%" className="flex-1 h-8" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <Label htmlFor="maxWidth" className="sm:w-24">Max. width</Label>
                                        <Input id="maxWidth" defaultValue="300px" className="flex-1 h-8" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <Label htmlFor="height" className="sm:w-24">Height</Label>
                                        <Input id="height" defaultValue="25px" className="flex-1 h-8" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <Label htmlFor="maxHeight" className="sm:w-24">Max. height</Label>
                                        <Input id="maxHeight" defaultValue="none" className="flex-1 h-8" />
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </PageSection>

                <PageSection title="Dropdown Menu">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Invite users</span>
                                </DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        <span>Invite users</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>Email</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>Message</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>More...</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    <Plus className="mr-2 h-4 w-4" />
                                    <span>New Team</span>
                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </PageSection>
            </div>
        </PageContainer>
    )
}
