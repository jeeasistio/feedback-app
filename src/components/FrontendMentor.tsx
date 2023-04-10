import { Typography } from "./Utils/Typography"
import { NavButton } from "./NavButton"

export const FrontendMentor = () => {
    return (
        <div
            className="flex items-center justify-between bg-[url(/suggestions/mobile/background-header.png)] 
            bg-cover bg-center px-6 py-4 text-white sm:h-full sm:items-end sm:rounded-xl 
            sm:bg-[url(/suggestions/tablet/background-header.png)] sm:py-8 lg:min-h-[150px] lg:bg-[url(/suggestions/desktop/background-header.png)]"
        >
            <div>
                <Typography color="inherit" variant="h2">
                    Frontend Mentor
                </Typography>
                <Typography color="inherit">Feedback Board</Typography>
            </div>

            <div className="sm:hidden">
                <NavButton />
            </div>
        </div>
    )
}
