import { AxiosResponse } from "axios";
import { AxiosService } from "./AxiosService";

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

class ProductService extends AxiosService {
  getAllMeasures = async () => {
    const response: AxiosResponse<Measure[]> = await this.httpClient.get("/product/measures");
    return response.data;
  };

  createProduct = async (data: Product) => {
    await this.httpClient.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}

export const productService = new ProductService();
