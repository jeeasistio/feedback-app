"use client"

import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { Feedback, Upvote } from "@prisma/client"
import { useState } from "react"
import { useSession } from "next-auth/react"

interface Props {
    feedbackId: Feedback["id"]
    count: number
    upvotes: Upvote["appUserId"][]
    orientation?: "horizontal" | "vertical"
}

export const UpvoteButton = ({
    feedbackId,
    count,
    upvotes,
    orientation = "vertical",
}: Props) => {
    const session = useSession()
    const [isActive, setIsActive] = useState<boolean>(
        upvotes.findIndex((id) => id === session?.data?.user?.id) !== -1
    )
    const [upvotesCount, setUpvotesCount] = useState<number>(count)
    const handleUpvote = async () => {
        const res = await fetch(`/api/upvote`, {
            method: "POST",
            body: JSON.stringify({ feedbackId, unupvote: false }),
        })
        if (res.ok) {
            setIsActive(!isActive)
            setUpvotesCount(upvotesCount + 1)
        }
    }
    const handleUnupvote = async () => {
        const res = await fetch(`/api/upvote`, {
            method: "POST",
            body: JSON.stringify({ feedbackId, unupvote: true }),
        })
        if (res.ok) {
            setIsActive(!isActive)
            setUpvotesCount(upvotesCount - 1)
        }
    }

    return (
        <button
            onClick={isActive ? handleUnupvote : handleUpvote}
            className={`flex w-max min-w-[40px] cursor-pointer flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100 ${
                orientation === "horizontal"
                    ? "flex-row"
                    : "flex-row sm:flex-col sm:py-2"
            }
            ${isActive ? "bg-secondary" : "bg-white-100"}`}
        >
            {isActive ? (
                <Image
                    src="/shared/icon-arrow-up-white.svg"
                    alt="arrow-up-icon"
                    width={10}
                    height={6}
                />
            ) : (
                <Image
                    src="/shared/icon-arrow-up-secondary.svg"
                    alt="arrow-up-icon"
                    width={10}
                    height={6}
                />
            )}
            <Typography variant="body3" color={isActive ? "white" : "indigo"}>
                {upvotesCount}
            </Typography>
        </button>
    )
}
