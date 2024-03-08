import mongoose from "mongoose"
import env from "dotenv"
env.config()
//import { MONGO_URL } from './config.js'
const MONGO_URL = process.env.DB_CONNECTION_URL
export const connecDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}