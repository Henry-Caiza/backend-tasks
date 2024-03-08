import app from "./app.js"
import { connecDB } from "./db.js"
import { PORT } from "./config.js"
connecDB()
app.listen(PORT)
console.log("listen on: ", PORT)
