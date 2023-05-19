import { products } from '../store/products.json';
import Products from '../types/products';

type State = {
  products: Products[];
  filteredProducts: Products[];
  queryParametersArray: string[];
  queryParametersString: string;
  path?: string;
  filterParameters: {
    category: string[];
    brand: string[];
  };
};

export const state: State = {
  products: products,
  queryParametersArray: [],
  queryParametersString: '',
  filteredProducts: [],
  filterParameters: {
    category: [],
    brand: [],
  },
};
