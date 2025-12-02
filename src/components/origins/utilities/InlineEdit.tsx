"use client"

"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface InlineEditProps {
    defaultValue: string
    onSave?: (value: string) => void
}

export function InlineEdit({ defaultValue, onSave }: InlineEditProps) {
    const [isEditing, setIsEditing] = React.useState(false)
    const [value, setValue] = React.useState(defaultValue)
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    const handleBlur = () => {
        setIsEditing(false)
        onSave?.(value)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setIsEditing(false)
            onSave?.(value)
        }
        if (e.key === "Escape") {
            setIsEditing(false)
            setValue(defaultValue)
        }
    }

    if (isEditing) {
        return (
            <Input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className="h-8"
            />
        )
    }

    return (
        <div
            onClick={() => setIsEditing(true)}
            className={cn(
                "cursor-text rounded px-2 py-1 hover:bg-muted",
                !value && "text-muted-foreground italic"
            )}
        >
            {value || "Click to edit"}
        </div>
    )
}
