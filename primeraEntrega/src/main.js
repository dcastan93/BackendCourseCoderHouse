import express from "express";
import { apiProducts } from "./routers/apiProducts.js";

const app = express()

app.use("/products",apiProducts)


const PORT = 8080
const server = app.listen(PORT, ()=> {console.log(`escuchando en ${PORT}`)})