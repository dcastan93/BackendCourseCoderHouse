import express from "express"
import { PORT } from "./config/server.config.js"
import { engine } from "express-handlebars"

const app = express()

app.use("/static", express.static("./static"))

app.engine("handlebars", engine())
app.set("views", "./src/views") //esto carga las vistas


app.get("/", (req, res, next) => {
  res.render("inicio.handlebars", {titulo: "inicio", encabezado:"inicio"})
 // res.sendFile("index.html", { root: "./src/views" })
})

app.get("/contacto", (req, res, next) => {
  const listado = []
  res.render("listado.handlebars", {
    titulo: "Acerca de mi",
    encabezado: "About", 
    listado,
    hayListado: listado.length > 0
  })
 // res.sendFile("index.html", { root: "./src/views" })
})


app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`)
})