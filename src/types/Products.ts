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
  onPromotion: boolean;
  promotionValue?: number;
}
