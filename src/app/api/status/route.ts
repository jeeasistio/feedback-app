import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma/client"

export const GET = async () => {
    const statuses = await prisma.status.findMany()
    return NextResponse.json(statuses)
}
