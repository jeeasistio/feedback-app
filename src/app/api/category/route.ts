import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma/client"

export const GET = async () => {
    const categories = await prisma.category.findMany()
    return NextResponse.json(categories)
}
