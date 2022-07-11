export interface ProductType {
  id: string;
  title: string;
  price: string;
  img: string[];
  category: string;
  gender: string;
  color: string[];
  size: string[];
  description: string;
  code: string;
}

export interface CartItem {
  id: string;
  amount: number;
  price: number;
  size: string;
  color: string;
}
