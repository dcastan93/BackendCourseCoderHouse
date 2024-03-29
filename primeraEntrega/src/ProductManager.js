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
    await this.loadProduct()
    if (ProductManager.productList.length) {
      let storesCodes = []
      for (const i of ProductManager.productList) {
        storesCodes.push(i.code)
      }
      if (storesCodes.includes(product.code)) {
        console.log("ERROR: codigo repetido, modifiquelo")
      } else {
        ProductManager.productList.push(product)
      }
    }
    await this.saveProduct()
    return product
  }
  async getProductById(id) {
    await this.loadProduct()
    const findById =  ProductManager.productList.find(c => c.id === id)
    if (!findById) {
     throw new Error("id not find")
    }
    return findById
  }
  async exportProductByIdForCarts(id) {
    await this.loadProduct()
    const findById =  ProductManager.productList.find(c => c.id === id)
    if (!findById) {
     throw new Error("id not find")
    }
    return {
      id: findById.id,
      quantity: 1
    }
  }
  async updateProduct(id,  newValue) {
    await this.loadProduct()
    const idLooked = ProductManager.productList.findIndex(c => c.id === id)
    if(idLooked === -1){
      throw new Error("id not found")
    }
    ProductManager.productList[idLooked] = newValue
    await this.saveProduct()
    return newValue
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