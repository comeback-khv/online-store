import { state } from '../store/state';
import { EventEmitter } from '../utils/event.emitter';

class ProductsModel extends EventEmitter {
  route() {
    state.path = 'products';
    this.updateURL();
    this.emit('update.filter');
  }

  updateURL() {
    state.queryParametersString = state.filteredProducts.length
      ? `?category=${state.queryParametersArray.join('↕')}`
      : window.location.pathname;
    window.history.pushState({}, '', state.queryParametersString);
  }

  filterProducts(el: HTMLElement) {
    console.log('da');
    const filter = el.dataset.filter;
    const parameter = el.dataset.parameter;
    const isExist = state.filterParameters[filter].some(i => i === parameter);
    if (isExist) {
      state.filterParameters[filter] = state.filterParameters[filter].filter(
        i => i != parameter
      );
    } else state.filterParameters[filter].push(parameter);

    state.filteredProducts = [];
    let filteredByCategory = [];
    let filteredByBrand = [];

    if (state.filterParameters.category.length) {
      filteredByCategory = state.filterParameters.category
        .map(i => {
          return state.products.filter(product => product.category === i);
        })
        .flat(2);
      state.filteredProducts = filteredByCategory;
    } else state.filteredProducts = state.products;

    if (state.filterParameters.brand.length) {
      filteredByBrand = state.filterParameters.brand
        .map(i => {
          return state.filteredProducts.filter(product => product.brand === i);
        })
        .flat(2);
      state.filteredProducts = filteredByBrand;
    }

    this.route();
  }
}

export default new ProductsModel();