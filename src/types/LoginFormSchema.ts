import { z } from "zod";
import { loginFormSchema } from "../libs/zod/LoginFormSchema";

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
