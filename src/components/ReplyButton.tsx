import { Typography } from "./Utils/Typography"

export const ReplyButton = () => {
    return (
        <button className="decoration-secondary hover:underline">
            <Typography variant="body3" color="secondary">
                Reply
            </Typography>
        </button>
    )
}
