import { AxiosService } from "./AxiosService";

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

class SupermarketService extends AxiosService {
  registerSupermarket = async (data: Supermarket) => {
    await this.httpClient.post("/supermarket", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}

export const supermarketService = new SupermarketService();
