import { z } from "zod";
import { supermarketFormSchema } from "../libs/zod/SupermarketFormSchema";

export type SupermarketFormSchema = z.infer<typeof supermarketFormSchema>;
