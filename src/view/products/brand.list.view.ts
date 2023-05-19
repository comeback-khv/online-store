import { state } from '../../store/state';

class BrandListView {
  render(root: HTMLElement) {
    let template = '';
    const brands = new Set(state.products.map(i => i.brand));
    brands.forEach(i => {
      template += `<li class="filters__item">
      <input type="checkbox" class="filters__item-checkbox" id="${i}-checkbox" data-filter="brand" data-parameter="${i}">
      <label for="${i}-checkbox" class="filters__label">
      <span class='filters__item-name'>${i}</span>
      </label>
      </li>`;
    });
    if (root) {
      root.insertAdjacentHTML('beforeend', template);
    }
  }
}

export default new BrandListView();
