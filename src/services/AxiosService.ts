import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export class AxiosService {
  protected httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL,
      withCredentials: true,
    });
  }
}

export const httpClient = new AxiosService();
