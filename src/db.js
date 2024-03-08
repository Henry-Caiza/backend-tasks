import mongoose from "mongoose"

import { MONGO_URL } from './config.js'

export const connecDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}