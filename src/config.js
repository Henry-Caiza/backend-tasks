import env from "dotenv"
env.config()
export const TOKEN_SECRET = process.env.TOKEN_SECRET
export const MONGO_URL = process.env.PUBLIC_MONGO_URL