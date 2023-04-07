import { useSidebar } from "@/hooks/useSidebar"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

export const NavButton = () => {
    const { open, handleOpen, handleClose } = useSidebar()

    return open ? (
        <button onClick={handleClose}>
            <XMarkIcon className="h-8 w-8 text-white" />
        </button>
    ) : (
        <button onClick={handleOpen}>
            <Bars3Icon className="h-8 w-8 text-white" />
        </button>
    )
}
