import express from "express";
import { apiCarts } from "./routers/apiCarts.js";
import { apiProducts } from "./routers/apiProducts.js";

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/products",apiProducts)
app.use("/api/carts", apiCarts)


const PORT = 8080
const server = app.listen(PORT, ()=> {console.log(`escuchando en ${PORT}`)})