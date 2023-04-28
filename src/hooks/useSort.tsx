"use client"

import { SortContext } from "@/contexts/sort"
import { useContext } from "react"

export const useSort = () => useContext(SortContext)
