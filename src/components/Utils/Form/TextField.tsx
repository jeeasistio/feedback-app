import { ChangeEventHandler } from "react"
import { Typography } from "../Typography"

interface Props {
    value: string
    onChange: ChangeEventHandler<HTMLTextAreaElement> &
        ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    error?: boolean
    errorLabel?: string
    fullWidth?: boolean
    className?: string
    multiline?: boolean
}

export const TextField = ({
    error = false,
    errorLabel,
    fullWidth = false,
    multiline = false,
    onChange,
    value,
    className,
    placeholder,
}: Props) => {
    const Element = multiline ? "textarea" : "input"
    return (
        <>
            <Element
                className={`rounded-lg border bg-white-200 px-6 py-4 outline-none focus:border-secondary 
                ${fullWidth && "w-full"}
                ${error ? "border-red" : "border-transparent"} 
                ${multiline && "resize-none"}
                ${className}
                `}
                onChange={onChange}
                placeholder={placeholder}
                rows={multiline ? 4 : 1}
                value={value}
            />
            {error && errorLabel && (
                <Typography variant="h4" color="red" className="font-normal">
                    {errorLabel}
                </Typography>
            )}
        </>
    )
}
