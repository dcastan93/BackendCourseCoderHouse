import { Router } from "express";
import {ProductManager} from "../ProductManager.js"
import { randomUUID } from 'crypto'
import { Product } from "../Product.js";

export const apiProducts = Router();
const productManager = new ProductManager("./static/products.txt")

apiProducts.get("/", async (req, res) => { 
  if (req.query.limit !== undefined){
    res.json(await productManager.getNProducts(parseInt(req.query.limit)))
  }else{
    res.json(await productManager.getProducts())
  }
 })
 apiProducts.get("/:id", async (req, res) => { 
  res.json(await productManager.getProductById(parseInt(req.params["id"])))
 })
apiProducts.post("/newProduct", async (req, res, next) => { 
  /*const product = new Product({
    id: randomUUID(),
    ...req.body
  })*/
  console.log(req.body)
 });


apiProducts.put("/", (req, res) => { res.json(); });
apiProducts.delete("/", (req, res) => { res.json(); });
