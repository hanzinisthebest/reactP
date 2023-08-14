import Product from "./product";

interface CartItem {
    productId: string;
    name: string;
    price: number;
    subtotal:number;
    color: string;
    quantity: number;
  }
  
  interface CartState {
    items: CartItem[];
    cartQuantity:number;
  }
  
  export type { CartItem, CartState };