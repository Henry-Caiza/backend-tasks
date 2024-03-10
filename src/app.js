import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"
import cookieParser from "cookie-parser"
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'https://taskscv.netlify.app',
    // 'https://taskscv.netlify.app',
    // 'http://localhost:5173',
    credentials: true,
}))
app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://taskscv.netlify.app")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})
app.use(cookieParser())

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)

export default app