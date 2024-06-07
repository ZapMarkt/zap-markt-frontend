import { AxiosResponse } from "axios";
import { AxiosService } from "./AxiosService";

type SignIn = {
  email: string;
  password: string;
};

type SignInResponse = {
  uSession: string;
  uIdentifier: string;
};

class AdminService extends AxiosService {
  authenticate = async (data: SignIn) => {
    const response: AxiosResponse<SignInResponse> = await this.httpClient.post(
      "/admin/sign-in",
      data
    );

    return response.data;
  };
}

export const adminService = new AdminService();
