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

  signOut = async (userSession: string) => {
    await this.httpClient.post("/admin/sign-out", { session: userSession });
  };

  removeAdmin = async (userUUID: string) => {
    await this.httpClient.delete(`/admin/${userUUID}`);
  };
}

export const adminService = new AdminService();
