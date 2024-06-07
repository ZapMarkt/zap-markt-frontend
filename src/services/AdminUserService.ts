import axios from "axios";

type AdminUser = {
  name: string;
  email: string;
  password: string;
  roleId: number;
};

class AdminUserService {
  async createAdminUser(data: AdminUser) {
    const response = await axios.post("http://localhost:8080/api/admin/sign-up", data);
    return response.data;
  }
}

export const adminUserService = new AdminUserService();
