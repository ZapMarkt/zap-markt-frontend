import { AxiosResponse } from "axios";
import { AxiosService } from "./AxiosService";
import { Admin } from "../types/Admin/Admin";

type SignIn = {
  email: string;
  password: string;
};

export type SignInResponse = {
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

  getAll = async () => {
    const response: AxiosResponse<Admin[]> = await this.httpClient.get("/admin");
    return response.data;
  };

  signOut = async () => {
    await this.httpClient.post("/admin/sign-out");
  };
}

export const adminService = new AdminService();
