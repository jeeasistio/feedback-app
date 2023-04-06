"use client"

import { Typography } from "../Typography"

interface Props {
    error?: boolean
}

export const TextField = ({ error = false }: Props) => {
    return (
        <>
            <input
                className={`rounded-md border bg-white-200 px-4 py-2 outline-none focus:border-secondary
                ${error ? "border-red" : "border-transparent"}
                `}
                required
            />
            {error && (
                <Typography variant="h4" color="red" className="font-normal">
                    Can&apos;t be empty
                </Typography>
            )}
        </>
    )
}
