import { AxiosResponse } from "axios";
import { AxiosService } from "./AxiosService";
import { RequestPaginationParams } from "./SupermarketService";

type Measure = {
  name: string;
  type: string;
  id: number;
  uuid: string;
};

type Product = {
  barcode: string;
  measureId: number;
  name: string;
  description: string;
  picture: File;
};

export type PaginatedData<T> = {
  items: T[];
  page: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type SharedProduct = {
  barcode: string;
  measure: {
    name: string;
  };
  name: string;
  description: string;
  picture: {
    blob: string;
    uri: string;
  };
  id: number;
  uuid: string;
};

class ProductService extends AxiosService {
  getAllMeasures = async () => {
    const response: AxiosResponse<Measure[]> = await this.httpClient.get("/product/measures");
    return response.data;
  };

  createProduct = async (data: Product) => {
    const response: AxiosResponse<SharedProduct> = await this.httpClient.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  getSharedPorducts = async (pagination: RequestPaginationParams) => {
    const response: AxiosResponse<PaginatedData<SharedProduct>> = await this.httpClient.get(
      "/products",
      {
        params: {
          size: pagination.pageSize,
          page: pagination.pageIndex + 1,
        },
      }
    );
    return response.data;
  };

  deleteSharedProduct = async (productId: string) => {
    await this.httpClient.delete(`/products/${productId}`);
  };
}

export const productService = new ProductService();
