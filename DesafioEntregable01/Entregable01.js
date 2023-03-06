class ProductManager {
  constructor (){
  }
  static productList = []
  static id = 0
  addProduct (product){
    if(ProductManager.productList.length){
      let storesCodes = []
      for(const i of ProductManager.productList){
        storesCodes.push(i.code)
      }
      if (storesCodes.includes(product.code)){
        console.log("ERROR: codigo repetido, modifiquelo")
      }else{
        product["id"] = ProductManager.id
        ProductManager.productList.push(product)
      }
    }else{
      product["id"] = ProductManager.id
      ProductManager.productList.push(product)
    }
    ProductManager.id ++
  }
  getProducts(){
    return ProductManager.productList
  }
  getProductById(id){
    let storesIds = []
    for (const i of ProductManager.productList){
      storesIds.push(i.id)
      if (i.id === id){
        return i
      }
    }
    if (!storesIds.includes(id)){
      console.log("Error: Id not found")
    }
  }

}
class Product {
  constructor(title, description , price, thumbnail, code, stock){
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
  }
}
/*const productManager = new ProductManager()
console.log(productManager.getProducts())
productManager.addProduct(new Product("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25))
productManager.addProduct(new Product("Producto prueba 2", "Este es un producto prueba 2", 200, "Sin imagen 2", "def123", 25))
console.log(productManager.getProducts())
console.log(productManager.getProductById(1))*/




