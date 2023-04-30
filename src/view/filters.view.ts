import { products } from '../store/products.json';
import IProducts from '../types/products';

const data: IProducts[] = products;

class FiltersView {
  root;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;
  }

  private createCategoryFilterList() {
    let categoryList = '';
    const category = new Set(data.map(i => i.category));
    category.forEach(i => {
      categoryList += `<li class="filters__item-category">${i}</li>`;
    });
    return categoryList;
  }

  private createBrandFilterList() {
    let brandList = '';
    const brand = new Set(data.map(i => i.brand));
    brand.forEach(i => {
      brandList += `<li class="filters__item-brand">${i}</li>`;
    });
    return brandList;
  }

  private createLayout() {
    console.log(data);
    return ``;
  }

  render() {
    // this.root.innerHTML += this.createLayout();
  }
}

export default FiltersView;
