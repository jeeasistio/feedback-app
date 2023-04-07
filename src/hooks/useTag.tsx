import { TagContext } from "@/contexts/tags"
import { useContext } from "react"

export const useTag = () => useContext(TagContext)
