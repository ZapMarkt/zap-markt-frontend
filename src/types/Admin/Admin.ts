import { Role } from "../Role";

export type Admin = {
  uuid: string;
  name: string;
  email: string;
  role: Role;
};
