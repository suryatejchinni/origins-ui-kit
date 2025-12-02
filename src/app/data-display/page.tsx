import { PageContainer } from "@/components/origins/layout/PageContainer"
import { PageHeader } from "@/components/origins/layout/PageHeader"
import { PageSection } from "@/components/origins/layout/PageSection"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DescriptionList, DescriptionTerm, DescriptionDetails } from "@/components/origins/data-display/DescriptionList"
import { List, ListItem } from "@/components/origins/data-display/List"
import { Button } from "@/components/ui/button"
import { User, Settings } from "lucide-react"

export default function DataDisplayPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Data Display"
                description="Components for displaying data in various formats."
            />

            <div className="grid gap-6 md:grid-cols-2">
                <PageSection title="Cards">
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Simple Card</CardTitle>
                                <CardDescription>A card with header and description.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card content goes here.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </PageSection>

                <PageSection title="Badges">
                    <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
                        <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                        <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
                    </div>
                </PageSection>
            </div>

            <PageSection title="Description List">
                <DescriptionList>
                    <div className="col-span-1">
                        <DescriptionTerm>Full name</DescriptionTerm>
                        <DescriptionDetails>Margot Foster</DescriptionDetails>
                    </div>
                    <div className="col-span-1">
                        <DescriptionTerm>Application for</DescriptionTerm>
                        <DescriptionDetails>Backend Developer</DescriptionDetails>
                    </div>
                    <div className="col-span-1">
                        <DescriptionTerm>Email address</DescriptionTerm>
                        <DescriptionDetails>margotfoster@example.com</DescriptionDetails>
                    </div>
                    <div className="col-span-1">
                        <DescriptionTerm>Salary expectation</DescriptionTerm>
                        <DescriptionDetails>$120,000</DescriptionDetails>
                    </div>
                    <div className="col-span-2">
                        <DescriptionTerm>About</DescriptionTerm>
                        <DescriptionDetails>
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </DescriptionDetails>
                    </div>
                </DescriptionList>
            </PageSection>

            <PageSection title="Lists">
                <List>
                    <ListItem
                        title="Leslie Alexander"
                        description="Co-Founder / CEO"
                        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        actions={<Button variant="ghost" size="sm">Edit</Button>}
                    />
                    <ListItem
                        title="Michael Foster"
                        description="Co-Founder / CTO"
                        avatar="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        actions={<Button variant="ghost" size="sm">Edit</Button>}
                    />
                    <ListItem
                        title="System Settings"
                        description="Manage your account settings"
                        icon={<Settings className="h-5 w-5" />}
                        actions={<Button variant="ghost" size="sm">View</Button>}
                    />
                </List>
            </PageSection>
        </PageContainer>
    )
}
