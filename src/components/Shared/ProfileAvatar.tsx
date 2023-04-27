import Image from "next/image"

const backgrounds = [
    "bg-gray",
    "bg-blue",
    "bg-red",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
    "bg-green",
    "bg-yellow",
    "bg-pink",
    "bg-purple",
    "bg-indigo",
    "bg-gray-dark",
]

interface Props {
    src: string
    height?: number
    width?: number
}

export const ProfileAvatar = ({ src, height = 35, width = 35 }: Props) => {
    return (
        <Image
            className={`rounded-full ${
                backgrounds[src.length % backgrounds.length]
            }`}
            src={src ?? "/user-images/no-profile.jpg"}
            alt="profile-image"
            width={width}
            height={height}
        />
    )
}
