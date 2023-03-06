import fs from "fs/promises"
export class ProductManager {
  constructor(path) {
    this.path = path
  }
  static productList
  async loadProduct() {
    const json = await fs.readFile(this.path, "utf-8")
    ProductManager.productList = JSON.parse(json)
  }
  async saveProduct() {
    const json = JSON.stringify(ProductManager.productList, null, 2)
    await fs.writeFile(this.path, json)
  }
  async getProducts() {
    await this.loadProduct()
    return  ProductManager.productList
  }
  async getNProducts(limit) {
    let arrayWithLimit = []
    await this.loadProduct()
    for (let i = 0; i < limit; i++){
      arrayWithLimit.push(ProductManager.productList[i])
    } 
    return arrayWithLimit
  }
  async addProduct(product) {
    let id = 0
    await this.loadProduct()
    if (ProductManager.productList.length) {
      let storesCodes = []

      for (const i of ProductManager.productList) {
        storesCodes.push(i.code)
        id = i.id + 1
      }
      if (storesCodes.includes(product.code)) {
        console.log("ERROR: codigo repetido, modifiquelo")
      } else {
        product["id"] = id
        ProductManager.productList.push(product)
      }
    } else {
      product["id"] = id
      ProductManager.productList.push(product)
    }
    await this.saveProduct()
  }
  async getProductById(id) {
    await this.loadProduct()
    let storesIds = []
    for (const i of ProductManager.productList) {
      storesIds.push(i.id)
      if (i.id === id) {
        return i
      }
    }
    if (!storesIds.includes(id)) {
     return "Error: Id not found"
    }
  }
  async updateProduct(id, item, value) {
    const name = item
    await this.loadProduct()
    for (const i of ProductManager.productList) {
      if (i.id === id) {
        i[name] = value
      }
    }
    await this.saveProduct()
  }
  async deleteProduct(id) {
    await this.loadProduct()
    for (const i in ProductManager.productList) {
      if (ProductManager.productList[i].id === id) {
        ProductManager.productList.splice(i, 1)
      }
    }
    await this.saveProduct()
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
  }
}
/*const productManager = new ProductManager("./static/products.txt")
await productManager.getProducts()
await productManager.addProduct(new Product("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25))
await productManager.getProducts()
await productManager.getProductById(0)
await productManager.updateProduct(0, "title", "producto prueba 2")
await productManager.getProducts()
await productManager.deleteProduct(0)
productManager.getProducts()*/