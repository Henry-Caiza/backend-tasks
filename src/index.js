import app from "./app.js"
import { connecDB } from "./db.js"

connecDB()
app.listen(3000)
console.log("listen on: ", 3000)
