import express from "express"
import { engine } from 'express-handlebars'
import { ProductManager } from "./ProductManager.js"
import { Server as SocketIOServer } from "socket.io"
//esto se monta un servidor de forma màs facil
const productManager = new ProductManager("./static/products.json")

const app = express();
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.use(express.static("./public"))

/*app.get('/', async (req, res, next) => {
  // const listado = ['comer', 'dormir']
  let productList = []
  let objetoToArray = {}
  try {
    if (req.query.limit !== undefined) {
      objetoToArray = ((await productManager.getNProducts(parseInt(req.query.limit))))
    } else {
      objetoToArray = ((await productManager.getProducts()))
    }

    for (const key of objetoToArray) {
      productList.push(JSON.stringify(key))
    }

    res.render('home.handlebars', {
      titulo: 'Products',
      header: 'You can find all the products bellow:',
      productList,
      noEmptyList: productList.length > 0
    })
  } catch (error) {
    next(error)
  }
})*/

app.get('/', async (req, res, next) => {
  // const listado = ['comer', 'dormir']
  let productList = []
  let objetoToArray = {}
  try {
    if (req.query.limit !== undefined) {
      objetoToArray = ((await productManager.getNProducts(parseInt(req.query.limit))))
    } else {
      objetoToArray = ((await productManager.getProducts()))
    }

    for (const key of objetoToArray) {
      productList.push(JSON.stringify(key))
    }

    res.render('realTimeProduct.handlebars', {
      titulo: 'Products',
      header: 'You can find all the products bellow:',
      productList,
      noEmptyList: productList.length > 0
    })
  } catch (error) {
    next(error)
  }
})


const httpServer = app.listen(8080, () =>
  console.log('App listening on port 8080!'),
);

const io = new SocketIOServer(httpServer)

io.on("connection", clientSocket => {
  console.log("nuevo cliente conectado")
  //clientSocket.emit("hello", "world");
});

/*io.on("connection",  serverSocket => {

  let productList = []
    let objetoToArray = {}
    try {
      
      objetoToArray = ((await productManager.getProducts()))
      for(const key of objetoToArray){
        productList.push(JSON.stringify(key))
      }
      clientSocket.emit("mensajito", {productList})//concección al socket del lado del servidor
      
    } catch (error) {
    next(error)
    }
  
  
})*/

