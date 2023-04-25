"use client"

import { fetcher } from "@/helpers/fetcher"
import { ReactNode } from "react"
import { SWRConfig } from "swr"

interface Props {
    children: ReactNode
}

export const SWRProvider = ({ children }: Props) => {
    return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
}
