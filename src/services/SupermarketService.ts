import { AxiosResponse } from "axios";
import { AxiosService } from "./AxiosService";
import { PaginatedData } from "./ProductService";

type Supermarket = {
  picture: File;
  banner: File;
  establishmentName: string;
  cnpj: string;
  stateRegistration: string;
  cellPhone: string;
  telephone: string;
  email: string;
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type ISupermarket = {
  name: string;
  cnpj: string;
  email: string;
  plan: string;
  status: string;
  inactive: boolean;
};

export type RequestPaginationParams = {
  pageIndex: number;
  pageSize: number;
};
class SupermarketService extends AxiosService {
  registerSupermarket = async (data: Supermarket) => {
    await this.httpClient.post("/supermarket", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  getSupermarkets = async (pagination: RequestPaginationParams) => {
    const response: AxiosResponse<PaginatedData<ISupermarket>> = await this.httpClient.get(
      "/supermarket",
      {
        params: {
          page: pagination.pageIndex + 1,
          size: pagination.pageSize,
        },
      }
    );
    return response.data;
  };
}

export const supermarketService = new SupermarketService();
