export class Product {
  constructor({id, title, description, price, thumbnail, code, stock, status, category}) {
    if (!id) throw new Error('Id missing')
    if (!title) throw new Error('title missing')
    if (!description) throw new Error('description missing')
    if (!price) throw new Error('price missing')
    if (!thumbnail) throw new Error('thumbnail missing')
    if (!code) throw new Error('code missing')
    if (!stock) throw new Error('stock missing')
    if (!status) throw new Error('status missing') 
    if (!category) throw new Error('category missing')
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.status = status;
    this.category = category;
  }
}
