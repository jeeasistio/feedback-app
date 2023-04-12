import { ReactNode } from "react"

const h1ClassName =
    "text-[1.5rem] font-bold leading-[2.188rem] tracking-[-.021rem]"
const h2ClassName =
    "text-[1.25rem] font-bold leading leading-[1.813rem] tracking-[-.016rem]"
const h3ClassName =
    "text-[1.125rem] font-bold leading-[1.625rem] tracking-[-.016rem]"
const h4ClassName =
    "text-[.875rem] font-bold leading-[1.25rem] tracking-[-.013rem]"
const body1ClassName = "text-[1rem] leading-[1.438rem]"
const body2ClassName = "text-[.9375rem] leading-[1.375rem]"
const body3ClassName = "text-[.8125rem] font-semibold leading-[1.1875rem]"

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3"

const variantMapping = {
    h1: {
        className: h1ClassName,
        Element: "h1",
    },
    h2: {
        className: h2ClassName,
        Element: "h2",
    },
    h3: {
        className: h3ClassName,
        Element: "h3",
    },
    h4: {
        className: h4ClassName,
        Element: "h4",
    },
    body1: {
        className: body1ClassName,
        Element: "p",
    },
    body2: {
        className: body2ClassName,
        Element: "p",
    },
    body3: {
        className: body3ClassName,
        Element: "p",
    },
}

interface Props {
    variant?: TypographyVariant
    color?: string
    children?: ReactNode
    className?: string
}

const textColor: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    inherit: "text-inherit",
    white: "text-white",
    gray: "text-gray",
    indigo: "text-indigo",
    red: "text-red",
}

export const Typography = ({
    variant = "body1",
    color = "indigo",
    children,
    className,
}: Props) => {
    const Element = variantMapping[variant]
        .Element as keyof JSX.IntrinsicElements
    return (
        <Element
            className={`font-sans ${variantMapping[variant].className} ${textColor[color]} ${className}`}
        >
            {children}
        </Element>
    )
}
