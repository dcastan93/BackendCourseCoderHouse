import express from "express";
import { PORT } from "./config.js";
import fs from "fs/promises"
import { engine} from "express-handlebars"

const app = express()

app.engine("handlebars", engine())

app.get("/", async (req, res, next) => {
  const plantilla = await fs.readFile("./views/plantilla.html", "utf-8")
  res.send(plantilla)
})

const server = app.listen(PORT, ()=> {
  console.log(`escuchando en ${PORT}`)
})