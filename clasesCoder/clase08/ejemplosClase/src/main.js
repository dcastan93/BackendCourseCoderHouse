import express from "express";
import { apiRouter } from "./routers/apiRouter.js";
import { webRouter } from "./routers/webRouter.js";

const app = express()

app.use((req, res, next) => {
  console.log("llega la peticion al servidor")
  next()
})

app.use(webRouter)

app.use((req, res, next) => {
  console.log("sigo Cargando cosas");
  next()
})
app.use("/api", apiRouter)



const PORT = 8080
const server = app.listen(PORT, ()=> {console.log(`escuchando en ${PORT}`)})