import fs from "fs/promises"
export class CartsManager {
  constructor(path) {
    this.path = path
  }
  static cartsProductList
  async loadCartsProduct() {
    const json = await fs.readFile(this.path, "utf-8")
    CartsManager.cartsProductList = JSON.parse(json)
  }
  async saveCartsProduct() {
    const json = JSON.stringify(CartsManager.cartsProductList, null, 2)
    await fs.writeFile(this.path, json)
  }
  async getCartsProducts() {
    await this.loadCartsProduct()
    return  CartsManager.cartsProductList
  }
  async getNCartsProducts(limit) {
    let arrayWithLimit = []
    await this.loadCartsProduct()
    for (let i = 0; i < limit; i++){
      arrayWithLimit.push(CartsManager.cartsProductList[i])
    } 
    return arrayWithLimit
  }
  async createCartsProduct(product) {
    await this.loadCartsProduct()
    CartsManager.cartsProductList.push(product)
    await this.saveCartsProduct()
    return product
  }
  async getCartsProductById(id) {
    await this.loadCartsProduct()
    const findById =  CartsManager.cartsProductList.find(c => c.id === id)
    if (!findById) {
     throw new Error("id not find")
    }
    return findById.products
  }
  async updateCartProduct(id, pid,  newValue) {
    await this.loadCartsProduct()
    const idLooked = CartsManager.cartsProductList.findIndex(c => c.id === id)
    if(idLooked === -1){
      throw new Error("id not find")
    }
    const pidLooked = CartsManager.cartsProductList[idLooked].products.findIndex(c => c.id === pid)
    console.log(pidLooked)
    if(pidLooked !== -1){
      CartsManager.cartsProductList[idLooked].products[pidLooked].quantity += 1
    }else{
      CartsManager.cartsProductList[idLooked].products.push(newValue)
    }
    await this.saveCartsProduct()
    return newValue
  }
  async deleteProduct(id) {
    await this.loadCartsProduct()
    for (const i in CartsManager.cartsProductList) {
      if (CartsManager.cartsProductList[i].id === id) {
        CartsManager.cartsProductList.splice(i, 1)
      }
    }
    await this.saveCartsProduct()
  }
}