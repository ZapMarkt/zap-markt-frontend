import axios, { AxiosResponse } from "axios";
import { Role } from "../types/Role";

class RolesService {
  async getRoles() {
    const response: AxiosResponse<Role[]> = await axios.get("http://localhost:8080/api/role");
    return response.data;
  }
}

export const rolesService = new RolesService();
