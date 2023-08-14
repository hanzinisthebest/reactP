import { fetchProducts } from "../api/api-products";
import Product from "../models/product";
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