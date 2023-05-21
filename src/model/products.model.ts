import { state } from '../store/state';
import { EventEmitter } from '../utils/event.emitter';
import Products from '../types/products';

class ProductsModel extends EventEmitter {
  route() {
    state.path = 'products';
    this.updateURL();
    this.emit('update.filter');
  }

  updateURL() {
    const searchParams: { [key: string]: string[] } = {};
    let searchParamsString = '';
    Object.keys(state.filterParams).forEach(i => {
      if (state.filterParams[i].length) {
        searchParams[i] = state.filterParams[i];
      }
    });
    searchParamsString = Object.keys(searchParams)
      .map(i => i + '=' + searchParams[i].map(j => j).join('-'))
      .join('&');

    history.pushState(
      {},
      '',
      searchParamsString ? `?${searchParamsString}` : window.location.pathname
    );
  }

  filterProducts(el: HTMLElement) {
    const filter = el.dataset.filter;
    const parameter = el.dataset.parameter;
    if (filter && parameter) {
      const isExist = state.filterParams[filter].some(i => i === parameter);
      if (isExist) {
        state.filterParams[filter] = state.filterParams[filter].filter(
          i => i != parameter
        );
      } else state.filterParams[filter].push(parameter);
    }
    state.filteredProducts = [];
    let filteredByCategory: Products[] = [];
    let filteredByBrand: Products[] = [];

    if (state.filterParams.category.length) {
      filteredByCategory = state.filterParams.category
        .map(i => {
          return state.products.filter(product => product.category === i);
        })
        .flat(2);
      state.filteredProducts = filteredByCategory;
    } else state.filteredProducts = state.products;

    if (state.filterParams.brand.length) {
      filteredByBrand = state.filterParams.brand
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
