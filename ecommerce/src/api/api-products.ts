import axios from "axios";
import Product from "../models/product";




export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://course-api.com/react-store-products"
  );
  return response.data;
}; 

