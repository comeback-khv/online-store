import { products } from '../store/products.json';
import Products from '../types/products';

const data: Products[] = products;

class FiltersView {
  private createLayout() {}

  render(root: HTMLElement) {
    let brandList = '';
    const brand = new Set(data.map(i => i.brand));
    brand.forEach(i => {
      brandList += `<li class="filters__item-brand">${i}</li>`;
    });
    const template = brandList;
    if (root) root.insertAdjacentHTML('beforeend', template);
  }
}

export default new FiltersView();
