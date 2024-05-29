import { z } from "zod";

export const sharedProductFormSchema = z.object({
  barCode: z.string(),
  measure: z.string(),
  productName: z.string(),
  description: z.string(),
});
