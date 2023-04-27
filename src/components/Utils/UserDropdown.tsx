"use client"

import { useClickOutside } from "@/hooks/useClickOutside"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRef, useState } from "react"
import { Typography } from "./Typography"

export const UserDropdown = () => {
    const session = useSession()
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    useClickOutside(ref, () => setOpen(false))

    return (
        <div ref={ref} className="relative">
            <button onClick={handleOpen}>
                {session.status === "authenticated" ? (
                    <Image
                        className="rounded-full bg-white"
                        src={session.data.user.image}
                        alt="profile-picture"
                        width={40}
                        height={40}
                    />
                ) : (
                    <Image
                        className="rounded-full bg-white"
                        src={"/user-images/no-profile.jpg"}
                        alt="profile-picture"
                        width={40}
                        height={40}
                    />
                )}
            </button>
            {open && (
                <ul className="absolute right-0 top-[100%] z-10 flex w-max cursor-pointer flex-col divide-y divide-indigo divide-opacity-20 rounded-xl bg-white drop-shadow-xl">
                    {session.status === "authenticated" ? (
                        <li
                            className="flex items-center justify-between px-4 py-2 text-left text-gray hover:text-primary"
                            onClick={() => signOut()}
                        >
                            <Typography color="red" variant="body1">
                                Sign out
                            </Typography>
                        </li>
                    ) : (
                        <li
                            className="flex items-center justify-between px-4 py-2 text-left text-gray hover:text-primary"
                            onClick={() => signIn()}
                        >
                            <Typography color="secondary" variant="body1">
                                Sign in
                            </Typography>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}
