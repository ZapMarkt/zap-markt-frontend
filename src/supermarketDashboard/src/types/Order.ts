export interface Product {
  nome: string;
  valor: number;
  unity: number;
  img: string;
}

export interface Order {
  order: string;
  name: string;
  adress: string;
  valor: number;
  quantidade: number;
  status: string;
  orderProducts: {
    [key: string]: Product;
  };
}
