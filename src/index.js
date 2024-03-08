import app from "./app.js"
import { connecDB } from "./db.js"
//import { PORT } from "./config.js"
import env from "dotenv"
env.config()

const PORT = process.env.PORT || 3000

connecDB()
app.listen(PORT)
console.log("listen on: ", PORT)
