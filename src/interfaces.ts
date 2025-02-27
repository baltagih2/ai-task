export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  bestSeller?: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export type SortOption =
  | "name_asc"
  | "name_desc"
  | "price_asc"
  | "price_desc"
  | "best_seller";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  date: Date;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  total: number;
  cart: CartItem[];
};
