declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            DATABASE_URL: string
            NEXTAUTH_URL: string
            FACEBOOK_CLIENT_ID: string
            FACEBOOK_CLIENT_SECRET: string
            GITHUB_ID: string
            GITHUB_SECRET: string
            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string
        }
    }
}

export {}
