import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Product, { CategoryEnum, ColorsEnum } from "../models/product";

interface IFilter {
  price: number;
  category: CategoryEnum;
  company: string;
  color: ColorsEnum;
  shipping: boolean;
  search: string;
}

type FilterPayload = {
  [P in keyof IFilter]?: IFilter[P];
};

interface ProductsState {
  products: Product[];
  maxFilterPrice: number;
  productsAmount: number;
  sort: string;
  filteredProducts: Product[];
  filters: IFilter;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  maxFilterPrice: 1,
  productsAmount: 22,
  sort: "price-lowest",
  filters: {
    price: 0,
    category: CategoryEnum.All,
    company: "all",
    color: ColorsEnum.All,
    shipping: false,
    search: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterPayload>) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
      state.filteredProducts = applyFilters(state.products, state.filters);
      state.filteredProducts = sortProducts(state.filteredProducts,state.sort);
      state.productsAmount = state.filteredProducts.length;
    },
    setSort(state,action:PayloadAction<string>){
      state.sort=action.payload;
      state.filteredProducts = sortProducts(state.filteredProducts,state.sort);
    },
    initFilters(state) {
      const highestPrice = highestPriceAmongProducts(state.products);
      state.maxFilterPrice = highestPrice;
      state.filters = {
        ...initialState.filters,
        price: highestPrice,
      };
      state.filteredProducts = applyFilters(state.products, state.filters);
      state.filteredProducts = sortProducts(state.filteredProducts,state.sort);
      state.productsAmount = state.filteredProducts.length;
    },
  },
});

const highestPriceAmongProducts = (products: Product[]) => {
  return Math.max(...products.map((product) => product.price));
};

function applyFilters(
  products: Product[],
  filters: ProductsState["filters"]
): Product[] {
  return products.filter((product) => {
    const isUnderPrice = product.price <= filters.price;
    const isInCategory =
      filters.category === "all" ? true : product.category === filters.category;
    const isInCompany =
      filters.company === "all" ? true : product.company === filters.company;
    const isColor =
      filters.color === "all" ? true : product.colors.includes(filters.color);
    const isShipping = filters.shipping
      ? product.hasOwnProperty("shipping")
        ? true
        : false
      : true;
    const isSearch =
      filters.search === "" ? true : product.name.includes(filters.search);
    return (
      isUnderPrice &&
      isInCategory &&
      isInCompany &&
      isColor &&
      isShipping &&
      isSearch
    );
  });

  /* return products
    .filter((product) => product.price <= filters.price)
    .filter((product) => product.category === filters.category)
    .filter((product) => product.company === filters.company)
    .filter((product) => product.colors.includes(filters.color)); */
}

function sortProducts(products: Product[], sort: string): Product[] {
  if (sort === "price-lowest") { 
    return products.sort((a, b) => a.price - b.price);
  }
  if (sort === "price-highest") {
    
    return products.sort((a, b) => b.price - a.price);
  }
  if (sort === "name-a") {
    
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "name-z") {
    
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }
  return products;
}

export const { setProducts, setFilter, initFilters,setSort } = productsSlice.actions;

export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
