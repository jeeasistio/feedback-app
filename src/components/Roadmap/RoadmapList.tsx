"use client"

import { Status, StatusName } from "@prisma/client"
import { Typography } from "../Utils/Typography"
import { RoadmapCard } from "./RoadmapCard"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"

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
                {feedbacks && feedbacks.length === 0 && <div>No Feedbacks</div>}
                {feedbacks?.map((roadmap) => (
                    <div key={roadmap.title}>
                        <RoadmapCard {...roadmap} />
                    </div>
                ))}
            </div>
        </div>
    )
}
