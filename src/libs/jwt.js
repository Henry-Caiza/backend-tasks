import jwt from "jsonwebtoken"
//import { TOKEN_SECRET } from "../config.js"
import env from "dotenv"
env.config()
const TOKEN_SECRET = process.env.JWT_SECRET

export function CreateAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            { expiresIn: "1d" },
            (err, token) => {
                console.log('fgdfgfdgfdg:', token);
                if (err) reject(err)
                resolve(token)
            })
    })
}