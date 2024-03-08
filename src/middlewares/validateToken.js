import jwt from 'jsonwebtoken'
//import { TOKEN_SECRET } from '../config.js'
import env from "dotenv"
env.config()
const TOKEN_SECRET = process.env.JWT_SECRET
export const authRequired = (req, res, next) => {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: "No token, authorization denied" })

    jwt.verify(token, TOKEN_SECRET, (err, user) => { //mas usado decoded (user)
        if (err) return res.status(403).json({ message: "Invalid token" })
        req.user = user
        next()
    })
}