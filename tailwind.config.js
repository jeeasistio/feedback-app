/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#AD1FEA",
                secondary: "#4661E6",
                tertiary: "#373F68",
                white: "#FFFFFF",
                "white-100": "#F2F4FF",
                "white-200": "#F7F8FD",
                indigo: "#3A4374",
                gray: "#647196",
                "gray-100": "#CFD7FF",
                orange: "#F49F85",
                blue: "#62BCFA",
                red: "#D73737",
            },
            fontFamily: {
                sans: ["var(--font-jost)", "sans-serif"],
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
}
