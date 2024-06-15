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

interface payMethod {
  method: string;
  //   icon: JSX.Element;
}

export interface ordersColumns {
  id: number;
  name: string;
  adress: string;
  value: number;
  quantify: number;
  payMethod: payMethod;
  status:
    | 'Pendente'
    | 'Aceito'
    | 'Rota de entrega'
    | 'Concluído'
    | 'Cancelado'
    | 'Em separação';
  action: string;
}
