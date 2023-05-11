import { products } from '../store/products.json';

class ProductsView {
  private createLayout() {}

  render(root: HTMLElement) {
    let brandList = '';
    let categoryList = '';
    let productsList = '';
    const brand = new Set(products.map(i => i.brand));
    const category = new Set(products.map(i => i.category));
    brand.forEach(i => {
      brandList += `<li class="filters__item">
      <input type='checkbox' class='filters__item-checkbox'>
      <span class='filters__item-name'>${i}</span>
      </li>`;
    });
    category.forEach(i => {
      categoryList += `<li class="filters__item">
      <input type='checkbox' class='filters__item-checkbox'>
      <span class='filters__item-name'>${i}</span>
      </li>`;
    });
    products.forEach(product => {
      productsList += `<li class='products__item'>
        <img src='${product.thumbnail}' alt='${product.title}' class='products__thumbnail' width='170' height='170'>
        <p class='products__title'>${product.title}</p>
        <p class='products__rating'>Rating: ${product.rating}</p>
        <p class='products__stock'>Stock: ${product.stock}</p>
      </li>`;
    });
    const template = `<div class="container main__container">
    <section class="filters">
    <span class='filters__name'>Category</span>
    <ul class='filters__list'>
    ${categoryList}
    </ul>
    <span class='filters__name'>Brand</span>
    <ul class='filters__list'>
    ${brandList}
    </ul>
    </section>
    <section class="products">
          <ul class="products__list">${productsList}</ul>
    </section>
    </div>`;

    if (root) {
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', template);
    }
  }
}

export default new ProductsView();
