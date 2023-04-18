import mongoose from "mongoose"
import { MONGODB_CNX_STR } from "../config/database.js"

export async function connectDB() {
  await mongoose.connect(MONGODB_CNX_STR)
  console.log(`base de datos concectada a ${MONGODB_CNX_STR}`)
}
