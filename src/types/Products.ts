export interface Product {
  id: number;
  img: string;
  name: string;
  category: string;
  categoryId: string;
  value: number;
  quantify: number;
  unity: string;
  codeBar: string;
  onPromotion?: boolean;
  promotionValue?: number;
}

export interface ProductForm {
  barCode: string;
  measureId: string;
  name: string;
  image: {};
  price: number;
  isOnPromotion?: boolean;
  promotionalPrice?: number;
  description?: string;
  categoryId: string;
  stock: string;
  pdvCode: string;
}
