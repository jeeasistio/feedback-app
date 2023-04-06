import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { Typography } from "./Utils/Typography"

interface Props {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
}

export const FrontendMentor = ({ open, handleClose, handleOpen }: Props) => {
    return (
        <div className="flex items-center justify-between bg-[url(/suggestions/mobile/background-header.png)] bg-cover px-6 py-4 text-white">
            <div>
                <Typography color="inherit" variant="h2">
                    Frontend Mentor
                </Typography>
                <Typography color="inherit">Feedback Board</Typography>
            </div>

            <div>
                {open ? (
                    <button onClick={handleClose}>
                        <XMarkIcon className="h-8 w-8 text-white" />
                    </button>
                ) : (
                    <button onClick={handleOpen}>
                        <Bars3Icon className="h-8 w-8 text-white" />
                    </button>
                )}
            </div>
        </div>
    )
}
