import express from "express";
import { PORT } from "../config/servidor.config";
const app = express()

app.listen(PORT, ()=> {
  console.log("escuchando en puerto 8080")
})