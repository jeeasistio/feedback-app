"use client"

import Link from "next/link"
import { Typography } from "../Utils/Typography"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import { useCategory } from "@/hooks/useCategory"

const LoadingFallback = () => {
    return (
        <div className="space-y-4">
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-6 w-full rounded bg-gray-100"></div>
                    </div>
                ))}
        </div>
    )
}

const roadmapMapping: Record<string, { color: string }> = {
    Planned: {
        color: "orange",
    },
    "In-Progress": {
        color: "primary",
    },
    Live: {
        color: "blue",
    },
}

const bgColor: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    orange: "bg-orange",
    blue: "bg-blue",
}

export const RoadmapPreview = () => {
    const { activeCat } = useCategory()
    const { data: feedbacks, isLoading } = useGetFeedbacks(activeCat.name)

    const roadmap = feedbacks?.reduce((acc, curr) => {
        if (curr.status in acc) {
            acc[curr.status] += 1
        } else {
            acc[curr.status] = 1
        }
        return acc
    }, {} as Record<string, number>)

    return (
        <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-4 sm:max-lg:h-full">
            <div className="w-full">
                <div className="mb-5 flex items-center justify-between">
                    <Typography variant="h3">Roadmap</Typography>
                    <Typography
                        variant="body3"
                        color="secondary"
                        className="w-min underline"
                    >
                        <Link href="/roadmap">View</Link>
                    </Typography>
                </div>

                <div className="space-y-2">
                    {isLoading && <LoadingFallback />}
                    {roadmap &&
                        Object.entries(roadmap).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex items-center justify-between"
                            >
                                <div
                                    key={key}
                                    className="flex items-center gap-2"
                                >
                                    <div
                                        className={`h-2 w-2 rounded-full ${
                                            bgColor[roadmapMapping[key].color]
                                        }`}
                                    />
                                    <Typography>{key}</Typography>
                                </div>
                                <Typography className="font-bold">
                                    {value}
                                </Typography>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
