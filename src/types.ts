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

export interface RegisterForm {
  id: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}

export interface RegisterUser {
  id: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ActiveFilterType {
  color: string[];
  size: string[];
  category: string;
  gender: string;
}
