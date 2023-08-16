import express, { json } from "express"
import cors from  "cors"
import { router } from "./routes/router.js"
import dotenv from "dotenv"
const  app = express()

app.use(cors())
app.use(json())
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(router)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})