export class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    if (!id) throw new Error('falta un argumento')
    if (!title) throw new Error('falta un argumento')
    if (!description) throw new Error('falta un argumento')
    if (!price) throw new Error('falta un argumento')
    if (!thumbnail) throw new Error('falta un argumento')
    if (!code) throw new Error('falta un argumento')
    if (!stock) throw new Error('falta un argumento')
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}
