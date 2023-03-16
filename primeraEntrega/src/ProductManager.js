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
    let id = 0/home/dcastan93/BackendCourseCoderHouse/clasesCoder/clase08
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
    const findById =  ProductManager.productList.find(c => c.id === id)
    if (!findById) {
     throw new Error("id not find")
    }
    return findById
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