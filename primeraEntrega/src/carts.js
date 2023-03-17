export class Carts {
  constructor({id}) {
    if (!id) throw new Error('Id missing')
    this.id = id;
    this.products = [];
  }
}
