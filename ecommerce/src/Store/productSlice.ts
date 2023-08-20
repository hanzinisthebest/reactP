import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import Product from '../models/product';




interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  filters: {
    price:number;
    category: string|null;
    company: string;
    color: string|undefined;

  };
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filters: {
    price: 3099.99,
    category: 'All',
    company: 'all',
    color: 'All',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
    setPriceFilter(state, action: PayloadAction<number>) {
      state.filters.price = action.payload;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
    setCategoryFilter(state, action: PayloadAction<string|null>) {
      state.filters.category = action.payload;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
    setCompanyFilter(state, action: PayloadAction<string>) {
      state.filters.company = action.payload;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
    setColorsFilter(state, action: PayloadAction<string|undefined>) {
      state.filters.color = action.payload;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
    initFilters(state) {
      state.filters = initialState.filters;
      state.filteredProducts = applyFilters(state.products,state.filters);
    },
  },
});

function applyFilters(products: Product[], filters: ProductsState['filters']): Product[] {
  return products
    .filter((product) => product.price <= filters.price)
    .filter((product) =>  product.category === filters.category)
    .filter((product) => product.company === filters.company)
     .filter((product)  =>filters.color && product.colors.includes(filters.color));
}

export const { setProducts, setPriceFilter, setCategoryFilter, setCompanyFilter, setColorsFilter, initFilters } =
  productsSlice.actions;

export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;