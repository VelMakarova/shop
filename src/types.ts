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
  size: string;
  color: string;
}
