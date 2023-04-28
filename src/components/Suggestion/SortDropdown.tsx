"use client"

import { useSort } from "@/hooks/useSort"
import { Dropdown } from "../Utils/Dropdown"
import { sortMapping } from "@/contexts/sort"

export const SortDropdown = () => {
    const { handleChange, label } = useSort()
    return (
        <div>
            <Dropdown
                handleChange={handleChange}
                value={label}
                options={Object.keys(sortMapping)}
                label="Sort by"
            />
        </div>
    )
}
