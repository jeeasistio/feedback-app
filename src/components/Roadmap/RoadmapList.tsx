"use client"

import { Status, StatusName } from "@prisma/client"
import { Typography } from "../Utils/Typography"
import { RoadmapCard } from "./RoadmapCard"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import Image from "next/image"
import { AddFeedbackButton } from "../Shared/AddFeedbackButton"

export const roadmapMapping: Record<
    string,
    {
        status: StatusName
        description: string
        color: string
    }
> = {
    Planned: {
        status: "PLANNED",
        description: "Ideas prioritized for research",
        color: "orange",
    },
    "In-Progress": {
        status: "IN_PROGRESS",
        description: "Currently being developed",
        color: "primary",
    },
    Live: {
        status: "LIVE",
        description: "Released features",
        color: "blue",
    },
}

const NoDataFallback = () => {
    return (
        <div className="flex min-h-[460px] flex-col items-center justify-center gap-2 rounded-xl bg-white p-8 text-center sm:min-h-[600px]">
            <div className="relative h-[108px] w-[102px] sm:h-[137px] sm:w-[130px]">
                <Image
                    src="/suggestions/illustration-empty.svg"
                    alt="illustration"
                    fill
                    sizes="(min-width: 768px) 130px, 102px"
                />
            </div>
            <Typography variant="h3">There is no feedback yet</Typography>
            <Typography className="mb-4 max-w-[410px]" color="gray">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </Typography>
            <AddFeedbackButton />
        </div>
    )
}

const LoadingFallback = () => {
    return (
        <div className="space-y-6">
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-52 w-full rounded bg-gray-100"></div>
                    </div>
                ))}
        </div>
    )
}

interface Props {
    status: Status["label"]
}

export const RoadmapList = ({ status }: Props) => {
    const { data: feedbacks, isLoading } = useGetFeedbacks(
        undefined,
        roadmapMapping[status].status
    )

    return (
        <div>
            <div className="my-8">
                <Typography variant="h3" className="mb-1">
                    {status}
                </Typography>
                <Typography color="gray">
                    {roadmapMapping[status].description}
                </Typography>
            </div>

            <div className="space-y-4">
                {isLoading && <LoadingFallback />}
                {feedbacks && feedbacks.length === 0 && <NoDataFallback />}
                {feedbacks?.map((roadmap) => (
                    <div key={roadmap.title}>
                        <RoadmapCard {...roadmap} />
                    </div>
                ))}
            </div>
        </div>
    )
}
