"use client"

import { ALLSTATUS, StatusAll } from "@/helpers/status"
import { Status } from "@prisma/client"
import { useEffect, useState } from "react"

export const useGetStatus = (withAll: boolean = false) => {
    const [allStatuses, setAllStatuses] = useState<(Status | StatusAll)[]>([])

    useEffect(() => {
        const getStatus = async () => {
            const res = await fetch("/api/status")
            const data = await res.json()
            setAllStatuses(withAll ? [ALLSTATUS].concat(data) : data)
        }
        getStatus()
    }, [withAll])

    return { allStatuses }
}
