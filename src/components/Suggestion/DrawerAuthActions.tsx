"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "../Utils/Button"

export const DrawerAuthActions = () => {
    const session = useSession()
    return (
        <div>
            {session.status === "authenticated" ? (
                <Button fullWidth color="secondary" onClick={() => signIn()}>
                    Sign in
                </Button>
            ) : (
                <Button fullWidth color="red" onClick={() => signOut()}>
                    Sign out
                </Button>
            )}
        </div>
    )
}
