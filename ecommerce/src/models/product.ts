export enum CategoryEnum {
  All = "all",
  OFFICE = "office",
  LIVING_ROOM = "living room",
  KITCHEN = "kitchen",
  BEDROOM = "bedroom",
  DINING ="dining",
  KIDS = "kids"
}
export enum ColorsEnum{
  All = "all",
  RED = "#ff0000",
  GREEN = "#00ff00",
  BLUE = "#0000ff",
  GREY = "#000",
  YELLOW = "#ffb900"
}

// export enum SortEnum{
//   LOW = "price-lowest",
//   HIGH = "price-highest",
//   ATOZ = "name-a",
//   ZTOA = "name-z"
// }

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: CategoryEnum;
  shipping: boolean;
}

export default Product;
