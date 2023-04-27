declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            DATABASE_URL: string
            NEXTAUTH_URL: string
            NEXTAUTH_SECRET: string
            NEXT_PUBLIC_LOCAL_URL: string
            EMAIL_SERVER_USER: string
            EMAIL_SERVER_PASSWORD: string
            EMAIL_SERVER_HOST: string
            EMAIL_SERVER_PORT: string
            EMAIL_FROM: string
            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string
        }
    }
}

export {}
