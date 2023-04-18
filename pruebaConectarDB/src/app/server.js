import express from "express"
import { PORT } from "../config/servidor.config.js"
import { connectDB } from "../database/mongoose.js"

await connectDB()
const app = express()

app.listen(PORT, ()=> {console.log(`escuchando en ${PORT}`)})