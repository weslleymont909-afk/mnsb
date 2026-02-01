
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  tag?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavLink {
  label: string;
  href: string;
}
