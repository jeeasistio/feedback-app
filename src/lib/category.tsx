export const CATEGORYMAPPING = {
    all: {
        title: "All",
    },
    ui: {
        title: "UI",
    },
    ux: {
        title: "UX",
    },
    enhancement: {
        title: "Enhancement",
    },
    bug: {
        title: "Bug",
    },
    feature: {
        title: "Feature",
    },
} as Record<string, { title: string }>

export const CATEGORIES = Object.values(CATEGORYMAPPING).map(
    (value) => value.title
)
