import { products } from '../store/products.json';
import Products from '../types/products';

type State = {
  products: Products[];
  filteredProducts: Products[];
  path?: string;
  filterParams: {
    [key: string]: string[];
    category: string[];
    brand: string[];
  };
};

export const state: State = {
  products: products,
  filteredProducts: [],
  filterParams: {
    category: [],
    brand: [],
  },
};
