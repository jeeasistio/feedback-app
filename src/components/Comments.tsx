import { Comment } from "./Comment"
import { Typography } from "./Utils/Typography"

const comments = [
    {
        id: 3,
        content:
            "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        user: {
            image: "/user-images/image-elijah.jpg",
            name: "Elijah Moss",
            username: "hexagon.bestagon",
        },
    },
    {
        id: 4,
        content:
            "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
        user: {
            image: "/user-images/image-james.jpg",
            name: "James Skinner",
            username: "hummingbird1",
        },
        replies: [
            {
                content:
                    "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                replyingTo: "hummingbird1",
                user: {
                    image: "/user-images/image-anne.jpg",
                    name: "Anne Valentine",
                    username: "annev1990",
                },
            },
            {
                content:
                    "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                replyingTo: "annev1990",
                user: {
                    image: "/user-images/image-ryan.jpg",
                    name: "Ryan Welles",
                    username: "voyager.344",
                },
            },
        ],
    },
]

export const Comments = () => {
    return (
        <div className="sm: rounded-xl bg-white px-6 py-4 sm:px-8 sm:py-8">
            <Typography variant="h3">
                {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
            </Typography>

            <div className="divide-y-2 divide-gray divide-opacity-10">
                {comments.map((comment, i) => (
                    <div className="py-4" key={i}>
                        <Comment key={comment.id} {...comment} />
                    </div>
                ))}
            </div>
        </div>
    )
}
