import express from "express"
import { PORT } from "../config/servidor.config.js"
import { engine } from "express-handlebars"

const app = express()
app.engine("handlebars", engine())
app.set("views", "./views")
app.set("view engine", "handlebars")

app.use(express.static("./public"))
app.use(express.json())

app.get("/", (req, res, next) => {
  res.redirect("/videojuegos")
})
app.get("/videojuegos", (req, res, next) => {
  res.render("cargaVideojuegos", { pageTitle: "Videojuegos"})
})

app.post("/api/videojuegos", (req, res, next) => {
  console.log(req.body)
  res.send("ok")
})

app.listen(PORT, () => {
  console.log(`escuchando en puerto ${PORT}`);
})
