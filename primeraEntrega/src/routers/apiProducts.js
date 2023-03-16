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
apiProducts.post("/", async (req, res, next) => { 
  try {
	  const product = new Product({
      id: randomUUID(),
	    ...req.body
	  })
    const newProduct = await productManager.addProduct(product)
    res.json(newProduct)
  } catch (error) {
	next(error)
  }
 });

apiProducts.put("/:pid", async (req, res, next) => { 
  let productToModify
  try {
	productToModify = new Product({
	    id: req.params.pid,
	    ...req.body
	  })
  } catch (error) {
    next(error)	
    return
  }
  try {
	  const modifiedProduct =  productManager.updateProduct(req.params.pid, productToModify)
	  res.json(modifiedProduct)
  } catch (error) {
    next(error)
  }
});

apiProducts.delete("/:pid", async (req, res, next) => { 
  try {
	  const productToDelete = await productManager.deleteProduct(req.params.pid)
	  res.json(productToDelete)
} catch (error) {
	next(error)
}
});
