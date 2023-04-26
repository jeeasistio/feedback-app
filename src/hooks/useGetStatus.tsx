"use client"

import { ALLSTATUS, StatusAll } from "@/helpers/status"
import { Status } from "@prisma/client"
import useSWR from "swr"

export const useGetStatus = (withAll: boolean = false) => {
    const res = useSWR<(Status | StatusAll)[]>("/api/status")

    return {
        ...res,
        data:
            withAll && res.data
                ? ([ALLSTATUS] as (Status | StatusAll)[]).concat(res.data)
                : res.data,
    }
}
