import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const checkIfAuthenticated = async () => {
    const session = await getServerSession(authOptions)
    if (!session?.user.id) throw new Error("User unauthenticated")
}
