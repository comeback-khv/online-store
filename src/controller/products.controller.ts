import productsModel from '../model/products.model';

class ProductsController {
  filterProducts(el: HTMLElement) {
    productsModel.filterProducts(el);
  }
}

export default new ProductsController();
