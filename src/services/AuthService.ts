import axios, { AxiosResponse } from "axios";

type SignIn = {
  email: string;
  password: string;
};

type SignInResponse = {
  uSession: string;
  uIdentifier: string;
};

class AuthService {
  async authenticateAdminUser(data: SignIn) {
    const response: AxiosResponse<SignInResponse> = await axios.post(
      "http://localhost:8080/api/admin/sign-in",
      data
    );

    return response.data;
  }
}

export const authService = new AuthService();
