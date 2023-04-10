import { Router } from "express";
import {CartsManager} from "../CartsManager.js"
import {ProductManager} from "../ProductManager.js"
import { randomUUID } from 'crypto'
import { Carts } from "../carts.js";

export const apiCarts = Router();
const cartManager = new CartsManager("./static/carts.txt")
const productManager = new ProductManager("./static/products.txt")

apiCarts.get("/", async (req, res, next) => { 
  try {
    if (req.query.limit !== undefined){
        res.json(await cartManager.getNCartsProducts(parseInt(req.query.limit)))
      }else{
        res.json(await cartManager.getCartsProducts())
      }
  } catch (error) {
    next(error)
  }
})
apiCarts.get("/:cid", async (req, res, next) => {
  try {
	  res.send(await cartManager.getCartsProductById((req.params.cid)))
  } catch (error) {
	  next(error)
  } 
 })
apiCarts.post("/", async (req, res, next) => { 
  try {
	  const cart = new Carts({
      id: randomUUID()
	  })
    const newCart = await cartManager.createCartsProduct(cart)
    res.json(newCart)
  } catch (error) {
	next(error)
  }
});
apiCarts.post("/:cid/product/:pid", async (req, res, next) => { 
  try {
    const product = await productManager.exportProductByIdForCarts(req.params.pid)
    const newProductToCarts = await cartManager.updateCartProduct(req.params.cid, req.params.pid, product)
    res.json(newProductToCarts)
  } catch (error) {
	next(error)
  }
});
apiCarts.put("/", async (req, res, next) => { });
apiCarts.delete("/", async (req, res, next) => { });
