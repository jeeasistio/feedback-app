import { Typography } from "./Utils/Typography"
import { NavButton } from "./NavButton"

export const FrontendMentor = () => {
    return (
        <div className="flex items-center justify-between bg-[url(/suggestions/mobile/background-header.png)] bg-cover px-6 py-4 text-white">
            <div>
                <Typography color="inherit" variant="h2">
                    Frontend Mentor
                </Typography>
                <Typography color="inherit">Feedback Board</Typography>
            </div>

            <div>
                <NavButton />
            </div>
        </div>
    )
}
