export interface Product {
  id: number;
  nome: string;
  valor: number;
  quantidade: number;
  unidade: string;
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
