import categoryListView from './category.list.view';
import productsListView from './products.list.view';
import brandListView from './brand.list.view';
import productsModel from '../../model/products.model';
import productsController from '../../controller/products.controller';

type Layout = {
  categoryList: HTMLElement;
  brandList: HTMLElement;
  products: HTMLElement;
};

class ProductsView {
  layout = {} as Layout;

  subscribe() {
    productsModel.on('update.filter', () =>
      productsListView.render(this.layout.products)
    );
  }

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers();
    this.subscribe();
  }

  createLayout(root: HTMLElement) {
    const template = `<div class="container main__container">
    <section class="filters">
      <span class="filters__name">Category</span>
      <ul class="filters__list" id="category"></ul>
      <span class="filters__name">Brand</span>
      <ul class="filters__list" id="brand"></ul>
    </section>
    <section class="products"></section>
    </div>`;
    if (root) {
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', template);
    }
    const categoryList = document.getElementById('category') as HTMLElement;
    const brandList = document.getElementById('brand') as HTMLElement;
    const products = document.querySelector('.products') as HTMLElement;
    this.layout.categoryList = categoryList;
    this.layout.brandList = brandList;
    this.layout.products = products;
  }

  render() {
    categoryListView.render(this.layout.categoryList);
    brandListView.render(this.layout.brandList);
    productsListView.render(this.layout.products);
  }

  addHandlers() {
    const inputs = document.querySelectorAll(
      '.filters__item-checkbox'
    ) as NodeListOf<HTMLElement>;
    inputs.forEach(input => {
      input.addEventListener('click', () => {
        productsController.filterProducts(input);
      });
    });
  }
}

export default new ProductsView();
