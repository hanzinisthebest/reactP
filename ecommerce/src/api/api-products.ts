import axios from "axios";
import Product, { SingalProduct } from "../models/product";
import { log } from "console";




export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://course-api.com/react-store-products"
  );
  return response.data;
}; 

export const fetchProductsById = async (id:string): Promise<SingalProduct> => {
  const response = await axios.get(
    "https://course-api.com/react-store-single-product?id="+id
  );
  return response.data;
};

