import { state } from '../../store/state';

class ProductsListView {
  render(root: HTMLElement) {
    const filteredProducts = state.filteredProducts.length
      ? state.filteredProducts
      : state.products;
    let productsList = '';
    filteredProducts.forEach(product => {
      productsList += `<li class='products__item'>
        <img src='${product.thumbnail}' alt='${product.title}' class='products__thumbnail' width='170' height='170'>
        <p class='products__title'>${product.title}</p>
        <p class='products__rating'>Rating: ${product.rating}</p>
        <p class='products__stock'>Stock: ${product.stock}</p>
      </li>`;
    });
    const template = `<ul class="products__list">${productsList}</ul>`;

    if (root) {
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', template);
    }
  }
}

export default new ProductsListView();
