import { products } from '../store/products.json';

class ProductsView {
  private createLayout() {}

  render(root: HTMLElement) {
    let productsList = '';
    products.forEach(product => {
      productsList += `<li class='products__item'>
        <img src='${product.thumbnail}' alt='${product.title}' class='products__thumbnail' width='170' height='170'>
        <p class='products__title'>${product.title}</p>
        <p class='products__rating'>Rating: ${product.rating}</p>
        <p class='products__stock'>Stock: ${product.stock}</p>
      </li>`;
    });
    const template = `<section class="products">
          <ul class="products__list">${productsList}</ul>
        </section>`;

    if (root) {
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', template);
    }
  }
}

export default new ProductsView();
