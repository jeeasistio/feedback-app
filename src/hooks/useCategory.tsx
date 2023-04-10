import { CategoryContext } from "@/contexts/categories"
import { useContext } from "react"

export const useCategory = () => useContext(CategoryContext)
