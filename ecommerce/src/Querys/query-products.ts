import { fetchProducts, fetchProductsById } from "../api/api-products";
import Product, { SingalProduct } from "../models/product";
import {
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useGetProducts = (options?: UseQueryOptions<Product[], Error>) =>
  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    ...options,
  });
  export const useGetProductById = (id:string,options?: UseQueryOptions<SingalProduct, Error>) =>
  useQuery({
    queryKey: ["products",id],
    queryFn: ()=>fetchProductsById(id),
    ...options,
  });