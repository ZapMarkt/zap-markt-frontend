import { z } from "zod";
import { sharedProductFormSchema } from "../libs/zod/sharedProductFormSchema";

export type SharedProductFormSchema = z.infer<typeof sharedProductFormSchema>;
