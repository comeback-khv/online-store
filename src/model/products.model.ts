import { state } from '../store/state';
import { EventEmitter } from '../utils/event.emitter';

class ProductsModel extends EventEmitter {
  route() {
    state.path = 'products';
    this.updateURL();
    this.emit('update.filter');
  }

  updateURL() {
    const searchParameters = {};
    Object.keys(state.filterParameters).forEach(i => {
      if (state.filterParameters[i].length) {
        searchParameters[i] = state.filterParameters[i];
      }
    });
    const searchParams = Object.keys(searchParameters)
      .map(i => i + '=' + searchParameters[i].map(i => i).join('-'))
      .join('&');

    history.pushState(
      {},
      '',
      searchParams ? `?${searchParams}` : window.location.pathname
    );
  }

  filterProducts(el: HTMLElement) {
    const filter = el.dataset.filter;
    const parameter = el.dataset.parameter;

    if (filter) {
      const isExist = state.filterParameters[filter].some(i => i === parameter);
      if (isExist) {
        state.filterParameters[filter] = state.filterParameters[filter].filter(
          i => i != parameter
        );
      } else state.filterParameters[filter].push(parameter);
    }
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
