import env from "dotenv"
env.config()
export const TOKEN_SECRET = process.env.JWT_SECRET
export const MONGO_URL = process.env.DB_CONNECTION_URL
export const PORT = process.env.PORT || 3000