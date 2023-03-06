import express from "express"
import {ProductManager} from "./ProductManager.js"
//esto se monta un servidor de forma màs facil
const app = express();
app.use(express.urlencoded({extended:true}))
const productManager = new ProductManager("./static/products.txt")

app.get('/products', async (req, res) => {
  if (req.query.limit !== undefined){
    res.json(await productManager.getNProducts(parseInt(req.query.limit)))
  }else{
    res.json(await productManager.getProducts())
  }
  
});

app.get('/products/:id', async (req, res) => {
  res.json(await productManager.getProductById(parseInt(req.params["id"])))
});
app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);