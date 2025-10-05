export interface Order {
  id: string;
  name: string;
  date: string;
  total: string;
  status: "Processing" | "Shipped" | "Completed" | "Refunded" | "Cancelled";
}

export interface Product {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  rating: number | null;
  reviews?: number;
  inCart: boolean;
  cartCount: number;
  isFavorite: boolean;
}
