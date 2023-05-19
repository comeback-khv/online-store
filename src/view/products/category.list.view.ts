import { state } from '../../store/state';

class CategoryListView {
  render(root: HTMLElement) {
    let template = '';
    const categories = new Set(state.products.map(i => i.category));
    categories.forEach(i => {
      template += `<li class="filters__item">
      <input type="checkbox" class="filters__item-checkbox" id="${i}-checkbox"  data-filter="category" data-parameter="${i}">
      <label for="${i}-checkbox" class="filters__label">
      <span class="filters__item-name">${i}</span>
      </label>
      </li>`;
    });
    if (root) {
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', template);
    }
  }
}

export default new CategoryListView();
