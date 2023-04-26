import { ChangeEventHandler } from "react"
import { Typography } from "../Utils/Typography"
import { UseFormRegisterReturn } from "react-hook-form"

export interface Props {
    value?: string
    onChange?: ChangeEventHandler<HTMLTextAreaElement> &
        ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    error?: boolean
    errorLabel?: string
    fullWidth?: boolean
    className?: string
    multiline?: boolean
    register?: UseFormRegisterReturn<any>
    maxLength?: number
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
    register,
    maxLength,
}: Props) => {
    const Element = multiline ? "textarea" : "input"
    return (
        <>
            <Element
                className={`rounded-md border bg-white-200 px-5 py-3 text-indigo outline-none  focus:border-secondary
                ${fullWidth && "w-full"}
                ${error ? "border-red" : "border-transparent"} 
                ${multiline && "resize-none"}
                ${className}
                `}
                placeholder={placeholder}
                rows={multiline ? 4 : 1}
                value={value}
                maxLength={maxLength}
                {...(register ? register : {})}
                onChange={onChange}
            />
            {error && errorLabel && (
                <Typography variant="body2" color="red">
                    {errorLabel}
                </Typography>
            )}
        </>
    )
}
