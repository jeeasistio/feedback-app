"use client"

import Image from "next/image"
import { Button } from "../Utils/Button"
import { useRouter } from "next/navigation"

interface Props {
    color?: "dark" | "light"
}

export const GoBackButton = ({ color = "light" }: Props) => {
    const router = useRouter()

    return (
        <Button
            underlined
            startIcon={
                <Image
                    src={
                        color === "light"
                            ? "/shared/icon-arrow-left-secondary.svg"
                            : "/shared/icon-arrow-left-gray.svg"
                    }
                    alt="arrow-left-icon"
                    width={8}
                    height={4}
                />
            }
            color={color === "light" ? "gray" : "tertiary"}
            onClick={() => router.back()}
        >
            Go Back
        </Button>
    )
}
