import { AxiosResponse } from "axios";
import { Admin } from "../types/Admin/Admin";
import { Role } from "../types/Role";
import { AxiosService } from "./AxiosService";

class RolesService extends AxiosService {
  getAll = async () => {
    const response: AxiosResponse<Role[]> = await this.httpClient.get("/role");
    return response.data;
  };

  getMyInfo = async () => {
    const response: AxiosResponse<Admin> = await this.httpClient.get(
      "/role/me"
    );
    return response.data;
  };
}

export const rolesService = new RolesService();
